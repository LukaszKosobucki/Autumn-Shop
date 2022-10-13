import { describe, it } from "@jest/globals";
import { mockProductData } from "../../utils/utilsForTests/mockProductData";
import { mapBasketData } from "../mapBasketData";
import {
  mockBasketData,
  mockBasketProcessedDataResult,
} from "../../utils/utilsForTests/mockBasketData";

describe("test function mapBasketData", () => {
  it("data correctly maps", () => {
    expect(mapBasketData(mockProductData, mockBasketData)).toEqual(
      mockBasketProcessedDataResult
    );
  });
});
