import React from "react";

const Antiqua = ({ vaccines }) => {
  const antiqua = vaccines.filter(
    (vaccine) => vaccine.vaccine === "Antiqua"
  ).length;

  return (
    <div>
      <h1>Antiqua</h1>
      <div>
        <div>Antiqua: {antiqua}</div>
      </div>
    </div>
  );
};

export default Antiqua;
