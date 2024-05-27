import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    async jwt({ token, account, user }) {
      console.log('JWT Callback - Initial', { token, account, user });
      if (account) {
        token.accessToken = account.access_token;
        token.id = user.id; // Asigna el ID del usuario al token
        console.log('Access Token and User ID Assigned in JWT Callback', token.accessToken, token.id);
      }
      console.log('JWT Callback - Final', token);
      return token;
    },
    async session({ session, token, user }) {
      console.log('Session Callback - Initial', { session, token, user });
      if (token) {
        session.accessToken = token.accessToken;
        session.user.id = token.id; // Asegúrate de asignar el ID del usuario a la sesión
        console.log('Session Access Token and User ID Assigned', session.accessToken, session.user.id);
      }
      console.log('Session Callback - Final', session);
      return session;
    },
  },
  debug: true,
};

export async function GET(req, res) {
  return NextAuth(req, res, authOptions);
}

export async function POST(req, res) {
  return NextAuth(req, res, authOptions);
}
