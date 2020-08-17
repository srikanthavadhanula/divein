import React from "react";

const Greet = (props) => {
  return (
    <div>
      <h1>Welcome {props.name}</h1>
      <p>{props.children}</p>
    </div>
  );
};

export default Greet;
