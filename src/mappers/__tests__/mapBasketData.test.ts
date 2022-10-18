import { mockProductDataResult } from "../../utils/utilsForTests/mockProductData";
import { mapBasketData } from "../mapBasketData";
import {
  mockBasketData,
  mockBasketProcessedDataResult,
} from "../../utils/utilsForTests/mockBasketData";

describe("test function mapBasketData", () => {
  it("data correctly maps", () => {
    expect(mapBasketData(mockProductDataResult, mockBasketData)).toEqual(
      mockBasketProcessedDataResult
    );
  });
});
