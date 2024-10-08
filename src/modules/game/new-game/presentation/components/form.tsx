"use client"

import useNewGame from "../hook/useNewGame"

export default function NewGameForm() {
    const { register, handleSubmit } = useNewGame()
    return <form onSubmit={handleSubmit}>
        <input  {...register("name")} />
        <button type='submit'>Start</button>
    </form>
}