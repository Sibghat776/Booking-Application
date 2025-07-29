import React from "react";
import { Link } from "react-router-dom";
import {
    LineStyle,
    Timeline,
    TrendingUp,
    Person,
    Store,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
    PersonAdd
} from "@mui/icons-material";

const Sidebar = () => {
    return (
        <div className="w-64 h-fit sticky top-0 bg-white shadow-md border-r">
            <div className="p-6 text-[#555] text-sm">
                {/* Menu Group */}
                <div className="mb-8">
                    <h3 className="text-lg font-bold text-[#ababac] uppercase mb-3">Dashboard</h3>
                    <ul className="flex flex-col gap-2">
                        <Link to="/" className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded-md transition">
                            <LineStyle fontSize="small" />
                            Home
                        </Link>
                        <Link to="/analytics" className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded-md transition">
                            <Timeline fontSize="small" />
                            Analytics
                        </Link>
                        <Link to="/sales" className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded-md transition">
                            <TrendingUp fontSize="small" />
                            Sales
                        </Link>
                    </ul>
                </div>

                {/* Quick Menu */}
                <div className="mb-8">
                    <h3 className="text-lg font-bold text-[#ababac] uppercase mb-3">Quick Menu</h3>
                    <ul className="flex flex-col gap-2">
                        <Link to="/users" className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded-md transition">
                            <Person fontSize="small" />
                            Users
                        </Link>
                        <Link to="/new-user" className="hover:bg-gray-100 p-2 rounded flex items-center gap-2">
                            <PersonAdd className="text-sm" />
                            Create User
                        </Link>
                        <Link to="/products" className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded-md transition">
                            <Store fontSize="small" />
                            Products
                        </Link>
                        <Link to="/transactions" className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded-md transition">
                            <AttachMoney fontSize="small" />
                            Transactions
                        </Link>
                        <Link to="/reports" className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded-md transition">
                            <BarChart fontSize="small" />
                            Reports
                        </Link>
                    </ul>
                </div>

                {/* Notifications */}
                <div className="mb-8">
                    <h3 className="text-lg font-bold text-[#ababac] uppercase mb-3">Notifications</h3>
                    <ul className="flex flex-col gap-2">
                        <Link to="/mail" className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded-md transition">
                            <MailOutline fontSize="small" />
                            Mail
                        </Link>
                        <Link to="/feedback" className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded-md transition">
                            <DynamicFeed fontSize="small" />
                            Feedback
                        </Link>
                        <Link to="/messages" className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded-md transition">
                            <ChatBubbleOutline fontSize="small" />
                            Messages
                        </Link>
                    </ul>
                </div>

                {/* Staff */}
                <div>
                    <h3 className="text-lg font-bold text-[#ababac] uppercase mb-3">Staff</h3>
                    <ul className="flex flex-col gap-2">
                        <Link to="/manage" className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded-md transition">
                            <WorkOutline fontSize="small" />
                            Manage
                        </Link>
                        <Link to="/analytics-staff" className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded-md transition">
                            <Timeline fontSize="small" />
                            Analytics
                        </Link>
                        <Link to="/reports-staff" className="flex items-center gap-3 text-gray-700 hover:bg-gray-100 p-2 rounded-md transition">
                            <Report fontSize="small" />
                            Reports
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
