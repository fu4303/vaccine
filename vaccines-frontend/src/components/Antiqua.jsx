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

const Antiqua = ({ vaccines, data }) => {
  const antiqua = vaccines.filter(
    (vaccine) => vaccine.vaccine === "Antiqua"
  ).length;

  return (
    <div>
      <h1>Antiqua</h1>
      <div>
        <div>Antiqua: {antiqua}</div>
        <BarChart width={350} height={200} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Antiqua" fill="#41cf7c" />
        </BarChart>
      </div>
    </div>
  );
};

export default Antiqua;
