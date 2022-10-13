import { describe, it } from "@jest/globals";
import { basketProcessedType } from "../../types/basketProcessedType";
import addPricesOfBasketItems from "../addPricesOfBasketItems";
import { mockProductData } from "../../utils/utilsForTests/mockProductData";
describe("test function addPricesOfBasketItems", () => {
  it("prices correctly sum up even after data change", () => {
    const mockProductData: basketProcessedType[] = [
      {
        name: "item",
        price: 20,
        category: "category",
        id: "id",
        imgUrl: "",
        quantity: 2,
      },
      {
        name: "item1",
        price: 25,
        category: "category1",
        id: "id1",
        imgUrl: "",
        quantity: 1,
      },
    ];
    expect(addPricesOfBasketItems(mockProductData)).toEqual(65);
  });
});
