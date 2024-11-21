import NextAuth, { CredentialsSignin } from "next-auth";
import bcrypt from "bcryptjs";
import Credentials from "next-auth/providers/credentials";
import prisma from "./prisma/client";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },

        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        const email = credentials.email as string | undefined;
        const password = credentials.password as string | undefined;

        if (!email || !password) {
          throw new CredentialsSignin("Please provide email and password");
        }

        const existingUser = await prisma.user.findUnique({
          where: { email: email },
        });

        if (!existingUser) {
          throw new Error("Invalid email");
        }

        const isMatch = await bcrypt.compare(
          password!,
          existingUser.hashedPassword!
        );

        if (!isMatch) {
          throw new Error("Email or Password is not correct");
        }

        const loginuser = {
          name: existingUser.name,

          email: existingUser.email,
          id: existingUser.id,
        };
        // return user object with their profile data
        return loginuser;
      },
    }),
  ],
});
