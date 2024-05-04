import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Email",
      credentials: {
        username: { label: "email", type: "text", placeholder: "Email" },
        password: {
          label: "password",
          type: "password",
          placeholder: "Password",
        },
      },
      async authorize(credentials: any) {
        console.log(credentials);

        return {
          id: "User 1",
          name: "Kabilash",
          email: "iam@gmail.com",
        };
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    signIn: ({ user }) => {
      if (user.email === "spam@gmail.com") {
        return false;
      }
      return true;
    },
    jwt: ({ token, user }) => {
      token.userId = token.sub; // sub is subject -> which is the id returned in authorize.
      return token;
    },
    session: ({ session, token, user }: any) => {
      console.log(session);
      if (session && session.user) {
        session.user.id = token.userId;
      }
      return session;
    },
  },
  pages: {
    signIn: "/signin", // to change signin page from /api/auth/signin to /signin
  },
};

const handler = NextAuth(authOptions);

export const GET = handler;
export const POST = handler;
