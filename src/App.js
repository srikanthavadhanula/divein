import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./tasks/Home";
import divein from "./tasks/divein";
import read from "./tasks/read";
import write from "./tasks/write";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/divein" exact component={divein} />
        <Route path="/read" exact component={read} />
        <Route path="/write" exact component={write} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
