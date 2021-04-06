import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { makeStyles } from "@material-ui/core/styles";
import StarIcon from "@material-ui/icons/Star";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { useHistory, useLocation } from "react-router-dom";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import db from "./firebase";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

import "./App.css";

const useStyles = makeStyles({
  container: {
    height: "100vh",
    padding: "3% 10% ",
  },
  root: {
    width: "100%",
  },
  board: {
    maxHeight: 450,
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
    width: "100%",
    marginTop: "24px",
  },
  scoreText: {
    fontWeight: "bold",
    paddingTop: "12px",
    color: "#555555",
  },
});

const bigFacts = [
  "Ride-sharing drivers often overlook their own health and wellness in order to keep up with new fares. In poorly regulated regions, low barriers to driver entry result in an oversupply of drivers struggling to find riders. In fact, drivers in these areas report spending half their time waiting for a fare. This coupled with the pandemic, may lead to 80+ hour work weeks [1], driving in conditions that may pose serious health and safety risks. [2]",
  "As ride-sharing services expand, it's important for governments to help enact policies that will protect worker rights and job security. In some jurisdictions, ride-sharing giants such as Uber and Lyft have already been able to successfully classify workers as independent contractors. For example, in California, Proposition 22 was passed in November 2020. This proposition denies drivers the traditional employee benefits such as paid family leave, sick pay, insurance and much more, sacrificing driver welfare to increase company profits [3].",
  "Ride-sharing services has been known to divert commuters from environmentally friendly options, such as walking, biking, or public transit [4]. An increase in greenhouse gas emissions can be seen as commuters slowly shift towards ride-sharing services for their convenience and comfort. It's been found that the average trip produces approximately 69% more emissions than the trips they were replacing [4]. Around 40% of the miles driven by rideshare vehicles don’t have passengers, which is also known as “deadheading” [5], these drivers instead are travelling between hired rides, in order to pick up or find new passengers.",
];

const secretFormula = ({ cash, rating, environment, health }) => {
  return (
    25 * (cash / 2000) +
    25 * (rating / 5) +
    25 * (environment / 100) +
    25 * (health / 100)
  );
};

const computeVal = (val, otherVal, greatest) => {
  var isMax = true;
  if (greatest) {
    for (let other of otherVal) {
      if (val <= other) {
        isMax = false;
        break;
      }
    }
  } else {
    for (let other of otherVal) {
      if (val >= other) {
        isMax = false;
        break;
      }
    }
  }
  return isMax;
};

