import { describe, it } from "@jest/globals";
import renderer from "react-test-renderer";
import BasketItem from "../BasketItem";

describe("testing BasketItem component", () => {
  it("BasketItem Renders Correctly", () => {
    const basketItem = renderer
      .create(
        <BasketItem
          item={{
            name: "item 1",
            price: 20,
            category: "category_1",
            id: "1",
            quantity: 2,
          }}
          reduceBasketItemQuant={() => {}}
          increaseBasketItemQuant={() => {}}
          deleteBasketItem={() => {}}
        />
      )
      .toJSON();
    expect(basketItem).toMatchSnapshot();
  });
});
