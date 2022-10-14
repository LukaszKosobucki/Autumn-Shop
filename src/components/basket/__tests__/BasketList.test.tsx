import { describe, it } from "@jest/globals";
import renderer from "react-test-renderer";
import { dataContext } from "../../../ContextProvider";
import { mockContext } from "../../../utils/utilsForTests/mockContext";
import BasketList from "../BasketList";

describe("testing BasketList component", () => {
  it("BasketList Renders Correctly", () => {
    const basketList = renderer
      .create(
        <dataContext.Provider value={mockContext}>
          <BasketList />
        </dataContext.Provider>
      )
      .toJSON();
    expect(basketList).toMatchSnapshot();
  });
});