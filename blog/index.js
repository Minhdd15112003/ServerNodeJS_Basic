const express = require("express"); // require("express"); từ thư viện dependencies "express": "^4.18.2" bên package.json
const app = express();
const port = 3000;

app.get("/hello", (req, res) => {
  res.send("Hello ");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
