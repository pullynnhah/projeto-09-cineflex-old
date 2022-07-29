import {useEffect, useState} from "react";
import Title from "./utils/Title";
import Page from "./utils/Page";
import Seats from "./Seats";
import axios from "axios";
import Load from "./utils/Load";
import BuyersInputs from "./BuyersInputs";
import {useParams} from "react-router-dom";

export default function SeatsPage({uri}) {
  const [seats, setSeats] = useState(null);

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
      <Seats seats={seats.seats} />
      <BuyersInputs />
    </Page>
  );
}
