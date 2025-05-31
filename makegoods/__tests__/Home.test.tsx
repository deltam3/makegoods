import { render, screen } from "@testing-library/react";
import Home from "../src/app/page";

describe("Home page", () => {
  it("should have Home page text", () => {
    // render(<Home />);
    // screen.getByText("굿즈");
    const { container } = render(<Home />);
    expect(screen.getByText("굿즈").toBeInTheDocument());
    // screen.getByText("굿즈");
  });
});
// });
