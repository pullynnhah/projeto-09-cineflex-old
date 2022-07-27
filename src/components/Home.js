import {useEffect, useState} from "react";
import styled from "styled-components";
import axios from "axios";

import Title from "./utils/Title";
import Load from "./utils/Load";
import Movies from "./Movies";
import Page from "./utils/Page";

export default function Home({uri}) {
  const [movies, setMovies] = useState(null);

  useEffect(() => {
    const promise = axios.get(`${uri}/movies`);
    promise.then(response => setMovies(response.data));
  }, [uri]);

  if (movies === null) {
    return <Load />;
  }

  return (
    <Page>
      <Title color="#293845" weight={400}>
        <h2>Selecione o filme</h2>
      </Title>
      <Movies movies={movies} />
    </Page>
  );
}
