import { describe, it } from "@jest/globals";
import reduceBasketItemQuant from "../reduceBasketItemQuant";

describe("test function reduceBasketItemQuant", () => {
  const mockData = [
    { id: "item1", quantity: 4 },
    { id: "item2", quantity: 5 },
    { id: "item3", quantity: 1 },
  ];
  it("item decreases in quantity", () => {
    expect(reduceBasketItemQuant("item1", mockData).setbasketdata).toEqual([
      { id: "item1", quantity: 3 },
      { id: "item2", quantity: 5 },
      { id: "item3", quantity: 1 },
    ]);
  });
  it("item delete from list", () => {
    expect(reduceBasketItemQuant("item3", mockData).setbasketdata).toEqual([
      { id: "item1", quantity: 3 },
      { id: "item2", quantity: 5 },
    ]);
  });
});
