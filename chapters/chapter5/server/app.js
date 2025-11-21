// app.js
const express = require("express");
const app = express();

// define a simple route
app.get("/", (req, res) => {
  res.send("✅ Express is working on your computer!");
});

// start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});