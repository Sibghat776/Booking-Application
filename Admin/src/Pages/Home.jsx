import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Featured from "@/components/Featured";
import Chart from "@/components/Chart";
import Widget from "@/components/Widget";
import Table from "@/components/Table";

const data = [
  { name: "Jan", users: 4000 },
  { name: "Feb", users: 3000 },
  { name: "Mar", users: 5000 },
  { name: "Apr", users: 4000 },
  { name: "May", users: 6000 },
  { name: "Jun", users: 7000 },
];

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-[#1e293b]">Dashboard</h1>
      <div className="flex gap-6 mt-6">
        <Widget type="user" />
        <Widget type="order" />
        <Widget type="earning" />
        <Widget type="balance" />
      </div>
      <Featured />
      <Chart title="User Analytics" dataKey="ActiveUser" grid />
      <div className="mt-6">
        <Table />
      </div>
    </div>
  );
};

export default Home;
