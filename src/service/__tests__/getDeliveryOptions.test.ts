import axios from "axios";
import { getDeliveryOptions } from "../getDeliveryOptions";
import {
  mockFinalizeData,
  mockFinalizeDataResult,
} from "../../utils/utilsForTests/mockFinalizeData";
import { urls } from "../config";
import MockAdapter from "axios-mock-adapter";
import { waitFor } from "@testing-library/react";

describe("testign getDeliverOptions", () => {
  let mock: any;
  beforeAll(() => {
    mock = new MockAdapter(axios);
  });
  // const errorMessage = "error";

  it("get delivery options", async () => {
    mock.onGet(urls.deliveryOptions).reply(200, mockFinalizeData);
    const res = await getDeliveryOptions();
    await waitFor(() => expect(res).toEqual(mockFinalizeDataResult));

    /** add tests below*/
    // await waitFor(() => expect(mock.get).toHaveBeenCalledTimes(1));
    // await waitFor(() =>
    //   expect(mock.get).toHaveBeenCalledWith(urls.deliveryOptions)
    // );
  });
  it("get error from delivery options", async () => {
    mock.onGet(urls.deliveryOptions).networkError();
    const res = await getDeliveryOptions();
    await waitFor(() => expect(res).toEqual(undefined));
  });
});
