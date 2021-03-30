import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { useHistory, useLocation } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import "./App.css";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    padding: "3% 10% ",
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
  caption: {
    fontSize: "12px",
    lineHeight: 2.5,
    color: "gray",
  },
  statText: {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#579fa3",
  },
  card: {
    borderRadius: "12px",
    width: "620",
    marginTop: "24px",
  },
  scoreText: {
    fontWeight: "bold",
    paddingTop: "32px",
    color: "#555555",
  },
});

const Result = () => {
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const data = (location && location.state && location.state.data) || null;

  const renderStars = (rating) => {
    const roundedRating = Math.round(rating);
    var stars = [];
    for (var i = 0; i < roundedRating; i++) {
      stars.push(<StarIcon fontSize="small" />);
    }
    for (var j = 0; j < 5 - roundedRating; j++) {
      stars.push(<StarBorderIcon fontSize="small" />);
    }
    return stars;
  };

  if (!data || !data.id || data.id !== "end") {
    history.push("/");
    return <></>;
  }

  return (
    <div
      style={{
        backgroundImage: "linear-gradient(#fffcf8, #b7dfe9)",
        overflow: "auto",
      }}
    >
      <Container className={classes.container}>
        <Row>
          <Row style={{ margin: 0, width: "100%" }}>
            <Col>
              <h1 className={classes.header} onClick={() => history.push("/")}>
                steer<span style={{ color: "#579fa3" }}>.ai 🚘</span>
              </h1>
            </Col>
            <Col style={{ display: "flex", justifyContent: "flex-end" }}>
              <Typography variant="h5" className={classes.scoreText}>
                Final Score: <span style={{ color: "#579fa3" }}> 96</span>
              </Typography>
            </Col>
          </Row>

          <Card className={classes.card}>
            <CardContent>
              <Typography
                className={classes.title}
                color="textSecondary"
                gutterBottom
              >
                Here's a breakdown of your score:
              </Typography>
              <Row style={{ margin: "0", padding: "8px 0 16px 0" }}>
                <Col>
                  <Row>
                    <span className={classes.caption}>
                      Average rider rating of {data.rating}
                    </span>
                  </Row>
                  <Row>
                    <span style={{ color: "gray" }}>
                      {renderStars(data.rating)}
                    </span>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <span className={classes.caption}>Finished with</span>
                  </Row>
                  <Row>
                    <span className={classes.statText}> {data.cash} CAD</span>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <span className={classes.caption}>Environment rating</span>
                  </Row>
                  <Row>
                    <span className={classes.statText}>
                      {" "}
                      {data.environment}
                    </span>
                  </Row>
                </Col>
                <Col>
                  <Row>
                    <span className={classes.caption}>Driver health</span>
                  </Row>
                  <Row>
                    <span className={classes.statText}>
                      {" "}
                      {data.health} /100
                    </span>
                  </Row>
                </Col>
              </Row>
              <CardMedia
                style={{
                  height: "275px",
                  margin: "0 -16px",
                  marginBottom: "16px",
                }}
                image="https://d3i6fh83elv35t.cloudfront.net/newshour/app/uploads/2014/10/Uber-driver-2-1024x768.jpg"
              />
              <Typography
                style={{ color: "#555555" }}
                variant="body2"
                component="p"
              >
                With an average rider rating of 4.6With an average rider rating
                of 4.6With an average rider rating of 4.6With an average rider
                rating of 4.6With an average rider rating of 4.6With an average
                rider rating of 4.6With an average rider rating of 4.6With an
                average rider rating of 4.6With an average rider rating of
                4.6With an average rider rating of 4.6With an average rider
                rating of 4.6With an average rider rating of 4.6With an average
                rider rating of 4.6With an average rider rating of 4.6With an
                average rider rating of 4.6With an average rider rating of
                4.6With an average rider rating of 4.6With an average rider
                rating of 4.6With an average rider rating of 4.6With an average
                rider rating of 4.6With an average rider rating of 4.6With an
                average rider rating of 4.6With an average rider rating of
                4.6With an average rider rating of 4.6
              </Typography>
              <Row
                style={{
                  justifyContent: "flex-end",
                  paddingTop: "12px",
                  margin: 0,
                }}
              >
                <Button
                  onClick={() => {
                    history.push("/game");
                  }}
                >
                  Play Again
                </Button>
              </Row>
            </CardContent>
          </Card>
        </Row>
        <br />
      </Container>
    </div>
  );
};

export default Result;
