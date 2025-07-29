import React from "react";
import { ArrowDownward, ArrowUpward } from "@mui/icons-material";

const Featured = () => {
    return (
        <div className="w-full flex my-4 gap-6">
            {/* Revenue */}
            <div className="flex-1 bg-white p-6 rounded shadow">
                <span className="text-lg text-gray-500">Revenue</span>
                <div className="flex items-center my-2">
                    <span className="text-2xl font-semibold">$2,415</span>
                    <span className="flex items-center ml-4 text-red-600 text-sm">
                        -11.4 <ArrowDownward className="ml-1 text-sm" />
                    </span>
                </div>
                <span className="text-sm text-gray-400">Compared to last month</span>
            </div>

            {/* Sales */}
            <div className="flex-1 bg-white p-6 rounded shadow">
                <span className="text-lg text-gray-500">Sales</span>
                <div className="flex items-center my-2">
                    <span className="text-2xl font-semibold">$4,415</span>
                    <span className="flex items-center ml-4 text-green-600 text-sm">
                        +2.4 <ArrowUpward className="ml-1 text-sm" />
                    </span>
                </div>
                <span className="text-sm text-gray-400">Compared to last month</span>
            </div>

            {/* Cost */}
            <div className="flex-1 bg-white p-6 rounded shadow">
                <span className="text-lg text-gray-500">Cost</span>
                <div className="flex items-center my-2">
                    <span className="text-2xl font-semibold">$2,225</span>
                    <span className="flex items-center ml-4 text-green-600 text-sm">
                        +1.4 <ArrowUpward className="ml-1 text-sm" />
                    </span>
                </div>
                <span className="text-sm text-gray-400">Compared to last month</span>
            </div>
        </div>
    );
};

export default Featured;
