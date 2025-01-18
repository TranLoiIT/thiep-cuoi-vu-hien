const express = require("express");
const fs = require("fs");
const cors = require("cors");
const app = express();
const PORT = 5000;
const JSON_FILE = "./db/index.json";

app.use(cors());
app.use(express.json());

// API: Lấy dữ liệu từ JSON
app.get("/data", (req, res) => {
  fs.readFile(JSON_FILE, "utf8", (err, data) => {
    if (err) {
      console.error("Error reading JSON file:", err);
      res.status(500).send("Error reading data");
    } else {
      res.json(JSON.parse(data));
    }
  });
});

app.post("/save", (req, res) => {
    const newItem = req.body; // Dữ liệu mới được gửi từ React
  
    // Đọc dữ liệu hiện tại từ file JSON
    fs.readFile(JSON_FILE, "utf8", (readErr, fileData) => {
    
      if (readErr) {
        console.error("Error reading JSON file:", readErr);
        res.status(500).send("Error reading data");
        return;
      }
  
      // Chuyển đổi chuỗi JSON thành mảng
      let currentData = [];
      try {
        // console.log(fileData)
        currentData = JSON.parse(fileData);
      } catch (parseErr) {
        console.error("Error parsing JSON:", parseErr);
        res.status(500).send("Error parsing data");
        return;
      }
  
      // Thêm phần tử mới vào danh sách
      currentData.push(newItem);

      // Ghi lại dữ liệu đã cập nhật vào file JSON
      fs.writeFile(JSON_FILE, JSON.stringify(currentData, null, 2), (writeErr) => {
        if (writeErr) {
          console.error("Error writing JSON file:", writeErr);
          res.status(500).send("Error saving data");
        } else {
          res.json({ message: "Data updated successfully", data: currentData });
        }
      });
    });
  });
  

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
