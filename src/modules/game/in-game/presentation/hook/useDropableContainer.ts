import { Card } from "@/core/game/cards";
import { CARDTYPE } from "@/core/game/type";
import { useRef, useState } from "react";

import { useDrop } from "react-dnd";

// Function to calculate random positions
const getRandomPosition = (containerWidth: number, containerHeight: number, cardWidth: number, cardHeight: number) => {
    const x = Math.random() * (containerWidth - cardWidth);
    const y = Math.random() * (containerHeight - cardHeight);
    return { x, y };
}

interface CardWithPosition extends Card {
    position: {
        x: number,
        y: number
    },
    rotation: number; // Store rotation as well
}

export default function useDropableContainer() {
    const ref = useRef<HTMLDivElement>(null);
    const [deckCards, setDeckCards] = useState<CardWithPosition[]>([]);

    // Define card dimensions (adjust as needed)
    const cardWidth = 100; // Example width of the card
    const cardHeight = 150; // Example height of the card

    const [, drop] = useDrop(() => ({
        accept: CARDTYPE,
        drop: (item: Card) => {
            const container = ref.current;
            if (container) {
                const { width, height } = container.getBoundingClientRect();
                const { x, y } = getRandomPosition(width, height, cardWidth, cardHeight);
                const rotation = Math.random() * 20 - 10; // Random rotation between -10 and 10 degrees

                // Check if the card is already in the deck to prevent duplicates
                if (!deckCards.some(existingCard => existingCard.rank === item.rank && existingCard.suit === item.suit)) {
                    setDeckCards((prev) => [
                        ...prev,
                        { ...item, position: { x, y }, rotation } // Store the position and rotation
                    ]);
                }
            }
        },
    }));

    drop(ref);

    return { ref, deckCards }

}