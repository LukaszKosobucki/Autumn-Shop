import axios from "axios";
import { getPaymentOptions } from "../getPaymentOptions";
import {
  mockFinalizeData,
  mockFinalizeDataResult,
} from "../../utils/utilsForTests/mockFinalizeData";
import { urls } from "../config";
import MockAdapter from "axios-mock-adapter";
import { waitFor } from "@testing-library/react";

describe("testimg getPaymentOptions", () => {
  let mock: any;
  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  it("get payment options", async () => {
    mock.onGet(urls.paymentOptions).reply(200, mockFinalizeData);
    const res = await getPaymentOptions();
    await waitFor(() => expect(res).toEqual(mockFinalizeDataResult));
  });
  it("get error from payment options", async () => {
    mock.onGet(urls.paymentOptions).networkError();
    const res = await getPaymentOptions();
    await waitFor(() => expect(res).toEqual(undefined));
  });
});
