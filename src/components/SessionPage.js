import {useEffect, useState} from "react";
import axios from "axios";

import Page from "./utils/Page";
import Title from "./utils/Title";
import Load from "./utils/Load";
import Sessions from "./Sessions";
import {useParams} from "react-router-dom";

export default function SessionPage({uri}) {
  const [sessions, setSessions] = useState(null);

  const {idMovie} = useParams();
  useEffect(() => {
    const promise = axios.get(`${uri}/movies/${idMovie}/showtimes`);
    promise.then(response => setSessions(response.data));
  }, [uri, idMovie]);

  if (sessions === null) {
    return <Load />;
  }

  return (
    <Page>
      <Title color="#293845" weight={400}>
        <h2>Selecione o horário</h2>
      </Title>
      <Sessions sessions={sessions.days} />
    </Page>
  );
}
