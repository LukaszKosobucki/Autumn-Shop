import deleteBasketItem from "../componentsFunctions/deleteBasketItem";
import { mockBasketData } from "../utilsForTests/mockBasketData";
describe("test function deleteBasketItem", () => {
  it("item deletes from basketData", () => {
    const placeholder = deleteBasketItem("item_1", mockBasketData);
    expect(placeholder.basketData).toEqual([
      { id: "item_2", quantity: 5 },
      { id: "item_3", quantity: 1 },
    ]);
    expect(placeholder.isOpen).toEqual(true);
  });

  it("ensure that item was deleted and it is no longer present", () => {
    const placeholder = deleteBasketItem("item_2", mockBasketData);

    expect(placeholder.basketData).not.toEqual([
      { id: "item_2", quantity: 5 },
      { id: "item_3", quantity: 1 },
    ]);
    expect(placeholder.isOpen).not.toEqual(false);
  });
  it("item is not existed", () => {
    const placeholder = deleteBasketItem("item_5", mockBasketData);
    expect(placeholder.basketData).toEqual(mockBasketData);
    expect(placeholder.isOpen).toEqual(false);
  });
});
