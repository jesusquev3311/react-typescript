import { render, screen } from "@testing-library/react";
import List from "./List";

describe("List", () => {
  test("renders List", () => {
    const SUBS = [
      {
        nick: "nick",
        avatar: "avatar",
        subMonths: 1,
        description: "description",
      },
    ];

    render(<List subs={SUBS} />);
    const listElement = screen.getAllByTestId("subs-list");

    expect(listElement).not.toBeNull();
  });
});
