import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import Card from "./components/cards/card";

const airlinep = ["Azul Linhas Aéreas Brasileiras",
                  "Avianca",
                  "Gol Linhas Aéres Inteligentes S.A",
                  "LATAM Airlines",
                  "Outras"];

const aiport = ["Aeroporto de Chapecó (XAP)",
                "Aeroporto Internacional de São Paulo - Congonhas (CGH)",
                "Aeroporto Internacional de Foz do Iguaçu (IGU)",
                "Aeroporto Internacional de São Paulo - Guarulhos (GRU)",
                "Aeroporto Internacional de Viracopos - Campinas (VCP)",
                "Aeroporto Internacional de Florianópolis (FLN)",
                "Aeroporto Internacional de Curitiba (CWB)",
                "Aeroporto Internacional do Rio de Janeiro - Galeão (GIG)",
                "Aeroporto do Rio de Janeiro - Santos Dumont (SDU)",
                "Aeroporto Internacional de Curitiba (CWB)",
                "Aeroporto Internacional de Manaus (MAO)",
              ];

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

{/* Nome do Passageiro*/}
        <input
          type="text"
          name="name"
          placeholder="Nome do Passageiro"
          className="register-input"
          onChange={handleaddValues}
        />
{/* Companhia Aérea*/}        
        <select
          name="airline"
          className="register-input"
          onChange={handleaddValues}
        >
          <option value="" disabled selected hidden>Companhia Aérea</option>
          {airlinep.map((airline, index) => (
            <option key={index} value={airline}>
              {airline}
            </option>
          ))}
        </select>
        
{/* Aeroporto de Origem*/}        
        {/* Aeroporto de Origem*/}
      <select
        name="airportd"
        className="register-input"
        onChange={handleaddValues}
      >
        <option value="" disabled selected hidden>Escolha o Aeroporto de Origem</option>
        {aiport.map((airport, index) => (
          <option key={index} value={airport}>
            {airport}
          </option>
        ))}
      </select>

{/* Aeroporto de Destino*/}
  <select
    name="airporta"
    className="register-input"
    onChange={handleaddValues}
  >
    <option value="" disabled selected hidden>Escolha o Aeroporto de Destino</option>
    {aiport.map((airport, index) => (
      <option key={index} value={airport}>
        {airport}
      </option>
    ))}
  </select>

{/* Preço da Passagem*/}        
        <input
          type="number"
          step="0.01"
          min="1"
          max="10000"
          placeholder="Preço R$"
          name="cost"
          className="register-input"
          onChange={handleaddValues}
        />

{/* Data do Voo*/}        
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