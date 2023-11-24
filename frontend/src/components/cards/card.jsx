import React, { useState } from "react";
import "./card.css";
import FormDialog from "../dialog/dialogForm";

export default function Card(props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <FormDialog
        open={open}
        setOpen={setOpen}
        title={props.name}
        airline={props.airline}
        cost={props.cost}
        listCard={props.listCard}
        setListCard={props.setListCard}
        id={props.id}
      />
      <div className="card-container" onClick={() => setOpen(true)}>
        <h1 className="card-title">{props.name}</h1>
        <p className="card-id">{props.id}</p>
        <p className="card-airline">{props.airline}</p>
        <h3 className="card-cost">R$ {props.cost}</h3>
      </div>
    </div>
  );
}