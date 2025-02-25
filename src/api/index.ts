export const saveData = async (updatedData: any) => {
  fetch("https://67bd3236321b883e790b868f.mockapi.io/api/wishes", {
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
  return fetch("https://67bd3236321b883e790b868f.mockapi.io/api/wishes")
    .then((response) => response.json())
    .then((jsonData) => {
      console.log("jsonData :>> ", jsonData);
      return jsonData;
    })
    .catch((error) => console.error("Error loading JSON:", error));
};