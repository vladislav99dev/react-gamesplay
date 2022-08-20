import { createContext, useContext } from "react";
import useGameState from "../hooks/useGameState";

const GameContext = createContext();

export const GameProvider = ({ children }) => {
  const [game, setGame] = useGameState();

  const clearGameState = () => {
    setGame({});
  };

  return (
    <GameContext.Provider value={{ game, setGame, clearGameState }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGameContext = () => {
  const gameState = useContext(GameContext);

  return gameState;
};
