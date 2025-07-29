// src/Pages/NewUser.jsx
import React from "react";

const NewUser = () => {
    return (
        <div className="p-6 w-full">
            <h1 className="text-2xl font-semibold text-gray-800 mb-6">Create New User</h1>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white shadow-md p-6 rounded">
                <div className="flex flex-col">
                    <label className="text-sm text-gray-600 mb-1">Username</label>
                    <input
                        type="text"
                        placeholder="john_doe"
                        className="border border-gray-300 p-2 rounded"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm text-gray-600 mb-1">Full Name</label>
                    <input
                        type="text"
                        placeholder="John Doe"
                        className="border border-gray-300 p-2 rounded"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm text-gray-600 mb-1">Email</label>
                    <input
                        type="email"
                        placeholder="john@example.com"
                        className="border border-gray-300 p-2 rounded"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm text-gray-600 mb-1">Password</label>
                    <input
                        type="password"
                        placeholder="••••••••"
                        className="border border-gray-300 p-2 rounded"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm text-gray-600 mb-1">Phone</label>
                    <input
                        type="text"
                        placeholder="+92 300 1234567"
                        className="border border-gray-300 p-2 rounded"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm text-gray-600 mb-1">Address</label>
                    <input
                        type="text"
                        placeholder="Karachi, Pakistan"
                        className="border border-gray-300 p-2 rounded"
                    />
                </div>

                <div className="flex flex-col">
                    <label className="text-sm text-gray-600 mb-1">Gender</label>
                    <select className="border border-gray-300 p-2 rounded">
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className="flex flex-col">
                    <label className="text-sm text-gray-600 mb-1">Active</label>
                    <select className="border border-gray-300 p-2 rounded">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>

                <div className="col-span-1 md:col-span-2">
                    <button
                        type="submit"
                        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
                    >
                        Create
                    </button>
                </div>
            </form>
        </div>
    );
};

export default NewUser;
