import { describe, it } from "@jest/globals";
import resetFinalizeOptions from "../componentsFunctions/resetFinalizeOptions";
import {
  mockFinalizeData,
  mockFinalizeDataPayment,
} from "../utilsForTests/mockFinalizeData";

describe("test function resetFinalizeOptions", () => {
  it("reset delivery options", () => {
    expect(
      resetFinalizeOptions(
        mockFinalizeData,
        mockFinalizeDataPayment,
        mockFinalizeData
      )
    ).toEqual({
      deliveryOptions: [
        {
          name: "DPD Courier",
          imgUrl:
            "https://images.unsplash.com/photo-1601647998802-5c86158216f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80",
          selected: false,
        },
        {
          name: "DPD Inpost",
          imgUrl:
            "https://images.unsplash.com/photo-1601647998802-5c86158216f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80",
          selected: false,
        },
      ],
      paymentOptions: mockFinalizeDataPayment,
    });
  });

  it("reset payment options", () => {
    expect(
      resetFinalizeOptions(
        mockFinalizeData,
        mockFinalizeDataPayment,
        mockFinalizeDataPayment
      )
    ).toEqual({
      deliveryOptions: mockFinalizeData,
      paymentOptions: [
        {
          name: "Cash",
          imgUrl:
            "https://images.unsplash.com/photo-1601647998802-5c86158216f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80",
          selected: false,
        },
        {
          name: "Card",
          imgUrl:
            "https://images.unsplash.com/photo-1601647998802-5c86158216f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=755&q=80",
          selected: false,
        },
      ],
    });
  });
});