const Result = () => {
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const data = (location && location.state && location.state.data) || null;
  const [section, setSection] = useState(0);
  const [hideBoard, setHide] = useState(true);
  const [board, setBoard] = useState("");
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

  const greatestMsg = computeVal(
    data.cash - 2200,
    [data.rating * 20, data.environment, data.health],
    true
  )
    ? `${data.cash - 2000} earned`
    : computeVal(
        data.rating * 20,
        [data.cash - 2200, data.environment, data.health],
        true
      )
    ? `${data.rating.toFixed(2)} driver rating`
    : computeVal(
        data.environment,
        [data.rating * 20, data.cash - 2200, data.health],
        true
      )
    ? `${data.environment}/100 environmental rating`
    : `${data.health}/100 health & wellness rating`;

  const leastMsg = computeVal(
    data.cash - 2200,
    [data.rating * 20, data.environment, data.health],
    false
  )
    ? `finances`
    : computeVal(
        data.rating * 20,
        [data.cash - 2200, data.environment, data.health],
        false
      )
    ? `driver rating`
    : computeVal(
        data.environment,
        [data.rating * 20, data.cash - 2200, data.health],
        false
      )
    ? `environment rating`
    : `health & wellness`;

  useEffect(() => {
    if (!data || !data.id || data.id !== "end") {
      history.push("/");
      return <></>;
    }
    addAndReadScores();
  }, []);

  const addAndReadScores = () => {
    db.collection("scores")
      .add({
        username:
          localStorage.getItem("rideshare") ||
          `guest${Math.floor(Math.random() * 100)}`,
        score: secretFormula(data).toFixed(1),
        cash: data.cash,
        rating: data.rating,
        environment: data.environment,
        health: data.health,
      })
      .then(() => {
        db.collection("scores")
          .orderBy("score", "desc")
          .get()
          .then((querySnapshot) => {
            let newBoard = [];
            querySnapshot.forEach((doc) => {
              console.log(doc.data());
              newBoard.push(doc.data());
            });
            console.log(newBoard);
            setBoard(JSON.stringify(newBoard));
          });
      })
      .catch((error) => {
        console.error("Error adding document: ", error);
      });
  };

  const columns = [
    { id: "username", label: "Username", minWidth: 170 },
    {
      id: "rating",
      label: "Rating",
      minWidth: 100,
      format: (value) => value.toFixed(1),
    },
    {
      id: "cash",
      label: "Cash",
      minWidth: 100,
      format: (value) => value.toFixed(1),
    },
    {
      id: "environment",
      label: "Environment",
      minWidth: 100,
      format: (value) => value.toFixed(1),
    },
    {
      id: "health",
      label: "Health",
      minWidth: 100,
      format: (value) => value.toFixed(1),
    },
    {
      id: "score",
      label: "Score",
      minWidth: 100,
      format: (value) => value.toFixed(1),
    },
  ];

  const Leaderboard = () => {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
      setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(+event.target.value);
      setPage(0);
    };

    return (
      <>
        {/* <Paper className={classes.root}> */}
        <TableContainer className={classes.board}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {JSON.parse(board)
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={JSON.parse(board).length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
        {/* </Paper> */}
      </>
    );
  };
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
                drive<span style={{ color: "#579fa3" }}>.ai 🚘</span>
              </h1>
            </Col>
            <Col style={{ display: "flex", justifyContent: "flex-end" }}>
              <Typography variant="h5" className={classes.scoreText}>
                Final Score:{" "}
                <span style={{ color: "#579fa3" }}>
                  {" "}
                  {secretFormula(data).toFixed(0)}
                </span>
              </Typography>
            </Col>
          </Row>
          <Card className={classes.card}>
            <CardContent>
              {!hideBoard ? (
                board !== "" && <Leaderboard />
              ) : (
                <>
                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                  >
                    Congrats on reaching the end! 🎉
                    <br />
                    <span style={{ fontWeight: "500" }}>
                      {" "}
                      Here's a breakdown of your score:
                    </span>
                  </Typography>
                  <Row style={{ margin: 0 }}>
                    <Col style={{ cursor: "pointer" }}>
                      <Row>
                        <span className={classes.caption}>
                          Average rider rating of {data.rating.toFixed(2)}
                        </span>
                      </Row>
                      <Row>
                        <span style={{ color: "gray" }}>
                          {renderStars(data.rating)}
                        </span>
                      </Row>
                      <div style={{ height: 5 }} />
                    </Col>

                    <Col style={{ cursor: "pointer" }}>
                      <Row>
                        <span className={classes.caption}>Finished with</span>
                      </Row>
                      <Row>
                        <span className={classes.statText}>
                          {" "}
                          ${data.cash} CAD
                        </span>
                      </Row>
                      <div style={{ height: 5 }} />
                    </Col>

                    <Col style={{ cursor: "pointer" }}>
                      <Row>
                        <span className={classes.caption}>
                          Environment rating
                        </span>
                      </Row>
                      <Row>
                        <span className={classes.statText}>
                          {" "}
                          {data.environment} /100
                        </span>
                      </Row>
                      <div style={{ height: 5 }} />
                    </Col>

                    <Col style={{ cursor: "pointer" }}>
                      <Row>
                        <span className={classes.caption}>Driver health</span>
                      </Row>
                      <Row>
                        <span className={classes.statText}>
                          {" "}
                          {data.health} /100
                        </span>
                      </Row>
                      <div style={{ height: 5 }} />
                    </Col>
                  </Row>
                  <div style={{ height: 15 }} />
                  <CardMedia
                    style={{
                      height: "275px",
                      margin: "0 -16px",
                      marginBottom: "16px",
                    }}
                    image="https://media0.giphy.com/media/nOeD0X0WnwxIA/giphy.gif"
                  />

                  <Typography
                    className={classes.title}
                    color="textSecondary"
                    gutterBottom
                    style={{ fontWeight: "500" }}
                  >
                    Conclusion
                  </Typography>
                  <Typography
                    style={{ color: "#555555", marginBottom: "12px" }}
                    variant="body2"
                    component="p"
                  >
                    The purpose of our game is to highlight how hard it can be
                    to prioritize self care, the environment and your finances
                    at the same time. With demanding passengers and exploitative
                    ridesharing companies, being a rideshare driver is tough.
                    While you tried your best to make the most out of your
                    driving days, with an impressive {greatestMsg}, it seems
                    that your {leastMsg} had to take a hit in return. To learn
                    more about the different environmental and social impacts
                    ridesharing has, check out the following:
                  </Typography>

                  <Tabs
                    style={{ paddingBottom: "12px", marginLeft: "-16px" }}
                    indicatorColor="primary"
                    textColor="primary"
                    value={section}
                    onChange={(event, newVal) => setSection(section)}
                    variant="scrollable"
                    scrollButtons="off"
                  >
                    <Tab label="Worker Rights" onClick={() => setSection(0)} />
                    <Tab
                      label="Driver Legislation"
                      onClick={() => setSection(1)}
                    />
                    <Tab
                      label="Environmental Impacts"
                      onClick={() => setSection(2)}
                    />
                  </Tabs>
                  <Typography
                    style={{ color: "#555555" }}
                    variant="body2"
                    component="p"
                  >
                    {bigFacts[section]}
                    <Button
                      color="primary"
                      style={{ margin: "-6px", marginLeft: "6px" }}
                      onClick={() => {
                        window.open(
                          "https://www.notion.so/References-a14e4ac37b8f4bab9b039b2c27b5d331",
                          "_blank"
                        );
                      }}
                    >
                      References
                    </Button>
                  </Typography>
                </>
              )}
              <Row
                style={{
                  justifyContent: "flex-end",
                  paddingTop: "12px",
                  margin: 0,
                }}
              >
                <Button
                  onClick={() => {
                    window.open(
                      "https://forms.gle/tfqkqU8z5jzQeTqN8",
                      "_blank"
                    );
                  }}
                >
                  Take our Survey
                </Button>

                <Button
                  onClick={() => {
                    setHide(!hideBoard);
                  }}
                >
                  {hideBoard ? "View Leaderboard" : "Hide Leaderboard"}
                </Button>

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
        {/* {board !== "" && <Leaderboard />} */}
        <br />
      </Container>
    </div>
  );
};

export default Result;
