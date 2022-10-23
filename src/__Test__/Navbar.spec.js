import { render, screen } from "@testing-library/react";
import Navbar from "../app/layout/Navbar";
import "@testing-library/jest-dom";
import { describe, expect, it } from "@jest/globals";
import { BrowserRouter } from "react-router-dom";

describe("Navbar", () => {
  it("should render the Navbar", () => {
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    );

    const cta = screen.getByText("Cecil");
    expect(cta).toBeInTheDocument();
  });
});
