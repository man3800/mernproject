const express = require("express");
const app = express();
require("dotenv").config();

app.get("/", (req, res) => {
  res.send("Hi from Node js");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});
