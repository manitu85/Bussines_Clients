import React from "react";
import spinner from "./spinner.gif";

export default () => {
  const style = {
    width: "200px",
    margin: "auto",
    display: "block"
  };

  return (
    <div>
      <img src={spinner} alt="Loading..." style={style} />
    </div>
  );
};
