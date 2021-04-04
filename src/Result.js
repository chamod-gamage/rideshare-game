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

const TabToSection = ["rating", "cash", "environment", "health"];

const Result = () => {
  const location = useLocation();
  const history = useHistory();
  const classes = useStyles();
  const data = (location && location.state && location.state.data) || null;
  const [section, setSection] = useState("rating");
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
        score: Math.floor(Math.random() * 100),
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
                Final Score: <span style={{ color: "#579fa3" }}> 96</span>
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
                    Here's a breakdown of your score:
                  </Typography>

                  <Tabs
                    value={TabToSection.indexOf(section)}
                    onChange={(event, newVal) =>
                      setSection(TabToSection[newVal])
                    }
                    variant="scrollable"
                    scrollButtons="off"
                  >
                    <Tab
                      component={() => (
                        <Col
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setSection(TabToSection[0]);
                          }}
                        >
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
                          <div style={{ height: 5 }} />
                        </Col>
                      )}
                    />
                    <Tab
                      component={() => (
                        <Col
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setSection(TabToSection[1]);
                          }}
                        >
                          <Row>
                            <span className={classes.caption}>
                              Finished with
                            </span>
                          </Row>
                          <Row>
                            <span className={classes.statText}>
                              {" "}
                              {data.cash} CAD
                            </span>
                          </Row>
                          <div style={{ height: 5 }} />
                        </Col>
                      )}
                    />
                    <Tab
                      component={() => (
                        <Col
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setSection(TabToSection[2]);
                          }}
                        >
                          <Row>
                            <span className={classes.caption}>
                              Environment rating
                            </span>
                          </Row>
                          <Row>
                            <span className={classes.statText}>
                              {" "}
                              {data.environment}
                            </span>
                          </Row>
                          <div style={{ height: 5 }} />
                        </Col>
                      )}
                    />
                    <Tab
                      component={() => (
                        <Col
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            setSection(TabToSection[3]);
                          }}
                        >
                          <Row>
                            <span className={classes.caption}>
                              Driver health
                            </span>
                          </Row>
                          <Row>
                            <span className={classes.statText}>
                              {" "}
                              {data.health} /100
                            </span>
                          </Row>
                          <div style={{ height: 5 }} />
                        </Col>
                      )}
                    />
                  </Tabs>
                  <div style={{ height: 15 }} />
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
                    With an average rider rating of 4.6With an average rider
                    rating of 4.6With an average rider rating of 4.6With an
                    average rider rating of 4.6With an average rider rating of
                    4.6With an average rider rating of 4.6With an average rider
                    rating of 4.6With an average rider rating of 4.6With an
                    average rider rating of 4.6With an average rider rating of
                    4.6With an average rider rating of 4.6With an average rider
                    rating of 4.6With an average rider rating of 4.6With an
                    average rider rating of 4.6With an average rider rating of
                    4.6With an average rider rating of 4.6With an average rider
                    rating of 4.6With an average rider rating of 4.6With an
                    average rider rating of 4.6With an average rider rating of
                    4.6With an average rider rating of 4.6With an average rider
                    rating of 4.6With an average rider rating of 4.6With an
                    average rider rating of 4.6
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
