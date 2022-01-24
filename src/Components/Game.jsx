import "./styles.css";
import { useState, useEffect } from "react";
const Game = () => {
  const initaiState = ["", "", "", "", "", "", "", "", ""];
  const [gameState, updateGameState] = useState(initaiState);
  const [isX, setIsX] = useState(false);

  const HandleClick = (index) => {
    if (!gameState[index]) {
      const arr = Array.from(gameState);
      arr[index] = isX ? "X" : "O";
      updateGameState((a) => arr);
      setIsX((p) => !p);
    }
  };

  useEffect(() => {
    winner();
  }, [gameState]);

  function winner() {
    const line = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < line.length; i++) {
      const [a, b, c] = line[i];
      if (
        gameState[a] &&
        gameState[b] &&
        gameState[c] &&
        gameState[a] === gameState[b] &&
        gameState[b] === gameState[c]
      ) {
        alert(`${gameState[a]} wins`);
        updateGameState(initaiState);
        return;
      }
    }
    if (gameState.filter(Boolean).length === 9) {
      alert("draw");
      updateGameState(initaiState);
      return;
    }
  }

  return (
    <div className="game">
      <div
        className="cell  bb"
        onClick={() => {
          HandleClick(0);
        }}
      >
        {gameState[0]}
      </div>
      <div className="cell br bb bl" onClick={() => HandleClick(1)}>
        {gameState[1]}
      </div>
      <div className="cell bb" onClick={() => HandleClick(2)}>
        {gameState[2]}
      </div>

      <div className="cell bb" onClick={() => HandleClick(3)}>
        {gameState[3]}
      </div>
      <div className="cell br bb bl" onClick={() => HandleClick(4)}>
        {gameState[4]}
      </div>
      <div className="cell bb" onClick={() => HandleClick(5)}>
        {gameState[5]}
      </div>

      <div className="cell" onClick={() => HandleClick(6)}>
        {gameState[6]}
      </div>
      <div className="cell bl br" onClick={() => HandleClick(7)}>
        {gameState[7]}
      </div>
      <div className="cell " onClick={() => HandleClick(8)}>
        {gameState[8]}
      </div>
    </div>
  );
};

export default Game;
