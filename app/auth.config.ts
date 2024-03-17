import type { NextAuthConfig } from 'next-auth';

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: '/login',
    signOut: '/dashboard', // Redirect to dashboard after sign-out
  },

  callbacks: {
    async signIn({ user }) {
      if (user) {
        return '/dashboard';
      }
      return '/login';
    },
  },
 
  providers: [], // Add providers with an empty array for now
};

// In your actual application code, you can handle sign-out redirection

export async function signOut({ url }: { url: string }) {
  // Implement your sign-out logic here, such as clearing session, cookies, etc.
  // Then redirect to the desired URL, in this case, the login page
  window.location.href = '/login';
}
