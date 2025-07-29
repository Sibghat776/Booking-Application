import React from "react";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LanguageIcon from "@mui/icons-material/Language";
import SettingsIcon from "@mui/icons-material/Settings";

const Navbar = () => {
    return (
        <div className="h-16 w-full bg-white flex items-center justify-between px-6 shadow-md sticky top-0 z-50">
            {/* Left: Logo */}
            <div className="text-xl font-bold text-[#6439ff]">Sibghat Admin</div>

            {/* Right: Icons */}
            <div className="flex items-center gap-6 text-[#555]">
                <div className="relative cursor-pointer">
                    <NotificationsNoneIcon />
                    <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                        1
                    </span>
                </div>

                <div className="relative cursor-pointer">
                    <LanguageIcon />
                    <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                        2
                    </span>
                </div>

                <div className="cursor-pointer">
                    <SettingsIcon />
                </div>

                {/* Avatar */}
                <img
                    src="https://i.ibb.co/MBtjqXQ/no-avatar.gif"
                    alt="avatar"
                    className="w-8 h-8 rounded-full object-cover cursor-pointer"
                />
            </div>
        </div>
    );
};

export default Navbar;
