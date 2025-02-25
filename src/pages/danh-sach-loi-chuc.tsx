import { Table } from "antd";
import { ArrowLeft } from "iconsax-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { getData } from "../api";

const DanhSachLoiChuc = () => {
  const [data, setData] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const router = useRouter();

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
      dataIndex: "desc",
      width: 420,
    },
  ];
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getData();
        // console.log("res :>> ", res);
        setData(res);
      } catch (error) {
        console.log("error :>> ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="h-screen w-full px-3 py-5 bg-pink-100">
      <div className="flex justify-start items-center gap-5 mb-8">
        <ArrowLeft onClick={() => router.push("/")} size="32" color="#000000" />
        <div className="text-[18px] uppercase font-medium">
          Danh sác gửi lời chúc
        </div>
      </div>
      <div>
        <Table
          size="middle"
          rowKey="id"
          loading={loading}
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
