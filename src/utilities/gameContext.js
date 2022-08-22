import { createContext, useState } from "react";

export const GameContext = createContext();
function GameProvider(props) {
  const [gameCart, setGameCart] = useState([]);
  return (
    <GameContext.Provider value={{ gameCart, setGameCart }}>
      {props.children}
    </GameContext.Provider>
  );
}
export default GameProvider;
