import React from "react";
import upArrow from "../../public/up-arrow.svg";
import * as s from "../../styles/button.styled";

const UpArrow = () => {
  return (
    <s.Button>
      <img src={upArrow} alt="Up Arrow" />
    </s.Button>
  );
};

export default UpArrow;
