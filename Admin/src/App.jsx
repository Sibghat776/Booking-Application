// App.jsx
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Home from "./Pages/Home";
import Users from "./Pages/Users";
import Products from "./Pages/Products";
import User from "./Pages/User";
import NewUser from "./Pages/NewUser";
import Widget from "./components/Widget";
import Chart from "./components/Chart";

const App = () => {
  return (
    <BrowserRouter>
      <div className="flex w-full min-h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Navbar />
          <div className="p-6">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/products" element={<Products />} />
              <Route path="/users/:id" element={<User />} />
              <Route path="/new-user" element={<NewUser />} />
              <Route path="/analytics" element={<Chart />} />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
