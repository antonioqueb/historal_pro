import { NextResponse } from 'next/server';

// Esta función puede ser marcada como `async` si usas `await` dentro
export function middleware(request) {
  return NextResponse.redirect(new URL('/', request.url));
}

// Configuración del matcher
export const config = {
  matcher: ["/dashboard", "/private"],
};















// export { default } from "next-auth/middleware"

// export const config = {
//   matcher: ["/dashboard", "/private"]
// }