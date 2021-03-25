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
  const [selected, setSelected] = useState("d-1");

  const handleSelect = ({ index, option }) => {
    console.log(option);
    const curSelection = selected;
    curSelection[index] = { type: option.type, val: option.val };
    setSelected(curSelection);
    console.log(selected);
  };
  console.log(Questions[selected]);

  return (
    <div className="App">
      <Container style={{ paddingTop: "48px" }}>
        <Row className={classes.centered}>
          <Col>
            <h1 className={classes.header}>
              Steer<span style={{ color: "#579fa3" }}>.ai 🚘</span>
            </h1>
          </Col>
        </Row>

        <Row className={classes.centered}>
          <QuestionView
            isDecision={selected.charAt(0) === "d"}
            data={Questions[selected]}
            stateController={{ setCash, setHealth, setRating, setSelected }}
          />
        </Row>
      </Container>
    </div>
  );
}

export default App;
