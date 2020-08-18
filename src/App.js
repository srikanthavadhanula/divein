import React from "react";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./tasks/Home";
import divein from "./tasks/divein";
import read from "./tasks/read";
import write from "./tasks/write";
import learning from "./tasks/learning";
import articles from "./tasks/articles";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/divein" exact component={divein} />
        <Route path="/read" exact component={read} />
        <Route path="/write" exact component={write} />
        <Route path="/articles" exact component={articles} />
        <Route path="/learning" exact component={learning} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
