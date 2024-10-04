import { gameStore } from '@/store/game.store'
import React, { useState } from 'react'

export default function NewGame() {
    const { startGame } = gameStore()
    const [name, setName] = useState<string>('')
    return <div className='flex flex-col gap-4'>
        <input onChange={(e) => setName(e.target.value)} value={name} />
        <button onClick={() => startGame(name)} disabled={!name}>Start</button>
    </div>
}
