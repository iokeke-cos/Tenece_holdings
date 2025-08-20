const express = require("express");
const app = express();
const PORT = 3000;

// Root test endpoint
app.get("/", (req, res) => {
  res.json({ message: "API is running 🚀" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
