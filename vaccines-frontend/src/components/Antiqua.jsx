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
import PropTypes from "prop-types";

const Antiqua = ({ vaccines, data, vaccinations }) => {
  const antiqua = vaccines.filter((vaccine) => vaccine.vaccine === "Antiqua");

  const ids = antiqua.map((element) => element.id);
  console.log(ids);

  const bottles = vaccinations.map((element) => element.sourceBottle);
  console.log(bottles);

  const intersection = ids.filter((element) =>
    bottles.includes(element)
  ).length;
  console.log(intersection);

  return (
    <div>
      <h1>Antiqua</h1>
      1242/1858
      <div>
        <div>Antiqua: {antiqua.length}</div>
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

Antiqua.propTypes = {
  vaccines: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  vaccinations: PropTypes.array.isRequired,
};

export default Antiqua;
