import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";

import styled from "styled-components";
import HomePage from "./HomePage";
import SessionPage from "./SessionPage";

export default function App() {
  const URI = "https://mock-api.driven.com.br/api/v5/cineflex";

  const [movieID, setMovieID] = useState(null);
  const [sessionID, setSessionID] = useState(null);
  return (
    <>
      <Header>
        <h1>Cineflex</h1>
      </Header>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage uri={URI} setMovieID={setMovieID} />} />
          <Route
            path="/sessoes/:idMovie"
            element={<SessionPage uri={URI} movieID={movieID} setSessionID={setSessionID} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const Header = styled.header`
  width: 100vw;
  height: 67px;

  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #c3cfd9;

  h1 {
    color: #e8833a;
    font-size: 34px;
    line-height: 40px;
    text-transform: uppercase;
  }
`;
