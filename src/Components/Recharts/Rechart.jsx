import React from "react";
import "./Rechart.css";
import { BarChart, Bar, XAxis } from "recharts";

const data = [
  {
    name: "Jan",
    uv: 2800,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 2000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 3400,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2580,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 3000,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 1090,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 2790,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    uv: 3690,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Sep",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Octo",
    uv: 2690,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Nov",
    uv: 2190,
    pv: 4300,
    amt: 2100,
  },
  {
    name: "Dec",
    uv: 2890,
    pv: 4300,
    amt: 2100,
  },
];

export default function Recharts() {
  return (
    <BarChart width={500} height={150} data={data} className="barchart">
      <Bar dataKey="uv" fill="#f7cff7" radius="10px" />
      <XAxis dataKey="name" tickLine="false" />
    </BarChart>
  );
}

// #8884d8
