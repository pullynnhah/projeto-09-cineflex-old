import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

import Title from "./common/Title";
import Page from "./common/Page";
import Seats from "./Seats";
import Load from "./common/Load";
import BuyerForm from "./BuyerForm";

export default function SeatsPage({uri}) {
  const [seats, setSeats] = useState(null);
  const [orderSeats, setOrderSeats] = useState(new Set());
  const [buyers, setBuyers] = useState({});
  const {idSession} = useParams();

  function setName(name, index) {
    const newBuyers = {...buyers};
    if (!(index in buyers)) {
      newBuyers[index] = {};
    }
    newBuyers[index].name = name;
    setBuyers(newBuyers);
  }

  function setCPF(cpf, index) {
    const newBuyers = {...buyers};
    if (!(index in buyers)) {
      newBuyers[index] = {};
    }
    newBuyers[index].cpf = cpf;
    setBuyers(newBuyers);
  }

  useEffect(() => {
    const promise = axios.get(`${uri}/showtimes/${idSession}/seats`);
    promise.then(response => setSeats(response.data));
  }, [uri, idSession]);

  if (seats === null) {
    return <Load />;
  }
  return (
    <Page>
      <Title color="#293845" weight={400}>
        <h2>Selecione o(s) assento(s)</h2>
      </Title>
      <Seats
        seats={seats.seats}
        orderSeats={orderSeats}
        setOrderSeats={setOrderSeats}
        buyers={buyers}
        setBuyers={setBuyers}
      />
      <BuyerForm orderSeats={orderSeats} buyers={buyers} setName={setName} setCPF={setCPF} />
    </Page>
  );
}
