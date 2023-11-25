import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import Card from "./components/cards/card";

export default function App() {
  const [values, setValues] = useState();
  const [listCard, setListCard] = useState([]);
  console.log(listCard);
  const handleRegisterGame = () => {
    Axios.post("http://localhost:3001/register", {
      name: values.name,
      cost: values.cost,
      airline: values.airline,
      airportd: values.airportd,
      airporta: values.airporta,
      date: values.date,      
    }).then(() => {
      Axios.post("http://localhost:3001/search", {
        name: values.name,
        cost: values.cost,
        airline: values.airline,
        airportd: values.airportd,
        airporta: values.airporta,
        date: values.date,
      }).then((response) => {
        setListCard([
          ...listCard,
          {
            id: response.data[0].id,
            name: values.name,
            cost: values.cost,
            airline: values.airline,
            airportd: values.airportd,
            airporta: values.airporta,
            date: values.date,
          },
        ]);
      });
    });
  };

  useEffect(() => {
    Axios.get("http://localhost:3001/getCards").then((response) => {
      setListCard(response.data);
    });
  }, []);

  const handleaddValues = (value) => {
    setValues((prevValues) => ({
      ...prevValues,
      [value.target.name]: value.target.value,
    }));
  };

  return (
    <div className="app-container">
      <div className="register-container">
        <h1 className="register-title">Cadastrar Voos</h1>

        <input
          type="text"
          name="name"
          placeholder="Nome do Passageiro"
          className="register-input"
          onChange={handleaddValues}
        />
        <input
          type="text"
          placeholder="Companhia Aérea"
          name="airline"
          className="register-input"
          onChange={handleaddValues}
        />
        <input
          type="text"
          placeholder="Aeroporto de Origem"
          name="airportd"
          className="register-input"
          onChange={handleaddValues}
        />
        <input
          type="text"
          placeholder="Aeroporto de Destino"
          name="airporta"
          className="register-input"
          onChange={handleaddValues}
        />
        <input
          type="number"
          step="0.01"
          min="1"
          max="10000"
          placeholder="Preço"
          name="cost"
          className="register-input"
          onChange={handleaddValues}
        />
        <input
          type="date"
          step="0.01"
          min="1"
          max="10000"
          placeholder="Data do voo"
          name="date"
          className="register-input"
          onChange={handleaddValues}
        />

        <button onClick={handleRegisterGame} className="register-button">
          Cadastrar
        </button>
      </div>

      <div className="menu">
        <h1 className="menu-title">Lista de Voos</h1>
        {listCard.map((val) => (
          <Card
            listCard={listCard}
            setListCard={setListCard}
            key={val.id}
            id={val.id}
            name={val.name}
            cost={val.cost}
            airline={val.airline}
            airportd={val.airportd}
            airporta={val.airporta}
            date={val.date}
          />
        ))}
    </div>
    </div >
  );
}