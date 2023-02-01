import React from "react";
import Card from "../index";
import { userMock } from "../../../__mocks__/userMock";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Card", () => {
  it("should match snapshot", () => {
    const component = renderer.create(<Card user={userMock[0]} />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("should find the email address of user", () => {
    const { getByText } = render(<Card user={userMock[0]} />);
    const link = getByText("Carol_Zboncak@Trycia.co.uk");
    expect(link).toHaveAttribute("href", "Carol_Zboncak@Trycia.co.uk");
  });
});
