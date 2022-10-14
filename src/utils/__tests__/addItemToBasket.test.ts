import { describe, it } from "@jest/globals";
import addItemToBasket from "../componentsFunctions/addItemToBasket";
import { mockBasketData } from "../utilsForTests/mockBasketData";
describe("test function addItemToBasket", () => {
  it("item push to the basketData", () => {
    expect(addItemToBasket("item_4", mockBasketData)).toEqual({
      basketData: [
        { id: "item_1", quantity: 4 },
        { id: "item_2", quantity: 5 },
        { id: "item_3", quantity: 1 },
        { id: "item_4", quantity: 1 },
      ],
      isOpen: true,
    });
  });

  it("item increment in quantity", () => {
    expect(addItemToBasket("item_1", mockBasketData)).toEqual({
      basketData: [
        { id: "item_1", quantity: 5 },
        { id: "item_2", quantity: 5 },
        { id: "item_3", quantity: 1 },
        { id: "item_4", quantity: 1 },
      ],
      isOpen: true,
    });
  });
});
