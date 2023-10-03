import fetch from "node-fetch";

export default async (req, res) => {
  try {
    // Make a GET request to the Express backend
    const response = await fetch("http://localhost:9090/products");
    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
