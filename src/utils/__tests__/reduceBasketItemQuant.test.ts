import { describe, it } from "@jest/globals";
import reduceBasketItemQuant from "../componentsFunctions/reduceBasketItemQuant";
import { mockBasketData } from "../utilsForTests/mockBasketData";
describe("test function reduceBasketItemQuant", () => {
  it("item decreases in quantity", () => {
    expect(reduceBasketItemQuant("item_1", mockBasketData).basketData).toEqual([
      { id: "item_1", quantity: 3 },
      { id: "item_2", quantity: 5 },
      { id: "item_3", quantity: 1 },
    ]);
  });
  it("item delete from list", () => {
    expect(reduceBasketItemQuant("item_3", mockBasketData).basketData).toEqual([
      { id: "item_1", quantity: 3 },
      { id: "item_2", quantity: 5 },
    ]);
  });
});
