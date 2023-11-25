import React, { useState } from "react";
import "./card.css";
import FormDialog from "../dialog/dialogForm";

export default function Card(props) {
  const [open, setOpen] = useState(false);

    // Função para formatar a data
    const formatDate = (dateString) => {
      const [year, month, day] = dateString.split("-");
      const formattedDate = new Date(year, month - 1, day); // Mês é base 0, então subtrai 1
      const options = { year: "numeric", month: "long", day: "numeric" };
      return formattedDate.toLocaleDateString("pt-BR", options);
    };

  return (
    <div>
      <FormDialog
        open={open}
        setOpen={setOpen}
        title={props.name}
        airline={props.airline}
        cost={props.cost}
        airportd={props.airportd}
        airporta={props.airporta}
        date={props.date}
        listCard={props.listCard}
        setListCard={props.setListCard}
        id={props.id}
      />
      <div className="card-container" onClick={() => setOpen(true)}>
        <h1 className="card-title">{props.name}</h1>
        <p className="card-date">Data do Voo: {formatDate(props.date)}</p>
        <p className="card-airline">{props.airline}</p>
        <p className="card-airportd">Aeroporto de Partida: {props.airportd}</p>
        <p className="card-airporta">Aeroporto de chegada: {props.airporta}</p>
        <h3 className="card-cost">R$ {props.cost}</h3>
      </div>
    </div>
  );
}