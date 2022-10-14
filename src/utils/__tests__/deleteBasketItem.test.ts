import { describe, it } from "@jest/globals";
import deleteBasketItem from "../componentsFunctions/deleteBasketItem";
import { mockBasketData } from "../utilsForTests/mockBasketData";
describe("test function deleteBasketItem", () => {
  it("item deletes from basketData", () => {
    expect(deleteBasketItem("item_1", mockBasketData).basketData).toEqual([
      { id: "item_2", quantity: 5 },
      { id: "item_3", quantity: 1 },
    ]);
    expect(deleteBasketItem("item1", mockBasketData).isOpen).toEqual(true);
  });

  it("ensure that item was deleted and it is no longer present", () => {
    expect(deleteBasketItem("item_1", mockBasketData).basketData).not.toEqual([
      { id: "item_1", quantity: 4 },
      { id: "item_2", quantity: 5 },
      { id: "item_3", quantity: 1 },
    ]);
    expect(deleteBasketItem("item1", mockBasketData).isOpen).not.toEqual(false);
  });
});
