import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/divein">divein</Link>
      <br />
      <Link to="/read">Read Data From DB</Link>
      <br />
      <Link to="/write">Write Data To DB</Link>
    </div>
  );
};

export default Home;
