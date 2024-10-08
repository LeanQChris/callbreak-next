import "reflect-metadata"

import { GameStates, PlayerKey, Players } from "@/store/game.store";
import { inject, injectable } from "inversify";
import { DeckRepositoryImpl } from "@/modules/_common/deck/data/repository";
import { Card } from "@/core/game/cards";
import { NewGameRepositoryImpl } from "../data/repository";

export interface NewGameUseCase {
    startGame: (playerName: string, player: PlayerKey) => {
        round: number;
        player: PlayerKey;
        dealedCards: Card[][];
        players: Players
    };
}

@injectable()
export class NewGameUseCaseImpl implements NewGameUseCase {
    constructor(
        @inject("DeckRepository") private deckRepository: DeckRepositoryImpl,
        @inject("NewGameRepository") private newGameRepository: NewGameRepositoryImpl,
    ) { }
    startGame = (playerName: string, player: PlayerKey) => {
        const dealedCards = this.deckRepository.getSuffledCard()
        const players = this.newGameRepository.getPlayers(playerName, player, dealedCards)
        return {
            round: 1,
            player,
            dealedCards,
            gameState: GameStates.InGame,
            players
        }
    };
}