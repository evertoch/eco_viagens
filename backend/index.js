const express = require("express");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "1234",
  database: "ecoviagens",
});

app.use(express.json());
app.use(cors());

app.post("/register", (req, res) => {
  const { name } = req.body;
  const { airline } = req.body;
  const { cost } = req.body;

  let mysql = "INSERT INTO passengers ( name, airline, cost) VALUES (?, ?, ?)";
  db.query(mysql, [name, airline, cost], (err, result) => {
    res.send(result);
  });
});

app.post("/search", (req, res) => {
  const { name } = req.body;
  const { airline } = req.body;
  const { cost } = req.body;

  let mysql =
    "SELECT * from passengers WHERE name = ? AND airline = ? AND cost = ?";
  db.query(mysql, [name, airline, cost], (err, result) => {
    if (err) res.send(err);
    res.send(result);
  });
});

app.get("/getCards", (req, res) => {
  let mysql = "SELECT * FROM passengers";
  db.query(mysql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.put("/edit", (req, res) => {
  const { id } = req.body;
  const { name } = req.body;
  const { airline } = req.body;
  const { cost } = req.body;
  let mysql = "UPDATE passengers SET name = ?, airline = ?, cost = ? WHERE id = ?";
  db.query(mysql, [name, airline, cost, id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  let mysql = "DELETE FROM passengers WHERE id = ?";
  db.query(mysql, id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.send(result);
    }
  });
});

app.listen(3001, () => {
  console.log("rodando na porta 3001");
});