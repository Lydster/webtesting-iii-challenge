import React from "react";
import renderer from "react-test-renderer";
import { render, fireEvent } from "react-testing-library";
import "jest-dom/extend-expect";
import Controls from "./Controls";

describe("<Controls/>", () => {
  it("matches control snapshot", () => {
    const controlTree = renderer.create(<Controls />);
    expect(controlTree.toJSON()).toMatchSnapshot();
  });
});
