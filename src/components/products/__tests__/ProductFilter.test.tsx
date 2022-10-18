import ProductFilter from "../ProductFilter";
import renderer from "react-test-renderer";
import { dataContext } from "../../../ContextProvider";
import { mockContext } from "../../../utils/utilsForTests/mockContext";

describe("testing ProductFilter render", () => {
  it("ProductFilter Renders Correctly", () => {
    const productFilter = renderer
      .create(
        <dataContext.Provider value={mockContext}>
          <ProductFilter />
        </dataContext.Provider>
      )
      .toJSON();
    expect(productFilter).toMatchSnapshot();
  });
});
