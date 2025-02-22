export const saveData = async (updatedData: any) => {
    fetch("http://localhost:5000/save", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedData),
    })
      .then((response) => response.json())
      .then((result) => {
        // console.log("Data saved:", result);
        return result.data;
      })
      .catch((error) => console.error("Error saving data:", error));
};

export const getData = () => {
    fetch("http://localhost:5000/data")
        .then((response) => response.json())
        .then((jsonData) => {
        console.log("jsonData :>> ", jsonData);
        return jsonData;
        })
        .catch((error) => console.error("Error loading JSON:", error));
};