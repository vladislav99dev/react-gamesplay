import { useState } from "react"


const useGameState = () => {
    const [state,setState] = useState({});

    const setGame = (data) => {
        setState(data)
    }
    return [state, setGame]
}

export default useGameState;