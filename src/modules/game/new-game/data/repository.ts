import "reflect-metadata"
import { Card } from "@/core/game/cards";
import { PlayerKey, Players } from "@/store/game.store";
import { injectable } from "inversify";

export interface NewGameRepository {
    getPlayers: (playerName: string, player: PlayerKey, dealedCards: Card[][]) => Players
}

@injectable()
export class NewGameRepositoryImpl implements NewGameRepository {
    getPlayers = (playerName: string, player: PlayerKey, dealedCards: Card[][]) => {
        return {
            1: {
                name: player === 1 ? playerName : "Player 1",
                dealedCards: dealedCards[0]
            },
            2: {
                name: player === 2 ? playerName : "Player 2",
                dealedCards: dealedCards[1]
            },
            3: {
                name: player === 3 ? playerName : "Player 3",
                dealedCards: dealedCards[2]
            },
            4: {
                name: player === 4 ? playerName : "Player 4",
                dealedCards: dealedCards[3]
            }
        }
    };
}