import { describe, it } from "@jest/globals";
import renderer from "react-test-renderer";
import ContextProvider from "../../../ContextProvider";
import BasketList from "../BasketList";

describe("testing BasketList component", () => {
  it("BasketList Renders Correctly", () => {
    const basketList = renderer
      .create(
        <ContextProvider>
          <BasketList />
        </ContextProvider>
      )
      .toJSON();
    expect(basketList).toMatchSnapshot();
  });
});
