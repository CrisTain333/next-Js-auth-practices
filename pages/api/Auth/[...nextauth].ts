import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { signIn } from "next-auth/react";
// export default NextAuth({
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",

//       credentials: {},
//       async authorize(credentials, req) {
//         // Add logic here to look up the user from the credentials supplied
//         const { email, password } = credentials as {
//           email: string;
//           password: string;
//         };
//         if (
//           email !== "john@gmail.com" ||
//           password !== "1234"
//         ) {
//           throw new Error("invalid credentials");
//         }

//         // if everything is fine
//         return {
//           id: "1234",
//           name: "John Doe",
//           email: "john@gmail.com",
//           role: "admin",
//         };
//       },
//     }),
//   ],

//   pages: {
//     signIn: "/login",
//   },
// });

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID!,
      clientSecret: process.env.GITHUB_SECRET!,
    }),
    // ...add more providers here
  ],
  pages: {
    signIn: "/login",
  },
};
export default NextAuth(authOptions);
