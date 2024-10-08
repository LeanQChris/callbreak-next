import { getIt } from "@/core/di/container";
import { gameStore, PlayerKey } from "@/store/game.store";
import { useForm } from "react-hook-form";
import { NewGameUseCase } from "../../domain/usecase";
import { useRouter } from "next/navigation";

interface Initialvalues {
    name: string,
    player: PlayerKey
}

export default function useNewGame() {
    const newGameusecase = getIt<NewGameUseCase>("NewGameUsecase");
    const { startGame } = gameStore()
    const router = useRouter()

    const form = useForm({
        defaultValues: {
            name: "",
            player: 1
        } as Initialvalues,
    })

    const onSubmit = ({ name, player }: Initialvalues) => {
        try {
            const gameConfig = newGameusecase.startGame(name, player)
            startGame(gameConfig)
            router.push("/in-game")
        } catch (error) {
            console.log(error)
        }
    }

    return { ...form, handleSubmit: form.handleSubmit(onSubmit) }
}