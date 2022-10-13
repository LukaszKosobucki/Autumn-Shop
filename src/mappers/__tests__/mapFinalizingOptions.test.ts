import { describe, it } from "@jest/globals";
import { mapFinalizingOptions } from "../mapFinalizingOptions";
import {
  mockFinalizeData,
  mockFinalizeDataResult,
} from "../../utils/utilsForTests/mockFinalizeData";
describe("test function mapFinalizingOptions", () => {
  it("data correctly maps", () => {
    expect(mapFinalizingOptions(mockFinalizeData)).toEqual(
      mockFinalizeDataResult
    );
  });
});
