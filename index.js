const express = require("express");
const app = express();

var bodyParser = require("body-parser");
var cors = require("cors");
// ini
var jsonParser = bodyParser.json();
//itu
var urlencodedParser = bodyParser.urlencoded({ extended: false });

const port = 3000;

app.use(cors());
app.use(jsonParser);
app.use(urlencodedParser);

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.post("/login", (req, res) => {
  //Simulasi data dari database
  const username = "sofyan_fa";
  const password = "Qazwsx123";

  // ln 30-44 contoh penerapan untuk mengganti if else

  //return semua kondisi failed terlebih dahulu
  //check if username is valid
  if (req.body.username !== username) {
    res.json({
      status: "error, username not found",
    });
    return;
  }
  //check if password is valid
  if (req.body.password !== password) {
    res.json({
      status: "error, wrong password",
    });
    return;
  }

  //return kondisi sukses
  res.json({ status: "success" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
