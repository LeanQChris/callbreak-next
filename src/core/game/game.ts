import { Card, Rank, Suit } from "./cards";

const createDeck = (): Card[] => {
    const suits = Object.values(Suit);
    const ranks = Object.values(Rank);
    const deck: Card[] = [];

    for (const suit of suits) {
        for (const rank of ranks) {
            deck.push(new Card(rank + suit));
        }
    }

    return deck;
};

const getIcon = (suit: Suit) => {
    switch (suit) {
        case Suit.HEART: return "❤️";
        case Suit.CLUB: return "♣️";
        case Suit.DIAMOND: return "♦️";
        case Suit.SPADE: return "♠️";
    }
}

const shuffleDeck = (deck: Card[]): Card[] => {
    for (let i = deck.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [deck[i], deck[j]] = [deck[j], deck[i]];
    }
    return deck;
};

const dealCards = (deck: Card[], numPlayers: number = 4): Card[][] => {
    const hands: Card[][] = Array.from({ length: numPlayers }, () => []);
    const cardsPerPlayer = 13;

    for (let i = 0; i < cardsPerPlayer; i++) {
        for (let j = 0; j < numPlayers; j++) {
            hands[j].push(deck.pop()!);
        }
    }

    return hands;
};


export { createDeck, shuffleDeck, dealCards, getIcon }