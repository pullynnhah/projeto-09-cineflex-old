import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

import Page from "./utils/Page";
import Title from "./utils/Title";
import Button from "./utils/Button";
import styled from "styled-components";
import Load from "./utils/Load";
import Sessions from "./Sessions";

export default function SessionPage({uri, movieID, setSessionID}) {
  const [sessions, setSessions] = useState(null);

  useEffect(() => {
    const promise = axios.get(`${uri}/movies/${movieID}/showtimes`);
    promise.then(response => setSessions(response.data));
  }, [uri]);

  if (sessions === null) {
    return <Load />;
  }

  return (
    <Page>
      <Title color="#293845" weight={400}>
        <h2>Selecione o horário</h2>
      </Title>
      <Sessions sessions={sessions.days} setSessionID={setSessionID} />
    </Page>
  );
}
