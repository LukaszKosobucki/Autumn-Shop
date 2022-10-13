import { describe, it } from "@jest/globals";
import deleteBasketItem from "../deleteBasketItem";
import { mockBasketData } from "../utilsForTests/mockBasketData";
describe("test function deleteBasketItem", () => {
  it("item deletes from basketData", () => {
    expect(deleteBasketItem("item1", mockBasketData).basketData).toEqual([
      { id: "item2", quantity: 5 },
      { id: "item3", quantity: 1 },
    ]);
    expect(deleteBasketItem("item1", mockBasketData).isOpen).toEqual(true);
  });

  it("ensure that item was deleted and it is no longer present", () => {
    expect(deleteBasketItem("item1", mockBasketData).basketData).not.toEqual([
      { id: "item1", quantity: 4 },
      { id: "item2", quantity: 5 },
      { id: "item3", quantity: 1 },
    ]);
    expect(deleteBasketItem("item1", mockBasketData).isOpen).not.toEqual(false);
  });
});
