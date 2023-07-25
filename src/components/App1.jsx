import React, { useState } from "react";
import Board from "../components/Board";
import Status from "../components/Status";
import "../App.css";
import { calculateWinner } from "./Helpers";
const App1 = () => {
  const NewGame = Array(9).fill(null);
  const [board, setBoard] = useState(NewGame);
  const [isXNext, setIsXnext] = useState(false);
  const { winner, winningSq } = calculateWinner(board);
  // const message = winner
  // 	? `Winner is ${winner}`
  // 	: `player is ${isXNext ? "X" : "O"}:${`start playing`}`;
  const handleclick = (position) => {
    if (board[position] || winner) {
      return; //if board [pos] exist return nothing
    }
    setBoard((prev) => {
      return prev.map((Sq, pos) => {
        if (pos === position) {
          console.log(prev);
          console.log(isXNext);
          return isXNext ? "X" : "O";
        }
        return Sq;
      });
    });

    setIsXnext((pa) => !pa);
  };
  const Btnclick = () => {
    setBoard(NewGame);
  };

  return (
    <div className="app">
      <h1>
        {" "}
        <span className="text-green">Tic-tac-toe</span> game for absolute
        beginers!
      </h1>
      <Status winner={winner} isXnext={isXNext} board={board} />
      {/* <h2>{message}</h2> */}
      <Board board={board} handleclick={handleclick} winningSq={winningSq} />
      <button
        style={{
          backgroundColor: "yellow",
          padding: "8px",
          marginTop: "20px",
          fontSize: "40px",
        }}
        onClick={Btnclick}
      >
        Start new Game
      </button>
      <div className="bg-balls" />
    </div>
  );
};
export default App1;
