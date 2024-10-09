"use client";
import React from 'react'
import GoogleSignInButton from './components/google-signin'
import { useSession } from 'next-auth/react';

export default function LoginPage() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (session) {
        return (
            <div>
                <h1>{session.user?.name}</h1>
            </div>
        )
    }

    return (
        <div>
            <GoogleSignInButton />
        </div>
    )
}
