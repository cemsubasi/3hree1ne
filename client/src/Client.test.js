import { render, screen } from "@testing-library/react";
import Client from "./Client";

test("renders learn react link", () => {
  render(<Client />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
