import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Dashboard from "./Dashboard";

describe("<Dashboard/>", () => {
  it("matches dash snapshot", () => {
    const dashTree = renderer.create(<Dashboard />);
    expect(dashTree.toJSON()).toMatchSnapshot();
  });
});
