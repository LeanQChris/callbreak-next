import { Card } from "@/core/game/cards";
import { createDeck, dealCards, shuffleDeck } from "@/core/game/game";
import { create } from "zustand";

export enum GameStates {
    New = "New",
    Bidding = "Bidding",
    InGame = "InGame",
    CalculatingScores = "CalculatingScores",
    GameOver = "GameOver",
}

interface Player {
    name: string,
    dealedCards: Card[],
}

export type BiddingTurn = 1 | 2 | 3 | 4
export type PlayerKey = 1 | 2 | 3 | 4

export interface Bid {
    1: number[],
    2: number[],
    3: number[],
    4: number[],
}

export interface Scores {
    1: number,
    2: number,
    3: number,
    4: number,
    5: number
}

export interface Players {
    1: Player,
    2: Player,
    3: Player,
    4: Player,
}

type GameStore = {
    // game State
    gameState: GameStates
    setGameState: (state: GameStates) => void,
    currentRound: number,
    setCurrentRound: (currentRound: number) => void,
    bid: Bid,
    scores: Scores | null,
    setScores: (scores: Scores) => void,
    startGame: (payload: Partial<GameStore>) => void,
    player: PlayerKey,
    setPlayer: (player: PlayerKey) => void,
    biddingTurn: BiddingTurn | null,
    setBiddingTurn: (biddingTurn: BiddingTurn | null) => void,
    bidInGame: (player: BiddingTurn, round: BiddingTurn, bid: number) => void,
    // player
    players: Players,
    // endGame: () => void,
    dealedCards: Card[][]
    setDealedCards: (cards: Card[][]) => void,
    // playRound: () => void,
}

export const gameStore = create<GameStore>((set) => ({
    gameState: GameStates.New,
    setGameState: (state) => set({ gameState: state }),
    currentRound: 0,
    setCurrentRound: (currentRound) => set({ currentRound }),
    player: 1,
    setPlayer: (player) => set({ player }),
    bid: {
        1: [],
        2: [],
        3: [],
        4: [],
    },
    biddingTurn: null,
    setBiddingTurn: (biddingTurn) => set({ biddingTurn }),
    scores: {
        1: 0,
        2: 0,
        3: 0,
        4: 0,
        5: 0
    },
    setScores: (scores) => set({ scores }),
    startGame: (payload: Partial<GameStore>) => set(() => {
        return payload
    }),//
    bidInGame: (player: BiddingTurn, round: BiddingTurn, bid: number) => set((state) => {
        const updatedBid = state.bid[`${player}`];
        updatedBid[round] = bid;

        // Move to next bidding turn or start the game if all players have bid
        const nextTurn = state.biddingTurn && state.biddingTurn < 4 ? (state.biddingTurn + 1) as BiddingTurn : null;

        return {
            bid: {
                ...state.bid,
                [player]: updatedBid
            },
            biddingTurn: nextTurn,
            gameState: nextTurn ? GameStates.Bidding : GameStates.InGame
        };
    }),
    players: {
        1: {
            name: "Player 1",
            dealedCards: []
        },
        2: {
            name: "Player 2",
            dealedCards: []
        },
        3: {
            name: "Player 3",
            dealedCards: []
        },
        4: {
            name: "Player 4",
            dealedCards: []
        }
    },
    dealedCards: [],
    setDealedCards: (cards) => set({ dealedCards: cards }),
    playRound: () => set({}),
    endGame: () => set({
        gameState: GameStates.GameOver,
        dealedCards: [],
        players: {
            1: {
                name: "Player 1",
                dealedCards: []
            },
            2: {
                name: "Player 2",
                dealedCards: []
            },
            3: {
                name: "Player 3",
                dealedCards: []
            },
            4: {
                name: "Player 4",
                dealedCards: []
            }
        },
        player: 1,
        currentRound: 0,
        biddingTurn: null,
        bid: {
            1: [],
            2: [],
            3: [],
            4: [],
        },
        scores: {
            1: 0,
            2: 0,
            3: 0,
            4: 0,
            5: 0
        }
    })
}))