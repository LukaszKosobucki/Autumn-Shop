import { describe, it } from "@jest/globals";
import reduceBasketItemQuant from "../componentsFunctions/reduceBasketItemQuant";
import { mockBasketData } from "../utilsForTests/mockBasketData";
describe("test function reduceBasketItemQuant", () => {
  it("item decreases in quantity", () => {
    expect(reduceBasketItemQuant("item1", mockBasketData).basketData).toEqual([
      { id: "item1", quantity: 3 },
      { id: "item2", quantity: 5 },
      { id: "item3", quantity: 1 },
    ]);
  });
  it("item delete from list", () => {
    expect(reduceBasketItemQuant("item3", mockBasketData).basketData).toEqual([
      { id: "item1", quantity: 3 },
      { id: "item2", quantity: 5 },
    ]);
  });
});
