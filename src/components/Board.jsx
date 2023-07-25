import React, { useState } from "react";
import Sq from "./Sq";

const Board = ({ board, handleclick, winningSq }) => {
  const rendersq = (position) => {
    const iswinningSq = winningSq.includes(position);
    return (
      <Sq
        value={board[position]}
        clickFunc={() => handleclick(position)}
        iswinningSq={iswinningSq}
      />
    );
  };
  return (
    <div className="board">
      <h2 className="mt-3" style={{ textAlign: "center" }}>
        Board
      </h2>
      <div className="board-row">
        {rendersq(0)}
        {rendersq(1)}
        {rendersq(2)}
      </div>
      <div className="board-row">
        {rendersq(3)}
        {rendersq(4)}
        {rendersq(5)}
      </div>
      <div className="board-row">
        {rendersq(6)}
        {rendersq(7)}
        {rendersq(8)}
      </div>
    </div>
  );
};

export default Board;
