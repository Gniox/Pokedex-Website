import React from "react";
import { rest } from "msw";
import { setupServer } from "msw/node";
import GenerationCounter from "../components/GenerationCounter";
import { render, screen, act } from "@testing-library/react";
import fetchMock from "jest-fetch-mock";
import '@testing-library/jest-dom/extend-expect';

require("jest-fetch-mock").enableMocks();

const server = setupServer(
  rest.get("https://https://pokeapi.co/api/v2/generation", (req, res, ctx) => {
    return res(
      ctx.json({
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
  })
);

describe("GenerationCounter", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it("Displays Pokemon generations", async () => {
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

    act(() => {
      render(<GenerationCounter />);
    });

    const expected = "generation-i";
    const list = await screen.findByText("generation-i");

    expect(list.textContent).toBe(expected);
  });
});
