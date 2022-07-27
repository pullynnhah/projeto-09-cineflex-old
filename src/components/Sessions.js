import {Link} from "react-router-dom";
import Button from "./utils/Button";
import styled from "styled-components";

function Session({weekday, date, showtimes, setSessionID}) {
  return (
    <SessionCard>
      <p>
        {weekday} - {date}
      </p>
      <div className="btns">
        {showtimes.map(showtime => (
          <Link to={`/assentos/${showtime.id}`}>
            <Button onClick={() => setSessionID(showtime.id)}>{showtime.name}</Button>
          </Link>
        ))}
      </div>
    </SessionCard>
  );
}

export default function Sessions({sessions, setSessionID}) {
  return (
    <ContainerSessions>
      {sessions.map((session, index) => (
        <Session key={index} {...session} setSessionID={setSessionID} />
      ))}
    </ContainerSessions>
  );
}

const ContainerSessions = styled.section``;

const SessionCard = styled.div`
  margin: 0 23px;

  p {
    color: #293845;
    font-size: 20px;
    line-height: 23px;
    margin: 23px 0;
  }

  .btns {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
`;
