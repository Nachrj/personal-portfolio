import React from "react";

import "../style/Button.css";

const Button = props => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button type={props.type}>
      <span>{props.text}</span>
    </button>
  );
};

export default Button;
