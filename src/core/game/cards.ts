// Define the Suit and Rank enums
export enum Suit {
    HEART = "H",
    CLUB = "C",
    DIAMOND = "D",
    SPADE = "S",
}

export enum Rank {
    TWO = "2",
    THREE = "3",
    FOUR = "4",
    FIVE = "5",
    SIX = "6",
    SEVEN = "7",
    EIGHT = "8",
    NINE = "9",
    TEN = "T",
    JACK = "J",
    QUEEN = "Q",
    KING = "K",
    ACE = "A",
}

interface CardProperties {
    rank: Rank;
    suit: Suit;
}

export class Card implements CardProperties {
    public rank: Rank;
    public suit: Suit;

    constructor(card: string) {
        this.rank = Card.getRank(card);
        this.suit = Card.getSuit(card);
    }

    static getRank(card: string): Rank {
        const rankCode = card[0];
        switch (rankCode) {
            case '2': return Rank.TWO;
            case '3': return Rank.THREE;
            case '4': return Rank.FOUR;
            case '5': return Rank.FIVE;
            case '6': return Rank.SIX;
            case '7': return Rank.SEVEN;
            case '8': return Rank.EIGHT;
            case '9': return Rank.NINE;
            case 'T': return Rank.TEN;
            case 'J': return Rank.JACK;
            case 'Q': return Rank.QUEEN;
            case 'K': return Rank.KING;
            case 'A': return Rank.ACE;
            default: throw new Error("Invalid rank");
        }
    }

    static getSuit(card: string): Suit {
        const suitCode = card[1];
        switch (suitCode) {
            case 'H': return Suit.HEART;
            case 'C': return Suit.CLUB;
            case 'D': return Suit.DIAMOND;
            case 'S': return Suit.SPADE;
            default: throw new Error("Invalid suit");
        }
    }

    toString(): string {
        return this.rank + this.suit;
    }
}
