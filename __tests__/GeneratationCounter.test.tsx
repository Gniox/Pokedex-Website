import React from "react";
import GenerationCounter from "../components/GenerationCounter/GenerationCounter";
import { render, screen, act, within, fireEvent } from "@testing-library/react";
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

//  Make sure to mock AP call...
describe("Down Arrow", () => {
  it("moves generations count down 3", async () => {
    const generation = [
      "generation-i",
      "generation-ii",
      "generation-iii",
      "generation-iv",
      "generation-v",
      "generation-vi",
      "generation-vii",
      "generation-viii",
    ];

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

    const downButton = screen.getByRole("button", {
      name: "down",
    });
    const list = screen.getByRole("list");
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");

    items.forEach((element, index) =>
      expect(element.textContent).toBe(generation[index])
    );

    fireEvent.click(downButton);

    const newItems = getAllByRole("listitem");

    newItems.forEach((element, index) => {
      expect(element.textContent).toBe(generation[index + 3]);
    });
  });
  it("After 3+ presses, it will remain in generation constraints", async () => {
    const generation = [
      "generation-i",
      "generation-ii",
      "generation-iii",
      "generation-iv",
      "generation-v",
      "generation-vi",
      "generation-vii",
      "generation-viii",
    ];

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

    const downButton = screen.getByRole("button", {
      name: "down",
    });
    const list = screen.getByRole("list");
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");

    items.forEach((element, index) =>
      expect(element.textContent).toBe(generation[index])
    );

    for (let i = 0; i < 5; i++) {
      fireEvent.click(downButton);
    }

    const newItems = getAllByRole("listitem");

    newItems.forEach((element, index) => {
      expect(element.textContent).toBe(generation[index + 6]);
    });
  });

  describe("Up Arrow", () => {
    it("moves generations count up 3", async () => {
      const generation = [
        "generation-i",
        "generation-ii",
        "generation-iii",
        "generation-iv",
        "generation-v",
        "generation-vi",
        "generation-vii",
        "generation-viii",
      ];

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

      const downButton = screen.getByRole("button", {
        name: "down",
      });
      const upButton = screen.getByRole("button", {
        name: "up",
      });
      const list = screen.getByRole("list");
      const { getAllByRole } = within(list);
      const items = getAllByRole("listitem");

      items.forEach((element, index) =>
        expect(element.textContent).toBe(generation[index])
      );

      fireEvent.click(downButton);
      fireEvent.click(upButton);

      const newItems = getAllByRole("listitem");

      newItems.forEach((element, index) => {
        expect(element.textContent).toBe(generation[index]);
      });
    });
  });
  it("Stays within constraints of generation list", async () => {
    const generation = [
      "generation-i",
      "generation-ii",
      "generation-iii",
      "generation-iv",
      "generation-v",
      "generation-vi",
      "generation-vii",
      "generation-viii",
    ];

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

    const downButton = screen.getByRole("button", {
      name: "down",
    });
    const upButton = screen.getByRole("button", {
      name: "up",
    });
    const list = screen.getByRole("list");
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");

    items.forEach((element, index) =>
      expect(element.textContent).toBe(generation[index])
    );

    fireEvent.click(upButton);

    const newItems = getAllByRole("listitem");

    newItems.forEach((element, index) => {
      expect(element.textContent).toBe(generation[index]);
    });
  });
});
