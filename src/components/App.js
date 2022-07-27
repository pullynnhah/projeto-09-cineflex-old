import styled from "styled-components";

export default function App() {
  const URI = "https://mock-api.driven.com.br/api/v5/cineflex";
  return (
    <>
      <Header>
        <h1>Cineflex</h1>
      </Header>
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
