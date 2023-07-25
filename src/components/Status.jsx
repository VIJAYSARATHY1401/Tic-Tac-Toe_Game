import React from "react";

const Status = ({ winner, isXnext, board }) => {
  // const nomoves = board[position].every((el) => {
  // 	el !== null;
  // });
  return (
    <div className="mt-2 status-message">
      {winner && (
        <>
          <span
            className="badge  bg-success pt-2 "
            style={{
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            {" "}
            Congrats! Winner is {winner}
          </span>
        </>
      )}
      {!winner && (
        <>
          {" "}
          <span className="badge bg-primary p-2">Next player is</span>{" "}
          <span className={isXnext ? "text-green" : "text-orange"}>
            {isXnext ? "X" : "O"}
          </span>{" "}
        </>
      )}
      {/* {!winner && `X and O tied`} */}
      {(isXnext) => isXnext + 1}
    </div>
  );
};

export default Status;
