import { Button, Table } from "antd";
import { useEffect, useState } from "react";
import { guidGenerator } from "../utils/common";

const Test = () => {
  const [data, setData] = useState([]);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
  ];

  const saveData = async (updatedData: any) => {
    fetch("http://localhost:5000/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("Data saved:", result);
        setData(result.data);
      })
      .catch((error) => console.error("Error saving data:", error));
  };

  const getData = () => {
    fetch("http://localhost:5000/data")
      .then((response) => response.json())
      .then((jsonData) => {
        console.log("jsonData :>> ", jsonData);
        setData(jsonData);
      })
      .catch((error) => console.error("Error loading JSON:", error));
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <p>test</p>
      <Button
        onClick={() => saveData({ id: guidGenerator(), name: "test", age: 12 })}
      >
        click
      </Button>

      <Table dataSource={data} columns={columns} rowKey={"id"} />
    </div>
  );
};

export default Test;
