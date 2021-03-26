import React, { useState } from "react";
import QuestionView from "./components/QuestionView";
import { Container, Row, Col } from "reactstrap";
import { Questions } from "./Questions";
import { makeStyles } from "@material-ui/core/styles";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import "./App.css";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    padding: "10% 15%",
  },
  centered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  left: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  header: {
    fontWeight: "bold",
    fontSize: "2rem",
  },
  statText: {
    lineHeight: "2rem",
    fontSize: "14px",
    color: "gray",
  },
});

const Game = () => {
  const classes = useStyles();
  const [cash, setCash] = useState(20000);
  const [health, setHealth] = useState(100);
  const [rating, setRating] = useState([]);
  const [environment, setEnvironment] = useState(1000);
  const [selected, setSelected] = useState("d-1");
  const [showPrev, setShowPrev] = useState(false);
  const [previous, setPrevious] = useState({});
  const [fade, setFade] = useState(false);

  const stateController = {
    cash: { setVal: setCash, val: cash },
    health: { setVal: setHealth, val: health },
    rating: { setVal: setRating, val: rating },
    environment: { setVal: setEnvironment, val: environment },
  };

  const modifyState = (impact) => {
    setShowPrev(true);
    setPrevious({ selected, cash, health, rating, environment });
    for (const [key, value] of Object.entries(impact)) {
      const curVal = stateController[key].val;
      if (Array.isArray(curVal)) {
        stateController[key].setVal(curVal.concat([value]));
      } else stateController[key].setVal(curVal + value);
    }
  };

  const goNext = (id) => {
    setFade(true);
    setSelected(id);
  };

  const goBack = () => {
    setShowPrev(false);
    setCash(previous.cash);
    setHealth(previous.health);
    setRating(previous.rating);
    setEnvironment(previous.environment);
    goNext(previous.selected);
  };

  const computeRating = (rating) => {
    if (!rating.length) return 0;
    return rating.reduce((a, b) => a + b) / rating.length;
  };

  const renderStars = (rating) => {
    const roundedRating = Math.round(rating);
    var stars = [];
    for (var i = 0; i < roundedRating; i++) {
      stars.push(<StarIcon />);
    }
    for (var j = 0; j < 5 - roundedRating; j++) {
      stars.push(<StarBorderIcon />);
    }
    return stars;
  };

  return (
    <div style={{ backgroundImage: "linear-gradient(#fffcf8, #b7dfe9)" }}>
      <Container className={classes.container}>
        <Row className={classes.centered}>
          <div>
            <Row style={{ margin: 0 }}>
              <Col xs="6">
                <h1 className={classes.header}>
                  Steer<span style={{ color: "#579fa3" }}>.ai 🚘</span>
                </h1>
              </Col>
              <Col className={classes.left} style={{ padding: 0 }}>
                <span className={classes.statText}>
                  <LocalAtmIcon />
                  <span style={{ margin: "0 12px" }}>{cash}</span>

                  {renderStars(computeRating(rating))}
                  {/* {`cash:${cash} health:${health} rating:${rating} enviro:${environment}`} */}
                </span>
              </Col>
            </Row>
            <div
              onAnimationEnd={() => setFade(false)}
              className={fade ? "fade" : ""}
            >
              <QuestionView
                id={selected}
                isDecision={selected.charAt(0) === "d"}
                data={Questions[selected]}
                modifyState={modifyState}
                showPrev={showPrev}
                goNext={goNext}
                goBack={goBack}
              />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Game;
