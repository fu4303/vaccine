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

const Zerpfy = ({ vaccines, data, vaccinations }) => {
  const zerpfy = vaccines.filter((vaccine) => vaccine.vaccine === "Zerpfy");

  const ids = zerpfy.map((element) => element.id);
  console.log(ids);

  const bottles = vaccinations.map((element) => element.sourceBottle);
  console.log(bottles);

  const intersection = ids.filter((element) =>
    bottles.includes(element)
  ).length;
  console.log(intersection);

  return (
    <div>
      <h1>Zerpfy</h1>
      1321/2337
      <div>
        <div>Zerpfy: {zerpfy.length}</div>
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

Zerpfy.propTypes = {
  vaccines: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  vaccinations: PropTypes.array.isRequired,
};

export default Zerpfy;
