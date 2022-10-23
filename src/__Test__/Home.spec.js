import { render, screen } from "@testing-library/react";
import Home from "../app/layout/Home";
import "@testing-library/jest-dom";
import { describe, expect, it } from "@jest/globals";
import { BrowserRouter } from "react-router-dom";

describe("Home", () => {
  it("should render the Home page", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    const cta = screen.getByText("Hello there!");
    expect(cta).toBeInTheDocument();
  });
});
