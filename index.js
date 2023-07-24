const express = require("express");
const app = express();

const bicycles = require("./data/data.json");

app.get("/", (req, res) => {
  return res.send(bicycles);
});

app.get("/bicycle", (req, res) => {
  const bicycle = bicycles.find((b) => b.id === req.query.id);
  return res.send(bicycle);
});

app.listen(3000, () => console.log("Server is runing at port 3000"));
