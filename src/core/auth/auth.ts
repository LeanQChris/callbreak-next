import { AuthOptions, getServerSession } from "next-auth"
import GoogleProvider from 'next-auth/providers/google';
import GitHubProvider from "next-auth/providers/github";

const authOptions: AuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID ?? '',
            clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? '',
        }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID ?? '',
            clientSecret: process.env.GITHUB_CLIENT_SECRET ?? '',
        }),
    ],
    pages: {
        signIn: '/'
    },
    callbacks: {
        async signIn({ user, account, profile }) {
            console.log(profile)
            console.log(user)
            console.log(account)
            // // Make your API call here
            // const response = await fetch('/api/your-api-endpoint', {
            //     method: 'POST',
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            //     body: JSON.stringify({
            //         // Send necessary data, e.g., user info or access token
            //         email: user.email,
            //         provider: account?.provider,
            //     }),
            // });

            // if (response.ok) {
            //     // Optionally, you can handle response data here
            //     return true; // Sign in was successful
            // } else {
            //     return false; // Sign in failed
            // }
            return true;
        },
    },
}

const getSession = () => getServerSession(authOptions)

export { authOptions, getSession }