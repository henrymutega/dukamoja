import NextAuth from "next-auth";
import { authOptions } from "@/utilis/authOptions";

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST};