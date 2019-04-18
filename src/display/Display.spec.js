// Test away!
import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Display from "./Display";

describe("<Display/>", () => {
  it("matches snapshot", () => {
    const DispTree = renderer.create(<Display />);
    expect(DispTree.toJSON).toMatchSnapshot();
  });

  it("defaults to unlocked and open", () => {
    const { getByText } = render(<Display />);
    expect(getByText(/Unlocked/i)).toBeTruthy();
    expect(getByText(/Open/i)).toBeTruthy();
  });

  it("displays closed is closed prop is true", () => {
    const { getByText } = render(<Display />);
    const closed = getByText(/locked/i);
    expect(closed).toBeTruthy();
  });
});
