import { render, screen } from "@testing-library/react";
import Contact from "../app/layout/Contact";
import "@testing-library/jest-dom";
import { describe, expect, it } from "@jest/globals";
import { BrowserRouter } from "react-router-dom";

describe("Contact", () => {
  it("should render the Contact page", () => {
    render(
      <BrowserRouter>
        <Contact />
      </BrowserRouter>
    );

    const cta = screen.getByText("Contact me");
    expect(cta).toBeInTheDocument();
  });
});
