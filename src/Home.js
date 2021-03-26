import React from "react";
import { Container, Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import "./App.css";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    padding: "15%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  centered: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    marginTop: "32px",
    "&.MuiButton-outlinedPrimary": {
      border: "3px solid rgba(87, 159, 163, 0.5)",
    },
  },

  header: {
    fontWeight: "bold",
    fontSize: "5vw",
  },
  statText: {
    lineHeight: "2rem",
    fontSize: "14px",
    color: "gray",
  },
});

const Home = () => {
  const history = useHistory();
  const classes = useStyles();

  return (
    <div style={{ backgroundImage: "linear-gradient(#fffcf8, #b7dfe9)" }}>
      <Container className={classes.container}>
        <div>
          <Row className={classes.centered}>
            <h1 className={classes.header}>
              steer<span style={{ color: "#579fa3" }}>.ai 🚘</span>
            </h1>
          </Row>
          <Row className={classes.centered}>
            <p style={{ color: "gray" }}>
              How long you can last in the ridesharing industry?
            </p>
          </Row>
          <Row className={classes.centered}>
            <Button
              style={{
                marginTop: "32px",
                border: "2px solid rgba(87, 159, 163, 0.5)",
              }}
              onClick={() => {
                history.push("/game");
              }}
              size="large"
              variant="outlined"
              color="primary"
            >
              Let's Go
            </Button>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default Home;
