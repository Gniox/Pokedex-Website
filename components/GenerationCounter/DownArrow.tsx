import React from "react";
import downArrow from "../../public/down-Arrow.svg";
import * as s from "../../styles/button.styled";

const DownArrow = () => {
  return (
    <s.Button>
      <img src={downArrow} alt="Down Arrow" />
    </s.Button>
  );
};

export default DownArrow;
