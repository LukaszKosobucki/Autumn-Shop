import ProductList from "../ProductList";
import { describe, it } from "@jest/globals";
import renderer from "react-test-renderer";
import { mockProductData } from "../../../utils/utilsForTests/mockProductData";
import { dataContext } from "../../../ContextProvider";
import { mockContext } from "../../../utils/utilsForTests/mockContext";

describe("testing ProductList render", () => {
  it("ProductList Renders Correctly", () => {
    const productList = renderer
      .create(
        <dataContext.Provider value={mockContext}>
          <ProductList items={mockProductData} />
        </dataContext.Provider>
      )
      .toJSON();
    expect(productList).toMatchSnapshot();
  });
});
