const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

app.use(cors());

app.get("/api/test", (req, res) => {
  res.json("hello world " + Date.now());
});

if (process.env.PORT) {
  app.listen(process.env.PORT, () => {
    console.log(
      `Server is working on http://localhost:${process.env.PORT}`
    );
  });
}

module.exports = app;
