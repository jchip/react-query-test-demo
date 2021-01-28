import React from "react";
import { render, waitFor, screen } from "@testing-library/react";
import { App } from "./app";

it("renders data", async () => {
  render(<App />);

  const element = await waitFor(() => screen.getByText("hello, world"), {
    timeout: 500
  });

  expect(element.innerHTML).toContain(`<p>test</p>`);
});
