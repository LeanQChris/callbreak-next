import React, { FC } from "react";
import GameCard from "./card";
import useDropableContainer from "../hook/useDropableContainer";

const DropableCardContainer: FC = () => {
    const { ref, deckCards } = useDropableContainer();
    return (
        <div className="h-full p-20">
            <div ref={ref} className="h-full w-full relative overflow-hidden">
                {deckCards.map((card: any, index) => {
                    return <div
                        key={index}
                        className="absolute"
                        style={{
                            left: `${card.position.x}px`, // Use the stored position
                            top: `${card.position.y}px`, // Use the stored position
                        }}
                    >
                        <GameCard card={card["card"]} index={index} isVertical={false} show={true} />
                    </div>
                })}
            </div>
        </div>
    );
}

export default DropableCardContainer;
