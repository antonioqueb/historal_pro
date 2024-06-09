import NextAuth from "next-auth";
import KeycloakProvider from "next-auth/providers/keycloak";

// Función para refrescar el token de acceso
async function requestRefreshOfAccessToken(token) {
  const response = await fetch(`${process.env.KEYCLOAK_ISSUER}/protocol/openid-connect/token`, {
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: process.env.KEYCLOAK_CLIENT_ID,
      client_secret: process.env.KEYCLOAK_CLIENT_SECRET,
      grant_type: "refresh_token",
      refresh_token: token.refreshToken,
    }),
    method: "POST",
  });
  const tokens = await response.json();
  if (!response.ok) throw tokens;
  return {
    ...token,
    accessToken: tokens.access_token,
    idToken: tokens.id_token,
    refreshToken: tokens.refresh_token || token.refreshToken,
    expiresAt: Math.floor(Date.now() / 1000 + tokens.expires_in),
  };
}

export const authOptions = {
  providers: [
    KeycloakProvider({
      clientId: process.env.KEYCLOAK_CLIENT_ID,
      clientSecret: process.env.KEYCLOAK_CLIENT_SECRET,
      issuer: process.env.KEYCLOAK_ISSUER,
    }),
  ],
  session: { maxAge: 60 * 30 },
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token = {
          ...token,
          accessToken: account.access_token,
          idToken: account.id_token,
          refreshToken: account.refresh_token,
          expiresAt: account.expires_at,
        };
      } else if (Date.now() < token.expiresAt * 1000 - 60 * 1000) {
        return token;
      } else {
        token = await requestRefreshOfAccessToken(token);
      }
      return token;
    },
    async session({ session, token }) {
      session.accessToken = token.accessToken;
      return session;
    },
  },
  pages: {
    signIn: '/auth/signin',
    signOut: '/auth/signout',
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
