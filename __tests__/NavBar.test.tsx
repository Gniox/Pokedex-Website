import React from "react";
import NavBar from "../components/NavBar/NavBar";
import { render, screen, act, within, fireEvent } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";

require("jest-fetch-mock").enableMocks();

describe("NavBar", () =>{
  beforeEach(() => {
    fetchMock.resetMocks();
  })

  it("Displays 6 Pokemon Species Numbers", async () => {
  })
})