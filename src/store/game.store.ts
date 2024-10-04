import { Card } from "@/core/game/cards";
import { createDeck, dealCards, shuffleDeck } from "@/core/game/game";
import { create } from "zustand";

export enum GameStates {
    New = "New",
    Playing = "Playing",
    Ended = "Ended",
}

interface Player {
    name: string,
    dealedCards: Card[]
}

interface Players {
    1: Player,
    2: Player,
    3: Player,
    4: Player,
}

type GameStore = {
    // game State
    gameState: GameStates
    setGameState: (state: GameStates) => void,
    // game rounf
    round: number,
    setRound: (round: number) => void,
    // player
    players: Players | null,
    startGame: (name: string) => void,
    endGame: () => void,
    dealedCards: Card[][]
    setDealedCards: (cards: Card[][]) => void,
    playRound: () => void,
}

export const gameStore = create<GameStore>((set) => ({
    gameState: GameStates.New,
    setGameState: (state) => set({ gameState: state }),
    round: 0,
    setRound: (round) => set({ round }),
    players: null,
    dealedCards: [],
    setDealedCards: (cards) => set({ dealedCards: cards }),
    startGame: (playerName: string) => set(() => {
        const cards = createDeck()
        const deck = shuffleDeck(cards)
        const dealedCards = dealCards(deck)
        return {
            gameState: GameStates.Playing,
            dealedCards,
            players: {
                1: {
                    name: playerName,
                    dealedCards: dealedCards[0]
                },
                2: {
                    name: "Player 2",
                    dealedCards: dealedCards[1]
                },
                3: {
                    name: "Player 3",
                    dealedCards: dealedCards[2]
                },
                4: {
                    name: "Player 4",
                    dealedCards: dealedCards[3]
                }
            },
            round: 1
        }
    }),
    playRound: () => set({}),
    endGame: () => set({
        gameState: GameStates.Ended,
        dealedCards: [],
        players: null
    }),
}))