import addPricesOfBasketItems from "../componentsFunctions/addPricesOfBasketItems";
import { mockBasketProcessedDataResult } from "../../utils/utilsForTests/mockBasketData";
describe("test function addPricesOfBasketItems", () => {
  it("prices correctly sum up even after data change", () => {
    expect(addPricesOfBasketItems(mockBasketProcessedDataResult)).toEqual(150);
  });
});
