import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { fetchUsers } from "../dummyData.jsx"; // <- dummyData se data fetch karna
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";

const Users = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchUsers().then((users) => {
      setData(users);
      setLoading(false);
    });
  }, []);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => (
        <div className="flex items-center gap-2">
          <img
            className="w-8 h-8 rounded-full object-cover"
            src={params.row.avatar}
            alt="avatar"
          />
          {params.row.username}
        </div>
      ),
    },
    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "Status", width: 120 },
    { field: "transaction", headerName: "Transaction Volume", width: 160 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => (
        <div className="flex items-center gap-2">
          <Link to={`/users/${params.row.id}`}> 
            <button className="bg-green-600 text-white px-2 py-1 rounded text-sm">
              Edit
            </button>
          </Link>
          <DeleteOutline
            className="text-red-600 cursor-pointer"
            onClick={() => handleDelete(params.row.id)}
          />
        </div>
      ),
    },
  ];

  return (
    <div className="w-full h-[600px]">
      <DataGrid
        rows={data}
        loading={loading}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
};

export default Users;