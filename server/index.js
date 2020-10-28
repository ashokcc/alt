import express from "express";
import path from "path";

const PORT = 2000;
const app = express();

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "./index.html"));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
