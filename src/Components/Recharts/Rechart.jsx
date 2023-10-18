import React from "react";
import "./Rechart.css";
import { BarChart, Bar, XAxis, Tooltip } from "recharts";

const data = [
  {
    name: "Jan",
    uv: 2800,
  },
  {
    name: "Feb",
    uv: 2000,
  },
  {
    name: "Mar",
    uv: 3400,
  },
  {
    name: "Apr",
    uv: 2580,
  },
  {
    name: "May",
    uv: 3000,
  },
  {
    name: "Jun",
    uv: 1090,
  },
  {
    name: "Jul",
    uv: 2790,
  },
  {
    name: "Aug",
    uv: 3690,
    fill: "#7713d4",
  },
  {
    name: "Sep",
    uv: 3490,
  },
  {
    name: "Octo",
    uv: 2690,
  },
  {
    name: "Nov",
    uv: 2190,
  },
  {
    name: "Dec",
    uv: 2890,
  },
];

export default function Recharts() {
  return (
    <div className="Barchart">
      <h4 className="chartHeading">Monthly Earning</h4>
      <BarChart
        width={650}
        height={200}
        data={data}
        margin={{ top: 0, right: 10, left: 40, bottom: 5 }}
        pad
      >
        <Bar dataKey="uv" fill="#e6dde6" radius={10} />
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          tick={{ fill: "black" }}
        />
        <Tooltip />
      </BarChart>
    </div>
  );
}
