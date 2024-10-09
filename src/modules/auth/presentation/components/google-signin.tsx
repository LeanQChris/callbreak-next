'use client';

import { signIn } from 'next-auth/react';
import Image from 'next/image';

export default function GoogleSignInButton() {
    return (
        <button
            type='button'
            className='flex bg-white rounded-md px-4 py-2 items-center justify-center gap-4'
            onClick={() => signIn('google', { callbackUrl: '/' })}
        >
            <Image
                src="https://cdn4.iconfinder.com/data/icons/logos-brands-7/512/google_logo-google_icongoogle-512.png"
                alt="Google Logo"
                width={20}
                height={20}
            />
            Continue with Google
        </button>
    );
}