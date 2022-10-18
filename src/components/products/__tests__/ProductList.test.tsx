import ProductList from "../ProductList";

import renderer from "react-test-renderer";
import { mockProductDataResult } from "../../../utils/utilsForTests/mockProductData";
import { dataContext } from "../../../ContextProvider";
import { mockContext } from "../../../utils/utilsForTests/mockContext";

describe("testing ProductList render", () => {
  it("ProductList Renders Correctly", () => {
    const productList = renderer
      .create(
        <dataContext.Provider value={mockContext}>
          <ProductList items={mockProductDataResult} />
        </dataContext.Provider>
      )
      .toJSON();
    expect(productList).toMatchSnapshot();
  });
});
