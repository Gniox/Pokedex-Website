import React from "react";
import GenerationCounter from "../components/GenerationCounter";
import {render, screen } from '@testing-library/react';

/**
 * @jest-environmnet jsdom
 */

describe('GenerationCounter', () => {
    it('Displays Pokemon generations', () => {
        render(<GenerationCounter />);

        const generation = screen.getByRole('listitem');
        const expected = 'generation-i'

        expect(generation.textContent).toBe(expected);
    })
})