import React from "react";
import Button from "../index";
import renderer from "react-test-renderer";
import { render } from "@testing-library/react";

describe("Button", () => {
  const handleClickSpy = jest.fn();
  it("should match snapshot", () => {
    const component = renderer.create(
      <Button text={"Load More"} handleClick={handleClickSpy} />
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should be disabled", () => {
    const ref = {
      current: {
        scrollIntoView: jest.fn(),
      },
    };
    const { getByText } = render(
      <Button text={"Load More"} handleClick={handleClickSpy} hasMore={false} />
    );
    const button = getByText("Load More");
    expect(button.getAttribute("disabled")).toBeTruthy();
    expect(handleClickSpy).not.toBeCalled();
  });
});
