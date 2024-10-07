import CredentialProvider from "next-auth/providers/credentials";
import User from "@/models/user";
import bcrypt from "bcrypt";
import dbConnect from "./dbConnect";

export const authOptions = {
    session : {
        strategy: "jwt"
    },
    provider: [
        CredentialProvider({
            async authorize(credentials){
                dbConnect();

                const { email, password } = credentials;
                const user = await User.findOne({email})

                if(!user){
                    throw new Error("Invalid Email or Password.")
                }

                const isPasswordMatched = await bcrypt.compare(password, user.password);
                if (!isPasswordMatched){
                    throw new Error("Invalid Email or Password.")
                }

                return user;
            },
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
        signIn: "/login"
    },
};