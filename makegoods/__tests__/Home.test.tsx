import { render, screen } from "@testing-library/react";
import Home from "@/app/page";

describe("Home", () => {
  it("should have h1 text", () => {
    render(<Home />);

    const myElem = screen.getByText("굿즈");

    expect(myElem).toBeInTheDocument();
  });
});
