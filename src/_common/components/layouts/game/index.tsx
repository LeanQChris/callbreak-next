import React, { PropsWithChildren } from 'react'
import Navbar from './navbar'

export default function GameRootLayout({ children }: PropsWithChildren) {
    return (
        <div className='w-screen'>
            <Navbar />
            <main className='p-5'>
                {children}
            </main>
        </div>
    )
}
