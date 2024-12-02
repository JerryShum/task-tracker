import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const authConfig = {
   providers: [
      GoogleProvider({
         clientId: process.env.GOOGLE_CLIENT_ID,
         clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
   ],

   secret: process.env.NEXTAUTH_SECRET, // Ensure this is set

   pages: {
      signIn: "/signin",
   },

   callbacks: {
      // This runs after google authenticates the user (after they sign in with google)
      async signIn({ user, account, profile }) {
         try {
            return true;
         } catch {
            return false;
         }
      },

      // Session runs whenever the session is created or whenever the session is accessed.
      async session({ session, user }) {
         // Adding the guest ID to the session object
         //  session.user.guestID = guest.id;
         return session;
      },

      async redirect({ url, baseUrl }) {
         // Always redirect to home page after sign-in
         return baseUrl;
      },
   },
};

export const {
   signIn,
   signOut,
   handlers: { GET, POST },
} = NextAuth(authConfig);
