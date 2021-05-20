import React from "react";

const Zerpfy = ({ vaccines }) => {
  const zerpfy = vaccines.filter(
    (vaccine) => vaccine.vaccine === "Zerpfy"
  ).length;

  return (
    <div>
      <h1>Zerpfy</h1>
      <div>
        <div>Zerpfy: {zerpfy}</div>
      </div>
    </div>
  );
};

export default Zerpfy;
