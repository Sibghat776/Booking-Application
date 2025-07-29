import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { productRows } from "../dummyData";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";

const Products = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-2">
            <img
              className="w-8 h-8 rounded object-cover"
              src={params.row.img}
              alt="product"
            />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: "stock",
      headerName: "Stock",
      width: 150,
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
    },
    {
      field: "price",
      headerName: "Price",
      width: 160,
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <div className="flex items-center gap-2">
            <Link to={`/products/${params.row.id}`}>
              <button className="bg-green-600 text-white px-2 py-1 rounded text-sm">
                Edit
              </button>
            </Link>
            <DeleteOutline
              className="text-red-600 cursor-pointer"
              onClick={() => handleDelete(params.row.id)}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="w-full h-[600px]">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
};

export default Products;
