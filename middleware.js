import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

// Esta función puede ser marcada como `async` si usas `await` dentro
export async function middleware(request) {
  const token = await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET });
  
  // Si no hay token y la ruta es privada, redirigir a la página de inicio de sesión
  if (!token && request.nextUrl.pathname.startsWith('/private')) {
    const url = new URL('/auth/signin', request.url);
    url.searchParams.set('callbackUrl', encodeURIComponent(request.url));
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

// Configuración del matcher
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/private/:path*'
  ],
};
