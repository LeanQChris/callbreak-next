import "reflect-metadata"

import { injectable } from "inversify";

import { Card } from "@/core/game/cards";
import { createDeck, dealCards, shuffleDeck } from "@/core/game/game";

export interface DeckRepository {
    createDeck: () => Card[]
    shuffleDeck: (deck: Card[]) => Card[];
    dealCards: (deck: Card[], numPlayers: number) => Card[][]
    getSuffledCard: () => Card[][]
}

@injectable()
export class DeckRepositoryImpl implements DeckRepository {
    createDeck = (): Card[] => {
        return createDeck();
    };

    shuffleDeck = (deck: Card[]) => {
        return shuffleDeck(deck);
    };

    dealCards = (deck: Card[], numPlayers: number = 4) => {
        return dealCards(deck, numPlayers)
    }

    getSuffledCard = () => {
        const deck = this.createDeck()
        const shuffledDeck = this.shuffleDeck(deck)
        const dealedCards = this.dealCards(shuffledDeck)
        return dealedCards
    }
}