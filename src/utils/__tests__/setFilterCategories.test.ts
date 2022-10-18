import setFilterCategories from "../componentsFunctions/setFilterCategories";
describe("test function setFilterCategories", () => {
  it("return list of categories with filtered out item", () => {
    const mockCategoryArray: string[] = ["category1", "category2"];
    expect(setFilterCategories("category1", mockCategoryArray)).toEqual([
      "category2",
    ]);
  });
  it("return list of categories with added new item", () => {
    const mockCategoryArray: string[] = ["category1", "category2"];
    expect(setFilterCategories("category3", mockCategoryArray)).toEqual([
      "category1",
      "category2",
      "category3",
    ]);
  });
});
