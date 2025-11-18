const cors = require("cors");
const express = require("express");
const app = express();

const port = 4000;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello!");
});

app.listen(4000, () => {
  console.log(`server is running on port ${port}`);
});
