import React, { useState } from "react";
import { Table, Select, Button } from "antd";
import { topSellingData } from "../../Utils/Constant/tableSellingData";

const { Option } = Select;

export const TopSellingTable = () => {
  const [sortedColumn, setSortedColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);

  const handleSort = (columnKey) => {
    if (sortedColumn === columnKey) {
      setSortOrder(sortOrder === "ascend" ? "descend" : "ascend");
    } else {
      setSortedColumn(columnKey);
      setSortOrder("ascend");
    }
  };

  const columns = [
    {
      title: "Product Name",
      dataIndex: "productName",
      key: "productName",
      sorter: (a, b) => a.productName.localeCompare(b.productName),
      sortOrder: sortedColumn === "productName" ? sortOrder : null,
      onHeaderCell: () => ({ onClick: () => handleSort("productName") }),
      render: (text, record) => (
        <div>
          <strong>{text}</strong>
          <div className="text-gray-500 text-sm">Product ID: {record.productId}</div>
        </div>
      ),
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      sorter: (a, b) => parseFloat(a.price.replace(/[$,]/g, "")) - parseFloat(b.price.replace(/[$,]/g, "")),
      sortOrder: sortedColumn === "price" ? sortOrder : null,
      onHeaderCell: () => ({ onClick: () => handleSort("price") }),
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text) => (
        <Button type="default" className={text === "In Stock" ? "border-green-500 text-green-500" : "border-red-500 text-red-500"}>
          {text}
        </Button>
      ),
    },
    {
      title: "Sold",
      dataIndex: "sold",
      key: "sold",
      sorter: (a, b) => parseInt(a.sold) - parseInt(b.sold),
      sortOrder: sortedColumn === "sold" ? sortOrder : null,
      onHeaderCell: () => ({ onClick: () => handleSort("sold") }),
    },
    {
      title: "Total Earning",
      dataIndex: "totalEarning",
      key: "totalEarning",
      sorter: (a, b) => parseFloat(a.totalEarning.replace(/[$,]/g, "")) - parseFloat(b.totalEarning.replace(/[$,]/g, "")),
      sortOrder: sortedColumn === "totalEarning" ? sortOrder : null,
      onHeaderCell: () => ({ onClick: () => handleSort("totalEarning") }),
    },
  ];

  return (
    <div>
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-bold">Top Selling</h3>
        <Select defaultValue="productName" onChange={handleSort} style={{ width: 180 }}>
          {columns.filter(col => col.key !== "status").map((col) => (
            <Option key={col.key} value={col.key}>
              Sort by {col.title}
            </Option>
          ))}
        </Select>
      </div>
      <div className="overflow-hidden hover:overflow-auto scrollbar-hide hidden md:block">
        <Table
          columns={columns}
          dataSource={[...topSellingData]}
          pagination={false}
          rowClassName={() => "border-b border-gray-200"}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:hidden">
        {topSellingData.map((item, index) => (
          <div key={index} className="p-4 border rounded-lg shadow-md">
            <strong>{item.productName}</strong>
            <div className="text-gray-500 text-sm">Product ID: {item.productId}</div>
            <div>Price: {item.price}</div>
            <div className={item.status === "In Stock" ? "text-green-500" : "text-red-500"}>{item.status}</div>
            <div>Sold: {item.sold}</div>
            <div>Total Earning: {item.totalEarning}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
