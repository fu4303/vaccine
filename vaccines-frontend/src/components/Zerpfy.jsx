import React from "react";
import {
  CartesianGrid,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
  Bar,
  BarChart,
} from "recharts";

const Zerpfy = ({ vaccines, data }) => {
  const zerpfy = vaccines.filter(
    (vaccine) => vaccine.vaccine === "Zerpfy"
  ).length;

  return (
    <div>
      <h1>Zerpfy</h1>
      <div>
        <div>Zerpfy: {zerpfy}</div>
        <BarChart width={350} height={200} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Zerpfy" fill="#e26c28" />
        </BarChart>
      </div>
    </div>
  );
};

export default Zerpfy;
