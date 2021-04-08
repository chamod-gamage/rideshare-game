import React, { useState } from "react";
import QuestionView from "./components/QuestionView";
import { Container, Row, Col } from "reactstrap";
import { Questions } from "./Questions";
import { makeStyles } from "@material-ui/core/styles";
import LocalAtmIcon from "@material-ui/icons/LocalAtm";
import { useHistory } from "react-router-dom";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import LinearProgressWithLabel from "./components/Progress";

import "./App.css";

const useStyles = makeStyles((theme) => ({
  container: {
    height: "100vh",
    padding: "6%",
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
    cursor: "pointer",
  },
  statText: {
    lineHeight: "2rem",
    fontSize: "14px",
    color: "gray",
  },
  cardWidth: {
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
    [theme.breakpoints.up("md")]: {
      width: "60%",
    },
  },
}));

const initialValues = {
  cash: 2000,
  health: 80,
  rating: [],
  environment: 80,
};

const Game = () => {
  const classes = useStyles();
  const history = useHistory();
  const [cash, setCash] = useState(initialValues.cash);
  const [health, setHealth] = useState(initialValues.health);
  const [rating, setRating] = useState(initialValues.rating);
  const [environment, setEnvironment] = useState(initialValues.environment);
  const [selected, setSelected] = useState("r00");
  const [showPrev, setShowPrev] = useState(false);
  const [previous, setPrevious] = useState({});
  const [fade, setFade] = useState(false);
  const [progress, setProgress] = useState(0);

  const stateController = {
    cash: { setVal: setCash, val: cash },
    health: { setVal: setHealth, val: health },
    rating: { setVal: setRating, val: rating },
    environment: { setVal: setEnvironment, val: environment },
  };

  const modifyState = (impact) => {
    if (impact) {
      setShowPrev(true);
      setPrevious({ selected, cash, health, rating, environment });
      for (const [key, value] of Object.entries(impact)) {
        const curVal = stateController[key].val;
        if (Array.isArray(curVal)) {
          stateController[key].setVal(curVal.concat([value]));
        } else stateController[key].setVal(curVal + value);
      }
    }
  };

  const goNext = (id) => {
    if (id === "r00") {
      setProgress(0);
    } else if ((id.charAt(0) == "r" && id.length === 3) || id === "d-4-2") {
      setProgress(progress + 12.5);
    }
    if (id === "end")
      history.push({
        pathname: "/result",
        state: {
          data: {
            cash,
            health,
            rating: computeRating(rating),
            environment,
            id,
          },
        },
      });
    else setFade(true);
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

  const restart = () => {
    setShowPrev(false);
    setCash(initialValues.cash);
    setHealth(initialValues.health);
    setRating(initialValues.rating);
    setEnvironment(initialValues.environment);
    goNext("r00");
  };

  const computeRating = (rating) => {
    if (!rating.length) return 0;
    return rating.reduce((a, b) => a + b) / rating.length;
  };

  const renderStars = (rating) => {
    const roundedRating = Math.round(rating);
    var stars = [];
    for (var i = 0; i < roundedRating; i++) {
      stars.push(<StarIcon style={{ width: "1.5vw" }} />);
    }
    for (var j = 0; j < 5 - roundedRating; j++) {
      stars.push(<StarBorderIcon style={{ width: "1.5vw" }} />);
    }
    return stars;
  };

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(#fffcf8, #b7dfe9)",
        overflow: "auto",
      }}
    >
      <Container className={classes.container}>
        <Row className={classes.centered}>
          <div className={classes.cardWidth}>
            <Row style={{ margin: 0 }}>
              <Col xs="6">
                <h1
                  onClick={() => history.push("/")}
                  className={classes.header}
                >
                  drive<span style={{ color: "#579fa3" }}>.ai 🚘</span>
                </h1>
              </Col>
              <Col
                className={classes.left}
                style={{ padding: 0, justifyContent: "flex-end" }}
              >
                <span className={classes.statText}>
                  <LocalAtmIcon />
                  <span style={{ margin: "0 12px" }}>{cash}</span>

                  {renderStars(computeRating(rating))}
                  {/* {`cash:${cash} health:${health} rating:${rating} enviro:${environment}`} */}
                </span>
              </Col>
            </Row>
            <LinearProgressWithLabel variant="determinate" value={progress} />

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
                restart={restart}
              />
            </div>
          </div>
        </Row>
      </Container>
    </div>
  );
};

export default Game;
