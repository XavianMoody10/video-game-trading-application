import { connectDB } from "@/lib/mongodb";
import { User } from "@/models/user.model";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "email", type: "email" },
        password: {
          label: "password",
          type: "password",
        },
      },

      async authorize(credentials) {
        await connectDB();

        const user = await User.findOne({
          email: credentials.email,
          password: credentials.password,
        });

        if (user) {
          return {
            name: user?.username,
            email: user?.email,
          };
        }

        throw new Error("Invalid Credentials");
      },
    }),
  ],
  session: {
    maxAge: 900, // 15 minutes
  },
  jwt: {
    maxAge: 900, // 15 minutes
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
