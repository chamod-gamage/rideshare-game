import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import Game from "./Game";
import Result from "./Result";

const mainTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#579FA3",
    },
  },
});

export default function App() {
  return (
    <ThemeProvider theme={mainTheme}>
      <Router>
        <div>
          <Switch>
            <Route path="/game">
              <Game />
            </Route>
            <Route path="/result">
              <Result />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
    </ThemeProvider>
  );
}
