import React from "react";
import { ArrowUpward, Person, ShoppingCart, MonetizationOn, AccountBalanceWallet } from "@mui/icons-material";

const Widget = ({ type }) => {
    let data;

    // dummy data setup
    const amount = 100;
    const diff = 20;

    switch (type) {
        case "user":
            data = {
                title: "USERS",
                isMoney: false,
                link: "See all users",
                icon: (
                    <Person className="text-red-500 bg-red-200 p-1 rounded-sm" />
                ),
            };
            break;
        case "order":
            data = {
                title: "ORDERS",
                isMoney: false,
                link: "View all orders",
                icon: (
                    <ShoppingCart className="text-yellow-600 bg-yellow-200 p-1 rounded-sm" />
                ),
            };
            break;
        case "earning":
            data = {
                title: "EARNINGS",
                isMoney: true,
                link: "View net earnings",
                icon: (
                    <MonetizationOn className="text-green-600 bg-green-200 p-1 rounded-sm" />
                ),
            };
            break;
        case "balance":
            data = {
                title: "BALANCE",
                isMoney: true,
                link: "See details",
                icon: (
                    <AccountBalanceWallet className="text-purple-600 bg-purple-200 p-1 rounded-sm" />
                ),
            };
            break;
        default:
            break;
    }

    return (
        <div className="flex justify-between p-4 shadow-md rounded-lg w-full max-w-[250px] bg-white">
            <div className="flex flex-col justify-between">
                <span className="text-sm font-bold text-gray-500">{data.title}</span>
                <span className="text-xl font-semibold">
                    {data.isMoney && "$"} {amount}
                </span>
                <span className="text-xs underline cursor-pointer text-blue-600">
                    {data.link}
                </span>
            </div>
            <div className="flex flex-col justify-between items-end text-sm text-green-600 font-semibold">
                <div className="flex items-center gap-1">
                    <ArrowUpward fontSize="small" />
                    {diff}%
                </div>
                {data.icon}
            </div>
        </div>
    );
};

export default Widget;
