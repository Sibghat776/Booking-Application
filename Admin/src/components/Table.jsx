import React from "react";

const Table = () => {
    const rows = [
        {
            id: 1,
            username: "John Smith",
            img: "https://randomuser.me/api/portraits/men/1.jpg",
            date: "2 Jun 2025",
            amount: 122.0,
            method: "Cash on Delivery",
            status: "Approved",
        },
        {
            id: 2,
            username: "Alice Johnson",
            img: "https://randomuser.me/api/portraits/women/2.jpg",
            date: "3 Jun 2025",
            amount: 250.0,
            method: "Online Payment",
            status: "Pending",
        },
        {
            id: 3,
            username: "Michael Lee",
            img: "https://randomuser.me/api/portraits/men/3.jpg",
            date: "4 Jun 2025",
            amount: 90.0,
            method: "Online Payment",
            status: "Approved",
        },
        {
            id: 4,
            username: "Emma Brown",
            img: "https://randomuser.me/api/portraits/women/4.jpg",
            date: "5 Jun 2025",
            amount: 320.0,
            method: "Cash on Delivery",
            status: "Declined",
        },
    ];

    return (
        <div className="w-full shadow rounded-lg p-4 bg-white">
            <h3 className="text-lg font-semibold text-gray-700 mb-4">
                Latest Transactions
            </h3>
            <table className="w-full text-left border-collapse">
                <thead>
                    <tr className="text-sm text-gray-500 border-b">
                        <th className="py-2">Customer</th>
                        <th className="py-2">Date</th>
                        <th className="py-2">Amount</th>
                        <th className="py-2">Payment Method</th>
                        <th className="py-2">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.id} className="text-sm border-b hover:bg-gray-50">
                            <td className="flex items-center gap-3 py-3">
                                <img
                                    src={row.img}
                                    alt={row.username}
                                    className="w-8 h-8 rounded-full object-cover"
                                />
                                {row.username}
                            </td>
                            <td className="py-3">{row.date}</td>
                            <td className="py-3">${row.amount}</td>
                            <td className="py-3">{row.method}</td>
                            <td className="py-3">
                                <span
                                    className={`px-2 py-1 rounded text-xs font-medium ${row.status === "Approved"
                                            ? "bg-green-100 text-green-700"
                                            : row.status === "Pending"
                                                ? "bg-yellow-100 text-yellow-700"
                                                : "bg-red-100 text-red-700"
                                        }`}
                                >
                                    {row.status}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Table;
