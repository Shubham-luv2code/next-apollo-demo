import React from "react";
import Grid from "../index";
import { userMock } from "../../../__mocks__/userMock";
import renderer from "react-test-renderer";

describe("Grid", () => {
  it("should match snapshot", () => {
    const component = renderer.create(<Grid data={userMock} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
