import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  YAxis,
  XAxis,
  Tooltip,
  Legend,
  Bar,
  BarChart,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const Chart = ({ vaccines, data }) => {
  const COLORS = ["#8884d8", "#82ca9d", "#d84a26"];

  const data1 = [
    {
      name: "Group A",
      value: vaccines.filter((vaccine) => vaccine.vaccine === "SolarBuddhica")
        .length,
    },
    {
      name: "Group B",
      value: vaccines.filter((vaccine) => vaccine.vaccine === "Antiqua").length,
    },
    {
      name: "Group C",
      value: vaccines.filter((vaccine) => vaccine.vaccine === "Zerpfy").length,
    },
  ];

  return (
    <div>
      <LineChart
        width={730}
        height={250}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="SolarBhuddica"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="Antiqua"
          stroke="#82ca9d"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="Zerphy"
          stroke="#d84a26"
          activeDot={{ r: 8 }}
        />
      </LineChart>

      <div style={{ display: "flex", gap: "15px" }}>
        <BarChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="SolarBhuddica" stackId="a" fill="#8884d8" />
          <Bar dataKey="Antiqua" stackId="a" fill="#82ca9d" />
          <Bar dataKey="Zerphy" stackId="a" fill="#e26c28" />
        </BarChart>

        <PieChart width={400} height={400}>
          <Pie
            data={data1}
            cx="50%"
            cy="50%"
            labelLine={true}
            label={`${data1.value}`}
            outerRadius={80}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </div>
    </div>
  );
};

export default Chart;
