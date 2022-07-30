import styled from "styled-components";
import {useState} from "react";

function BuyerInput({seatNumber, idSeat, setName, setCPF, buyers}) {
  // TODO: add index to purchase
  return (
    <Input>
      <h3>Assento {seatNumber}</h3>
      <label>Nome do comprador:</label>
      <input
        type="text"
        value={buyers[idSeat]?.name ?? ""}
        onChange={e => setName(e.target.value, idSeat)}
        placeholder="Digite seu nome..."
      />
      <label>CPF do comprador:</label>
      <input
        type="text"
        value={buyers[idSeat]?.cpf ?? ""}
        onChange={e => setCPF(e.target.value, idSeat)}
        placeholder="Digite seu CPF..."
      />
    </Input>
  );
}

export default function BuyerForm({orderSeats, buyers, setName, setCPF, idSeat}) {
  return (
    <Form>
      {[...orderSeats]
        .sort((a, b) => a - b)
        .map((orderSeat, index) => (
          <BuyerInput
            seatNumber={orderSeat}
            idSeat={idSeat}
            key={index}
            buyers={buyers}
            setName={setName}
            setCPF={setCPF}
          />
        ))}
    </Form>
  );
}

const Form = styled.form``;

const Input = styled.div``;
