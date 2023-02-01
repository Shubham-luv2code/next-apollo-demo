import React from "react";
import Header from "../index";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";

describe("Header", () => {
  it("should match snapshot", () => {
    const component = renderer.create(<Header text={"This is Header"} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should have header class", () => {
    const { getByText } = render(<Header text={"This is Header"} />);
    const headerName = getByText("This is Header");
    expect(headerName).toHaveClass("header");
  });
});
