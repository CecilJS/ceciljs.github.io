import { render, screen } from "@testing-library/react";
import About from "../app/layout/About";
import "@testing-library/jest-dom";
import { describe, expect, it } from "@jest/globals";
import { BrowserRouter } from "react-router-dom";

describe("About", () => {
  it("should render the About page", () => {
    render(
      <BrowserRouter>
        <About />
      </BrowserRouter>
    );

    const cta = screen.getByText("About me");
    expect(cta).toBeInTheDocument();
  });
});
