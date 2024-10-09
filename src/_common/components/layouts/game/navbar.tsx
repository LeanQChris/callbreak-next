"use client"
import { LogOut } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import Image from 'next/image';
import React from 'react'

export default function Navbar() {
    const { data: session } = useSession();

    return (
        <div className='flex justify-between w-full px-16 py-4 shadow'>
            <h2>Welcome</h2>
            <div className=' flex gap-4'>
                {session && session.user && <Image src={session.user?.image ?? ""} alt={session.user?.name ?? ""} width={25} height={25} className='rounded-[100%]' />}
                {session?.user?.name}
                <button onClick={() => signOut({ callbackUrl: '/' })}>
                    <LogOut />
                </button>
            </div>
        </div>
    )
}
