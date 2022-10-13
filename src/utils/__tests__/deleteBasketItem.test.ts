import { describe, it } from "@jest/globals";
import deleteBasketItem from "../deleteBasketItem";

describe("test function deleteBasketItem", () => {
  const mockData = [
    { id: "item1", quantity: 4 },
    { id: "item2", quantity: 5 },
    { id: "item3", quantity: 1 },
  ];
  it("item deletes from basketData", () => {
    expect(deleteBasketItem("item1", mockData).setbasketdata).toEqual([
      { id: "item2", quantity: 5 },
      { id: "item3", quantity: 1 },
    ]);
    expect(deleteBasketItem("item1", mockData).setopen).toEqual(true);
  });

  it("item not deletes from basketData", () => {
    expect(deleteBasketItem("item1", mockData).setbasketdata).not.toEqual([
      { id: "item1", quantity: 4 },
      { id: "item2", quantity: 5 },
      { id: "item3", quantity: 1 },
    ]);
    expect(deleteBasketItem("item1", mockData).setopen).not.toEqual(false);
  });
});
