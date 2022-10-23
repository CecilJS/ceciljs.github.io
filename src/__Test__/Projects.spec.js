import { render, screen } from "@testing-library/react";
import Projects from "../app/layout/Projects";
import "@testing-library/jest-dom";
import { describe, expect, it } from "@jest/globals";
import { BrowserRouter } from "react-router-dom";

describe("Projects", () => {
  it("should render the Projects page", () => {
    render(
      <BrowserRouter>
        <Projects />
      </BrowserRouter>
    );

    const cta = screen.getByText("My projects");
    expect(cta).toBeInTheDocument();
  });
});
