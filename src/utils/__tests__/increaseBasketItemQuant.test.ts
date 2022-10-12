import { describe, it } from "@jest/globals";
import increaseBasketItemQuant from "../increaseBasketItemQuant";

describe("test function increaseBasketItemQuant", () => {
  it("item increases in quantity", () => {
    const mockData = [
      { id: "item1", quantity: 4 },
      { id: "item2", quantity: 5 },
      { id: "item3", quantity: 1 },
    ];
    expect(increaseBasketItemQuant("item1", mockData).setbasketdata).toEqual([
      { id: "item1", quantity: 5 },
      { id: "item2", quantity: 5 },
      { id: "item3", quantity: 1 },
    ]);
    expect(
      increaseBasketItemQuant("item1", mockData).setbasketdata
    ).not.toEqual([
      { id: "item1", quantity: 4 },
      { id: "item2", quantity: 5 },
      { id: "item3", quantity: 1 },
    ]);
  });
});
