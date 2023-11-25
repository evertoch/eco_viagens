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
  const { airportd } = req.body;
  const { airporta } = req.body;
  const { date } = req.body;

  let mysql = "INSERT INTO flights (name, airline, airportd, airporta, cost, date) VALUES (?, ?, ?, ?, ?, ?)";
  db.query(mysql, [name, airline, airportd, airporta, cost, date], (err, result) => {
    res.send(result);
  });
});

app.post("/search", (req, res) => {
  const { name } = req.body;
  const { airline } = req.body;
  const { cost } = req.body;
  const { airportd } = req.body;
  const { airporta } = req.body;
  const { date } = req.body;
  
  let mysql = "SELECT * from flights WHERE name = ? AND airline = ? AND airportd = ? AND airporta = ? AND cost = ? AND date = ?";
  db.query(mysql, [name, airline, airportd, airporta, cost, date], (err, result) => {
    if (err) res.send(err);
    res.send(result);
  });
});

app.get("/getCards", (req, res) => {
  let mysql = "SELECT * FROM flights";
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
  const { cost } = req.body;
  const { airline } = req.body;
  const { airportd } = req.body;
  const { airporta } = req.body;
  const { date } = req.body;
  let mysql = "UPDATE flights SET name = ?, airline = ?, airportd = ?, airporta = ?, cost = ?, date =? WHERE id = ?";
  db.query(mysql, [name, airline, airportd, airporta, cost, date, id], (err, result) => {
    if (err) {
      res.send(err);
    } else {
      res.send(result);
    }
  });
});

app.delete("/delete/:id", (req, res) => {
  const { id } = req.params;
  let mysql = "DELETE FROM flights WHERE id = ?";
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