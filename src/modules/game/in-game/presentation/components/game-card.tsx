import { CARDTYPE } from "@/core/game/type";
import { gameStore, PlayerKey } from "@/store/game.store";
import { useDrag } from "react-dnd";
import GameCard from "./card";

const GameCards = ({ player = 1, show = false, isVertical = false }: { player: PlayerKey, show?: boolean, isVertical?: boolean }) => {
    const { players } = gameStore();
    const cards = players[player].dealedCards;

    const [{ isDragging }, drag] = useDrag({
        type: CARDTYPE,
        item: (item) => {
            return item
        },
        collect: (monitor: any) => ({
          isDragging: monitor.isDragging(),
        }),
      })

    return (
        <div className={`relative flex ${isVertical ? 'flex-col space-y-2' : 'flex-row space-x-2'} items-center justify-center pb-10`}>
            {cards.map((card, index) => (
                <GameCard key={index} card={card} index={index} isVertical={isVertical} show={show}/>
            ))}
        </div>
    );
};

export default GameCards