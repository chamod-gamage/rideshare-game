import React, { useState } from "react";
import QuestionView from "./components/QuestionView";
import { Container, Row, Col } from "reactstrap";
import { Questions } from "./Questions";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  centered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: "4.5vw",
  },
});

function App() {
  const classes = useStyles();
  const [cash, setCash] = useState(20000);
  const [health, setHealth] = useState(100);
  const [rating, setRating] = useState([]);
  const [environment, setEnvironment] = useState(1000);
  const [selected, setSelected] = useState("d-1");
  const [previous, setPrevious] = useState({});

  const goNext = (id) => {
    setPrevious({ selected, cash, health, rating, environment });
    setSelected(id);
  };

  const goBack = () => {
    setCash(previous.cash);
    setHealth(previous.health);
    setRating(previous.rating);
    setEnvironment(previous.environment);
    setSelected(previous.selected);
  };

  return (
    <div className="App">
      <Container style={{ padding: "5% 15%" }}>
        <Row>
          <span>{`cash:${cash} health:${health} rating:${rating} enviro:${environment}`}</span>
        </Row>
        <Row className={classes.centered}>
          <Col>
            <h1 className={classes.header}>
              Steer<span style={{ color: "#579fa3" }}>.ai 🚘</span>
            </h1>
          </Col>
        </Row>

        <Row style={{ marginTop: "24px" }}>
          <QuestionView
            id={selected}
            isDecision={selected.charAt(0) === "d"}
            data={Questions[selected]}
            stateController={{
              cash: { setVal: setCash, val: cash },
              health: { setVal: setHealth, val: health },
              rating: { setVal: setRating, val: rating },
              environment: { setVal: setEnvironment, val: environment },
            }}
            setPrevious={setPrevious}
            goNext={goNext}
            goBack={goBack}
          />
        </Row>
      </Container>
    </div>
  );
}

export default App;
