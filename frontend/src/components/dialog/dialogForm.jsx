import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Axios from "axios";

export default function FormDialog(props) {
  const [editValues, setEditValues] = useState({
    id: props.id,
    name: props.title,
    cost: props.cost,
    airline: props.airline,
    airportd: props.airportd,
    airporta: props.airporta,
    date: props.date,
  });

  const handleChangeValues = (values) => {
    setEditValues((prevValues) => ({
      ...prevValues,
      [values.target.id]: values.target.value,
    }));
  };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleEditGame = () => {
    Axios.put("http://localhost:3001/edit", {
      id: editValues.id,
      name: editValues.name,
      cost: editValues.cost,
      airline: editValues.airline,
      airportd: editValues.airportd,
      airporta: editValues.airporta,
      date: editValues.date,
    }).then(() => {
      props.setListCard(
        props.listCard.map((value) => {
          return value.id == editValues.id
            ? {
                id: editValues.id,
                name: editValues.name,
                cost: editValues.cost,
                airline: editValues.airline,
                airportd: editValues.airportd,
                airporta: editValues.airporta,
                date: editValues.date,
              }
            : value;
        })
      );
    });
    handleClose();
  };

  const handleDeleteGame = () => {
    Axios.delete(`http://localhost:3001/delete/${editValues.id}`).then(() => {
      props.setListCard(
        props.listCard.filter((value) => {
          return value.id != editValues.id;
        })
      );
    });
    handleClose();
  };

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Editar</DialogTitle>
        
        <DialogContent>
          <TextField
            disabled
            margin="dense"
            id="id"
            label="ID"
            defaultValue={props.id}
            type="text"
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Nome do Passageiro"
            defaultValue={props.title}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="airline"
            label="Companhia Aérea"
            defaultValue={props.airline}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="aiportd"
            label="Aeroporto de Partida"
            defaultValue={props.airportd}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="aiporta"
            label="Aeroporto de Chegada"
            defaultValue={props.airporta}
            type="text"
            onChange={handleChangeValues}
            fullWidth
          />                    
          <TextField
            autoFocus
            margin="dense"
            id="cost"
            label="preço"
            defaultValue={props.cost}
            type="number"
            onChange={handleChangeValues}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="date"
            defaultValue={props.date}
            type="date"
            onChange={handleChangeValues}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button color="primary" onClick={() => handleDeleteGame()}>
            Excluir
          </Button>
          <Button color="primary" onClick={() => handleEditGame()}>
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}