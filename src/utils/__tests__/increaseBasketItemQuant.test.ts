import { describe, it } from "@jest/globals";
import increaseBasketItemQuant from "../componentsFunctions/increaseBasketItemQuant";
import { mockBasketData } from "../utilsForTests/mockBasketData";
describe("test function increaseBasketItemQuant", () => {
  it("item increases in quantity", () => {
    expect(
      increaseBasketItemQuant("item_1", mockBasketData).basketData
    ).toEqual([
      { id: "item_1", quantity: 5 },
      { id: "item_2", quantity: 5 },
      { id: "item_3", quantity: 1 },
    ]);
    expect(
      increaseBasketItemQuant("item_1", mockBasketData).basketData
    ).not.toEqual([
      { id: "item_1", quantity: 4 },
      { id: "item_2", quantity: 5 },
      { id: "item_3", quantity: 1 },
    ]);
  });
});
