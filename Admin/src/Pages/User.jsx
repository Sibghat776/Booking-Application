// src/Pages/User.jsx
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchUsers } from "../dummyData";
import {
    PermIdentity,
    CalendarToday,
    MailOutline,
    LocationSearching,
    PhoneAndroid,
} from "@mui/icons-material";

const User = () => {
    const { userId } = useParams();
    const navigate = useNavigate();

    const [user, setUser] = useState(null);

    useEffect(() => {
        fetchUsers().then((users) => {
            const found = users.find((u) => u.id === parseInt(userId));
            setUser(found || null);
        });
    }, [userId]);

    if (!user) {
        return (
            <div className="p-6">
                <h2 className="text-xl text-red-600">User not found</h2>
                <button
                    onClick={() => navigate(-1)}
                    className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
                >
                    Go Back
                </button>
            </div>
        );
    }

    return (
        <div className="p-6 w-full">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold text-gray-800">User Details</h1>
                <button
                    onClick={() => navigate(-1)}
                    className="bg-blue-600 text-white px-4 py-2 rounded text-sm"
                >
                    Back
                </button>
            </div>

            <div className="flex gap-6 mt-6">
                {/* Left Side: Info */}
                <div className="flex-[1] p-4 shadow-md rounded bg-white">
                    <div className="flex items-center gap-4">
                        <img
                            src={user.avatar}
                            alt="avatar"
                            className="w-16 h-16 rounded-full object-cover"
                        />
                        <div>
                            <h3 className="text-lg font-medium">{user.username}</h3>
                            <p className="text-gray-500 text-sm">Software Engineer</p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <h4 className="text-gray-600 font-semibold text-sm mb-2">
                            Account Details
                        </h4>
                        <div className="flex items-center gap-2 text-gray-700 text-sm mb-1">
                            <PermIdentity className="text-base" />
                            {user.username}
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 text-sm">
                            <CalendarToday className="text-base" />
                            {user.birthDate}
                        </div>

                        <h4 className="text-gray-600 font-semibold text-sm mt-4 mb-2">
                            Contact Details
                        </h4>
                        <div className="flex items-center gap-2 text-gray-700 text-sm mb-1">
                            <PhoneAndroid className="text-base" />
                            {user.phone}
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 text-sm mb-1">
                            <MailOutline className="text-base" />
                            {user.email}
                        </div>
                        <div className="flex items-center gap-2 text-gray-700 text-sm">
                            <LocationSearching className="text-base" />
                            {user.address}
                        </div>
                    </div>
                </div>

                {/* Right Side: Edit Form */}
                <div className="flex-[2] p-4 shadow-md rounded bg-white">
                    <form className="flex flex-col gap-4">
                        <div className="flex gap-4">
                            <div className="flex flex-col flex-1">
                                <label className="text-sm font-medium text-gray-600">
                                    Username
                                </label>
                                <input
                                    type="text"
                                    defaultValue={user.username}
                                    className="p-2 border border-gray-300 rounded mt-1"
                                />
                            </div>
                            <div className="flex flex-col flex-1">
                                <label className="text-sm font-medium text-gray-600">
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    defaultValue={user.fullName}
                                    className="p-2 border border-gray-300 rounded mt-1"
                                />
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="flex flex-col flex-1">
                                <label className="text-sm font-medium text-gray-600">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    defaultValue={user.email}
                                    className="p-2 border border-gray-300 rounded mt-1"
                                />
                            </div>
                            <div className="flex flex-col flex-1">
                                <label className="text-sm font-medium text-gray-600">
                                    Phone
                                </label>
                                <input
                                    type="text"
                                    defaultValue={user.phone}
                                    className="p-2 border border-gray-300 rounded mt-1"
                                />
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <label className="text-sm font-medium text-gray-600">
                                Address
                            </label>
                            <input
                                type="text"
                                defaultValue={user.address}
                                className="p-2 border border-gray-300 rounded mt-1"
                            />
                        </div>

                        <button className="self-start bg-green-600 text-white px-6 py-2 rounded mt-4 text-sm">
                            Update
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default User;
