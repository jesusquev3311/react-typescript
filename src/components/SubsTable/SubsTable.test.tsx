import { render, screen } from "@testing-library/react";
import { Sub } from "../../types.d";

import List from "./SubsTable";

describe("List", () => {
  test("renders List", () => {
    const SUBS = [
      {
        nick: "nick",
        avatar: "avatar",
        subMonths: 1,
        description: "description",
        role: "vip",
      },
    ];

    render(<List subs={SUBS as Sub[]} />);
    const listElement = screen.getAllByTestId("subs-list");

    expect(listElement).not.toBeNull();
  });
});
