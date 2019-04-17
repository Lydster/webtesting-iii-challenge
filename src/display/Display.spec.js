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
});
