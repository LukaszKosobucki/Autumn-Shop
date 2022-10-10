import { describe, it } from "@jest/globals";
import BasketList from "../BasketList";
import renderer from "react-test-renderer";

describe("testing <BasketList/> render", () => {
  it("BasketList Renders Correctly", () => {
    const basketList = renderer.create(<BasketList />).toJSON();
    expect(basketList).toMatchSnapshot();
  });
});
