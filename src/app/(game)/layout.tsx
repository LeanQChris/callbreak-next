import GameRootLayout from '@/_common/components/layouts/game'
import React, { PropsWithChildren } from 'react'

export default function RootGameLayout({ children }: PropsWithChildren) {
    return (
        <GameRootLayout>
            {children}
        </GameRootLayout>
    )
}
