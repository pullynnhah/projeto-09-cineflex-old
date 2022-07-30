import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from "axios";

import Title from "./common/Title";
import Page from "./common/Page";
import Seats from "./Seats";
import Load from "./common/Load";

export default function SeatsPage({uri}) {
  const [seats, setSeats] = useState(null);
  const [order, setOrder] = useState([]);

  const {idSession} = useParams();
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
      <Seats seats={seats.seats} setOrder={setOrder} />
    </Page>
  );
}
