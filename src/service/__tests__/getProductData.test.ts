import axios from "axios";
import { getProductData } from "../getProductData";
import { urls } from "../config";
import MockAdapter from "axios-mock-adapter";
import { waitFor } from "@testing-library/react";
import {
  mockProductData,
  mockProductDataResult,
} from "../../utils/utilsForTests/mockProductData";

describe("testing getProductData", () => {
  let mock: any;
  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  it("get product data", async () => {
    mock.onGet(urls.items).reply(200, mockProductData);
    const res = await getProductData();
    await waitFor(() => expect(res).toEqual(mockProductDataResult));
  });
  it("get error from product data", async () => {
    mock.onGet(urls.items).networkError();
    const res = await getProductData();
    await waitFor(() => expect(res).toEqual(undefined));
  });
});
