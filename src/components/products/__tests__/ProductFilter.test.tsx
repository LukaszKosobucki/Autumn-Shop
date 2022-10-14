import ProductFilter from "../ProductFilter";
import { describe, it } from "@jest/globals";
import renderer from "react-test-renderer";
import { dataContext } from "../../../ContextProvider";
import { mockContext } from "../../../utils/utilsForTests/mockContext";

describe("testing ProductFilter render", () => {
  it("ProductFilter Renders Correctly", () => {
    const productFilter = renderer
      .create(
        <dataContext.Provider value={mockContext}>
          <ProductFilter filterByCategory={(arg: string) => {}} />
        </dataContext.Provider>
      )
      .toJSON();
    expect(productFilter).toMatchSnapshot();
  });
});
