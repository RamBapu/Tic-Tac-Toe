import React, { useState, useEffect } from "react";
import { rows, columns, winningCombinations } from "../utils/Game";
import Square from "./Square";
import "./Board.css";

const Board = () => {
  const numberOfSquares = rows * columns;
  const [board, setBoard] = useState(Array(numberOfSquares).fill(""));
  const [currentPlayer, setCurrentPlayer] = useState("X");
  const [winner, setWinner] = useState("");

  useEffect(() => {
    isWinner();
  }, [board]);

  const handleClick = (index) => {
    if (winner) return;
    if (board[index] === "") {
      const newBoard = [...board];
      newBoard[index] = currentPlayer;
      setBoard(newBoard);
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const isWinner = () => {
    for (let i = 0; i < winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        setWinner(board[a]);
        return board[a];
      }
    }
    if (!board.includes("")) {
      setWinner("Tie");
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(""));
    setCurrentPlayer("X");
    setWinner("");
  };

  return (
    <>
      <p className="header">Tic Tac Toe</p>
      <div className="board">
        {board.map((square, id) => (
          <Square key={id} value={square} onClick={() => handleClick(id)} />
        ))}
      </div>
      <div className="status">
        {winner ? winner!=='Tie' ? `Winner : ${winner}` : `Match : Draw` : `Current Player : ${currentPlayer}`}
      </div>
      <div className="btn">
        <button onClick={resetGame} className="reset-button">
          Reset Game
        </button>
      </div>
    </>
  );
};

export default Board;
