import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @font-face {
    font-family: Roboto-Bold;
    src: url(https://fonts.gstatic.com/s/roboto/v27/KFOlCnqEu92Fr1MmWUlfBBc4AMP6lQ.woff2);
  }

  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: Roboto-Bold;
  }


`;
