"use client";
import React from 'react';
import { useSession } from 'next-auth/react';
import LoginForm from './components/form';
import { redirect } from 'next/navigation';

export default function LoginPage() {
    const { data: session, status } = useSession();

    if (status === "loading") {
        return <div>Loading...</div>;
    }

    if (session?.user) {
        console.log("here")
        redirect('/new-game')
    }

    return (
        <div>
            <LoginForm />
        </div>
    );
}
