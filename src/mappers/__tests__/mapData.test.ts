import { describe, it } from "@jest/globals";
import { mapData } from "../mapData";
import {
  mockProductData,
  mockProductDataResult,
} from "../../utils/utilsForTests/mockProductData";
describe("test function mapData", () => {
  it("data correctly maps", () => {
    expect(mapData(mockProductData)).toEqual(mockProductDataResult);
  });
});
