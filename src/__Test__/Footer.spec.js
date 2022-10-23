import { render, screen } from "@testing-library/react";
import Footer from "../app/layout/Footer";
import "@testing-library/jest-dom";
import { describe, expect, it } from "@jest/globals";
import { BrowserRouter } from "react-router-dom";

describe("Footer", () => {
  it("should render the Footer", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const message = screen.getByText("Terms");
    expect(message).toBeInTheDocument();
  });
});
