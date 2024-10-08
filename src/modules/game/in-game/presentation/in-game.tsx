"use client"
import { gameStore } from '@/store/game.store'
import GameCards from './components/game-card'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import DropableCardContainer from './components/cards.container'

export default function InGame() {
    const { player } = gameStore()

    return (
        <DndProvider backend={HTML5Backend}>
            <div className='h-screen w-screen grid grid-rows-4'>
                <div className='pt-10'>
                    <GameCards player={2} />
                </div>
                <div className='grid row-span-2 w-full'>
                    <div className='grid grid-cols-5 w-full'>
                        <div className='col-span-1 ' >
                            <GameCards player={3} isVertical />
                        </div>
                        {/* dropable cards */}
                        <div className='col-span-3 relative p-10'>
                           <DropableCardContainer/>
                        </div>
                        {/* dropable cards */}
                        <div className='col-span-1 ' >
                            <GameCards player={4} isVertical />
                        </div>
                    </div>
                </div>
                {/* current user cards */}
                <GameCards player={player} show />
            </div>
        </DndProvider>
    )
}
