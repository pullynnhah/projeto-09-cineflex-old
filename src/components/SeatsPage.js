import Title from "./utils/Title";
import Page from "./utils/Page";
import Seats from "./Seats";
import {useEffect, useState} from "react";
import axios from "axios";
import Load from "./utils/Load";

export default function SeatsPage({uri, sessionID, setSeatID}) {
  const [seats, setSeats] = useState(null);

  useEffect(() => {
    const promise = axios.get(`${uri}/showtimes/${sessionID}/seats`);
    promise.then(response => setSeats(response.data));
  }, [uri, sessionID]);

  if (seats === null) {
    return <Load />;
  }
  return (
    <Page>
      <Title color="#293845" weight={400}>
        <h2>Selecione o(s) assento(s)</h2>
      </Title>
      <Seats setSeatID={setSeatID} seats={seats.seats} />
    </Page>
  );
}
