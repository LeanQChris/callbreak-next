import { getIcon } from '@/core/game/game'
import { gameStore, PlayerKey } from '@/store/game.store'
import React from 'react'

export default function InGame() {
    const { player } = gameStore()
    return (
        <div className='h-screen w-screen grid grid-rows-4'>
            <div className='pt-10'>
                <GameCards player={2} />
            </div>
            <div className='grid row-span-2 w-full'>
                <div className='grid grid-cols-5 w-full'>
                    <div className='col-span-1 ' >
                        <GameCards player={2} isVertical />
                    </div>
                    <div className='col-span-3'></div>
                    <div className='col-span-1 ' />
                </div>
            </div>
            <GameCards player={player} show />
        </div>
    )
}

const GameCards = ({ player = 1, show = false, isVertical = false }: { player: PlayerKey, show?: boolean, isVertical?: boolean }) => {
    const { players } = gameStore();
    const cards = players[player].dealedCards;

    return (
        <div className={`relative flex ${isVertical ? 'flex-col space-y-2' : 'flex-row space-x-2'} items-center justify-center pb-10`}>
            {cards.map((card, index) => (
                <div
                    key={index}
                    style={!show ? {
                        backgroundImage: `url('https://i.pinimg.com/736x/37/0c/81/370c81fc9374e48569136b50969dad71.jpg')`,
                        zIndex: index, // Layer the cards based on their index
                        position: 'relative', // Ensure stacking is inline with flex
                        marginTop: isVertical && index > 0 ? '-40px' : '0px', // Overlap the cards for vertical stack
                        marginLeft: !isVertical && index > 0 ? '-40px' : '0px', // Overlap the cards for horizontal stack
                    } : {}}
                    className={`border border-gray-400 rounded shadow-md ${isVertical ? 'w-24 h-16' : 'w-16 h-24'}
                        ${!show ? "bg-cover" : 'bg-white hover:-translate-y-2 hover:shadow-lg hover:cursor-pointer'}
                    `}
                >
                    <>
                        <p className='absolute top-1 left-1 text-xs text-black'>{show && card.rank}</p>
                        <div className='flex justify-center items-center h-full'>
                            <div className='h-6 w-6'>
                                {show && getIcon(card.suit)}
                            </div>
                        </div>
                    </>
                </div>
            ))}
        </div>
    );
};
