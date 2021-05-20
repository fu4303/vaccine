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

const Solar = ({ vaccines, data }) => {
  const solar = vaccines.filter(
    (vaccine) => vaccine.vaccine === "SolarBuddhica"
  ).length;

  return (
    <div>
      <h1>SolarBuddhica</h1>
      <div>
        <div>SolarBuddhica: {solar}</div>
        <BarChart width={350} height={200} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="SolarBhuddica" fill="#8884d8" />
        </BarChart>
      </div>
    </div>
  );
};

export default Solar;
