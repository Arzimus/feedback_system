import NextAuth from 'next-auth/next';
import { authOptions } from './options';

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
// { handler as GET, handler as POST }: This syntax exports the handler function under different names, specifically GET and POST