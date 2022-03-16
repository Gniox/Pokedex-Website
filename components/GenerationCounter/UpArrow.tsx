import React from "react";
import * as s from "../../styles/button.styled";
import styled from "styled-components";

const UpButton = styled(s.Button).attrs({
  "aria-label": "up",
})``;

//TODO: find way to keep svg from disappearing on rerender
const UpArrow: React.FC<{
  onClick?: React.MouseEventHandler<HTMLElement>;
}> = ({ onClick }) => {
  return (
    <UpButton onClick={onClick}>
      <svg
        version="1.1"
        id="Layer_1"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 330.002 330.002"
      >
        <path
          id="XMLID_105_"
          d="M324.001,209.25L173.997,96.75c-5.334-4-12.667-4-18,0L6.001,209.25c-6.627,4.971-7.971,14.373-3,21
	c2.947,3.93,7.451,6.001,12.012,6.001c3.131,0,6.29-0.978,8.988-3.001L164.998,127.5l141.003,105.75c6.629,4.972,16.03,3.627,21-3
	C331.972,223.623,330.628,214.221,324.001,209.25z"
        />
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
        <g></g>
      </svg>
    </UpButton>
  );
};

export default UpArrow;
