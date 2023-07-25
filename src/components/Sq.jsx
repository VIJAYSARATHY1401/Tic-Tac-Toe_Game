import React from "react";

const Sq = ({ value, clickFunc, iswinningSq }) => {
  return (
    <button
      onClick={clickFunc}
      className={` square ${iswinningSq ? "winning" : ""} ${
        value === "X" ? "text-green" : "text-orange"
      }`}
      style={{
        fontWeight: iswinningSq ? "bolder" : "normal",
        fontSize: iswinningSq ? "50px" : "",
      }}
    >
      {value}
    </button>
  );
};

export default Sq;
