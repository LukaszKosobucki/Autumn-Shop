import axios from "axios";
import { getOrderData } from "../getOrderData";
import { urls } from "../config";
import MockAdapter from "axios-mock-adapter";
import { waitFor } from "@testing-library/react";
import { mockOrderData } from "../../utils/utilsForTests/mockOrderData";
describe("testign getOrderData", () => {
  let mock: any;
  beforeAll(() => {
    mock = new MockAdapter(axios);
  });
  //   const errorMessage = "Network Error";

  it("get order data", async () => {
    mock.onGet(urls.order_list).reply(200, mockOrderData);
    const res = await getOrderData();
    await waitFor(() => expect(res).toEqual(mockOrderData));
  });
  it("get error from order data", async () => {
    mock.onGet(urls.order_list).networkError();
    const res = await getOrderData();
    await waitFor(() => expect(res).toEqual(undefined));
  });
});
