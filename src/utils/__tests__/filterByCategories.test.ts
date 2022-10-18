import filterByCategories from "../componentsFunctions/filterByCategories";
import { mockProductData } from "../utilsForTests/mockProductData";

describe("test function filterByCategories", () => {
  it("return list of filtered data", () => {
    const mockCategoryArray: string[] = ["category1", "category2"];
    expect(filterByCategories(mockCategoryArray, mockProductData)).toEqual([
      {
        name: "a",
        price: 15,
        category: "category1",
        id: "item_1",
        imgUrl: "url1",
      },
      {
        name: "c",
        price: 25,
        category: "category2",
        id: "item_2",
        imgUrl: "url2",
      },
    ]);
  });
  it("return all data without filtering", () => {
    const mockCategoryArray: string[] = [];
    expect(filterByCategories(mockCategoryArray, mockProductData)).toEqual(
      mockProductData
    );
  });
});
