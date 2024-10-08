"use client"

import { GameStates, gameStore } from '@/store/game.store'
import React from 'react'
import NewGame from './components/game-states/new'
import InGame from './components/game-states/in-game'
import Ended from './components/game-states/end'

export default function Game() {
    const { gameState } = gameStore()

    if (gameState === GameStates.New) return <NewGame />

    if (gameState === GameStates.GameOver) return <Ended />

    return (
        <InGame />
    )
}
