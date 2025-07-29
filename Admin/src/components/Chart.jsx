import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

// Sample data — aap API ya dummyData se replace kar sakte ho
const data = [
    { name: "Jan", ActiveUser: 4000 },
    { name: "Feb", ActiveUser: 3000 },
    { name: "Mar", ActiveUser: 2000 },
    { name: "Apr", ActiveUser: 2780 },
    { name: "May", ActiveUser: 1890 },
    { name: "Jun", ActiveUser: 2390 },
    { name: "Jul", ActiveUser: 3490 },
    { name: "Aug", ActiveUser: 2000 },
    { name: "Sep", ActiveUser: 2780 },
    { name: "Oct", ActiveUser: 1890 },
    { name: "Nov", ActiveUser: 2390 },
    { name: "Dec", ActiveUser: 3490 },
];

const Chart = ({ title = "User Analytics", dataKey = "ActiveUser", grid = true }) => {
    return (
        <div className="w-full p-6 shadow bg-white rounded mt-8">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">{title}</h3>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    <XAxis dataKey="name" stroke="#8884d8" />
                    <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
                    <Tooltip />
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
