import { DeckRepository, DeckRepositoryImpl } from "@/modules/_common/deck/data/repository";
import { NewGameRepository, NewGameRepositoryImpl } from "@/modules/game/new-game/data/repository";
import { NewGameUseCase, NewGameUseCaseImpl } from "@/modules/game/new-game/domain/usecase";
import { Container } from "inversify";

const appContainer = new Container({
    defaultScope: "Singleton"
})

appContainer.bind<DeckRepository>("DeckRepository").to(DeckRepositoryImpl)

appContainer.bind<NewGameRepository>("NewGameRepository").to(NewGameRepositoryImpl)
appContainer.bind<NewGameUseCase>("NewGameUsecase").to(NewGameUseCaseImpl)


function getIt<T>(identifier: string): T {
    return appContainer.get<T>(identifier);
}

export default appContainer

export { getIt }