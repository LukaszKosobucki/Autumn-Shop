import { describe, it } from "@jest/globals";
import addItemToBasket from "../componentsFunctions/addItemToBasket";
import { mockBasketData } from "../utilsForTests/mockBasketData";
describe("test function addItemToBasket", () => {
  it("item push to the basketData", () => {
    expect(addItemToBasket("item4", mockBasketData)).toEqual({
      basketData: [
        { id: "item1", quantity: 4 },
        { id: "item2", quantity: 5 },
        { id: "item3", quantity: 1 },
        { id: "item4", quantity: 1 },
      ],
      isOpen: true,
    });
  });

  it("item increment in quantity", () => {
    expect(addItemToBasket("item1", mockBasketData)).toEqual({
      basketData: [
        { id: "item1", quantity: 5 },
        { id: "item2", quantity: 5 },
        { id: "item3", quantity: 1 },
        { id: "item4", quantity: 1 },
      ],
      isOpen: true,
    });
  });
});
