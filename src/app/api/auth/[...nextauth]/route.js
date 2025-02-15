import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { query } from "../../../../../lib/db";
import bcrypt from "bcryptjs";

const authOptions = {
    providers: [
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials) {
                const users = await query("SELECT * FROM users WHERE username = ?", [credentials.username]);
                if (users.length === 0) return null;

                const user = users[0];
                const isValid = await bcrypt.compare(credentials.password, user.password);
                if (!isValid) return null;

                return { id: user.id, name: user.username };
            }
        })
    ],
    pages: {
        signIn: "/login"
    }
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

