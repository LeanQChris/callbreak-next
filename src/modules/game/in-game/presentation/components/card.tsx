import React, { useRef } from 'react';
import { useDrag } from 'react-dnd';
import { CARDTYPE } from "@/core/game/type"; // Ensure this import is correct
import { getIcon } from '@/core/game/game';
import { Card } from '@/core/game/cards';

interface GameCardProps {
    card: Card; // Adjust the card type as per your model
    show: boolean;
    isVertical: boolean;
    index: number;
}

const GameCard: React.FC<GameCardProps> = ({ card, show, isVertical, index }) => {
    const ref = useRef<HTMLDivElement>(null);

    const [{ isDragging }, drag] = useDrag({
        type: CARDTYPE,
        item: show ? { card } : null, // Pass the card data to the drag item only if show is true
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    });

    drag(ref);

    return (
        <div
            ref={ref}
            style={!show ? {
                backgroundImage: `url('https://i.pinimg.com/736x/37/0c/81/370c81fc9374e48569136b50969dad71.jpg')`,
                zIndex: index,
                position: 'relative',
                marginTop: isVertical && index > 0 ? '-40px' : '0px',
                marginLeft: !isVertical && index > 0 ? '-40px' : '0px',
            } : {}}
            className={`border border-gray-400 rounded shadow-md ${isVertical ? 'w-24 h-16' : 'w-16 h-24'}
                ${!show ? "bg-cover" : 'bg-white hover:-translate-y-2 hover:shadow-lg hover:cursor-pointer'}
            `}
        >
            <div className="relative h-full w-full">
                <p className='absolute top-1 left-1 text-xs text-black'>{show && card.rank}</p>
                <div className='flex justify-center items-center h-full'>
                    <div className='h-6 w-6'>
                        {show && getIcon(card.suit)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GameCard;
