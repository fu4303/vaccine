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

const Solar = ({ vaccines, data, vaccinations }) => {
  const solar = vaccines.filter(
    (vaccine) => vaccine.vaccine === "SolarBuddhica"
  );

  const ids = solar.map((element) => element.id);
  console.log(ids);

  const bottles = vaccinations.map((element) => element.sourceBottle);
  console.log(bottles);

  const intersection = bottles.filter((element) =>
    ids.includes(element)
  ).length;
  console.log(intersection);

  return (
    <div>
      <h1>SolarBuddhica</h1>
      1442/2805
      <div>
        <div>SolarBuddhica: {solar.length}</div>
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
