import { getIcon } from '@/core/game/game'
import { gameStore } from '@/store/game.store'
import React from 'react'

export default function InGame() {
    const { dealedCards, players } = gameStore()
    return (
        <div className='space-y-2'>
            {dealedCards.map((cards, index) => (
                <div key={index} className='flex flex-row gap-4'>
                    <p>{Object.keys(players!)[index]}</p>
                    {cards.map((card) => (
                        <div key={card.toString()} className='relative w-16 h-24  border rounded bg-white hover: translate-y-2 hover:shadow-md hover:shadow-slate-400 cursor-pointer'
                            style={index !== 0 ? {
                                backgroundImage: `url('https://i.pinimg.com/736x/37/0c/81/370c81fc9374e48569136b50969dad71.jpg')`
                            } : {}}
                        >
                            <p className='absolute top-0 text-sm'>{index === 0 && card.rank}</p>
                            <div className='flex justify-center items-center h-full w-full'>
                                <div className='h-4 w-4'>
                                    {index === 0 && getIcon(card.suit)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    )
}
