import { Table } from "antd";
import { useEffect, useState } from "react";

const DanhSachLoiChuc = () => {
  const [data, setData] = useState<any>([]);

  const columns: any = [
    {
      title: "Tên",
      dataIndex: "name",
      width: 120,
      fixed: "left",
    },
    {
      title: "Xác nhận",
      dataIndex: "type",
      render: (value: string) => (
        <div>{`${value === "yes" ? "Có" : "Không"}`}</div>
      ),
    },
    {
      title: "Nhà",
      dataIndex: "house",
      width: 80,
      render: (value: string) => (
        <div>{`${value === "nam" ? "Nam" : "Nữ"}`}</div>
      ),
    },
    {
      title: "Lời chú",
      dataIndex: "des",
      width: 420,
    },
  ];

  const getData = () => {
    fetch("http://localhost:5000/data")
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
      })
      .catch((error) => console.error("Error loading JSON:", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="h-screen w-full px-3 py-5 bg-pink-100">
      <div className="text-[18px] uppercase">Danh sác gửi lời chúc</div>
      <div>
        <Table
          size="middle"
          rowKey="_id"
          columns={columns}
          dataSource={data}
          pagination={false}
          scroll={{ x: "max-content" }}
        />
      </div>
    </div>
  );
};

export default DanhSachLoiChuc;
