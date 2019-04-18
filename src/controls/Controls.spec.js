import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Controls from "./Controls";
import Display from "../display/Display";

describe("<Controls/>", () => {
  const display = render(<Display />);
  const control = render(<Controls />);
  it("matches control snapshot", () => {
    const controlTree = renderer.create(<Controls />);
    expect(controlTree.toJSON()).toMatchSnapshot();
  });
  it("check to see if text changes on click", () => {
    const { getByTitle } = render(<Controls />);
    const lockbutton = getByTitle(/lockButton/i);
    expect(lockbutton).toHaveTextContent(/Lock Gate/i);
    fireEvent.click(lockbutton);
    expect(lockbutton).toHaveTextContent(/Lock Gate/i);
  });

  it("if closed and locked cannot be opened", () => {
    const { getByTitle } = render(<Controls />);
    const closedButton = getByTitle(/gateButton/i);
    expect(closedButton).toHaveTextContent(/Close gate/i);
    fireEvent.click(closedButton);
    expect(closedButton).toHaveTextContent(/Close gate/i);
  });
});
