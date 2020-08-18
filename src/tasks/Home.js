import React from "react";
import { Link } from "react-router-dom";
import countapi from "countapi-js";

const Home = () => {
  countapi.visits().then((result) => {
    console.log("Count : " + result.value);
  });

  return (
    <div>
      <h1>Home</h1>
      <Link to="/divein">divein</Link>
      <br />
      <Link to="/read">Read Data From DB</Link>
      <br />
      <Link to="/write">Write Data To DB</Link>
      <br />
      <Link to="/articles">Articles</Link>
      <br />
      <Link to="/learning">Learning</Link>
    </div>
  );
};

export default Home;
