import axios from "axios";
import { getCategories } from "../getCategories";
import { urls } from "../config";
import MockAdapter from "axios-mock-adapter";
import { waitFor } from "@testing-library/react";
import { mockCategoriesData } from "../../utils/utilsForTests/mockCategoriesData";

describe("testing getCategories", () => {
  let mock: any;
  beforeAll(() => {
    mock = new MockAdapter(axios);
  });

  it("get categories", async () => {
    mock.onGet(urls.categories).reply(200, mockCategoriesData);
    const res = await getCategories();
    await waitFor(() => expect(res).toEqual(mockCategoriesData));
  });
  it("get error from categories", async () => {
    mock.onGet(urls.categories).networkError();
    const res = await getCategories();
    await waitFor(() => expect(res).toEqual(undefined));
  });
});
