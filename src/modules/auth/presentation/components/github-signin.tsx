'use client';

import { Github } from 'lucide-react';
import { signIn } from 'next-auth/react';

export default function GithubSignInButton() {
    return (
        <button
            type='button'
            className='flex bg-white rounded-md px-4 py-2 items-center justify-center gap-4'
            onClick={() => signIn('github', { callbackUrl: '/' })}
        >
            <Github />
            Continue with Github
        </button>
    );
}