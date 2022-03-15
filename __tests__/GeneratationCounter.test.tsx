import React from "react";
// import { rest } from "msw";
// import { setupServer } from "msw/node";
import GenerationCounter from "../components/GenerationCounter/GenerationCounter";
import { render, screen, act, within } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";

require("jest-fetch-mock").enableMocks();

describe("GenerationCounter", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("Displays 3 Pokemon generations", async () => {
    fetchMock.mockResponseOnce(
      JSON.stringify({
        count: 8,
        next: null,
        previous: null,
        results: [
          {
            name: "generation-i",
            url: "https://pokeapi.co/api/v2/generation/1/",
          },
          {
            name: "generation-ii",
            url: "https://pokeapi.co/api/v2/generation/2/",
          },
          {
            name: "generation-iii",
            url: "https://pokeapi.co/api/v2/generation/3/",
          },
          {
            name: "generation-iv",
            url: "https://pokeapi.co/api/v2/generation/4/",
          },
          {
            name: "generation-v",
            url: "https://pokeapi.co/api/v2/generation/5/",
          },
          {
            name: "generation-vi",
            url: "https://pokeapi.co/api/v2/generation/6/",
          },
          {
            name: "generation-vii",
            url: "https://pokeapi.co/api/v2/generation/7/",
          },
          {
            name: "generation-viii",
            url: "https://pokeapi.co/api/v2/generation/8/",
          },
        ],
      })
    );
    await act(async () => {
      render(<GenerationCounter />);
    });

    const list = screen.getByRole("list");
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");

    expect(items.length).toBe(3);
  });
  
});

describe("Down Arrow", () => {
  it("moves generations count down 3", async () => {

    await act(async () => {
      render(<GenerationCounter />);
    });

    const downButton = screen.getByRole('');
  })
})