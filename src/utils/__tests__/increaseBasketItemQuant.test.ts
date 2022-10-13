import { describe, it } from "@jest/globals";
import increaseBasketItemQuant from "../increaseBasketItemQuant";
import { mockBasketData } from "../utilsForTests/mockBasketData";
describe("test function increaseBasketItemQuant", () => {
  it("item increases in quantity", () => {
    expect(increaseBasketItemQuant("item1", mockBasketData).basketData).toEqual(
      [
        { id: "item1", quantity: 5 },
        { id: "item2", quantity: 5 },
        { id: "item3", quantity: 1 },
      ]
    );
    expect(
      increaseBasketItemQuant("item1", mockBasketData).basketData
    ).not.toEqual([
      { id: "item1", quantity: 4 },
      { id: "item2", quantity: 5 },
      { id: "item3", quantity: 1 },
    ]);
  });
});
