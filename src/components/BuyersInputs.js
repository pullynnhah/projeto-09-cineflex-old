import styled from "styled-components";
import Button from "./utils/Button";

function BuyerInput({seat}) {
  return (
    <ContainerInput>
      <h3>Assento {seat}:</h3>
      <label htmlFor="buyer">Nome do comprador:</label>
      <input type="text" required placeholder="Digite seu nome..." />
      <label htmlFor="cpf">CPF do comprador:</label>
      <input type="text" required placeholder="Digite seu CPF..." />
    </ContainerInput>
  );
}

export default function BuyersInputs() {
  return (
    <Form>
      <div>
        <BuyerInput seat={1} />
      </div>
      <Button>Reservar assento(s)</Button>
    </Form>
  );
}

const Form = styled.form`
  margin: 42px 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    margin-bottom: 30px;
  }
`;

const ContainerInput = styled.div`
  color: #293845;
  font-size: 18px;
  line-height: 21px;

  h3 {
    margin-bottom: 20px;
  }

  input {
    margin: 8px 0 16px;
    width: 100%;
    height: 51px;
    padding-left: 18px;
    border: 1px solid #d5d5d5;
    border-radius: 3px;
  }

  input::placeholder {
    color: #afafaf;
    font-style: italic;
  }
`;
