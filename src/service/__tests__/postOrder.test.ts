import axios from "axios";
import { postOrder } from "../postOrder";
import { urls } from "../config";
import MockAdapter from "axios-mock-adapter";
import { waitFor } from "@testing-library/react";
import { mockOrderData } from "../../utils/utilsForTests/mockOrderData";

describe("testing postOrder", () => {
  let mock: any;
  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  it("get 201 from post order", async () => {
    mock.onPost(urls.order_list).reply(201);
    const res = await postOrder(mockOrderData);
    await waitFor(() => expect(res).toEqual(201));
  });
  it("get error from post order", async () => {
    mock.onPost(urls.order_list).networkError();
    const res = await postOrder(mockOrderData);
    await waitFor(() => expect(res).toEqual(undefined));
  });
});
