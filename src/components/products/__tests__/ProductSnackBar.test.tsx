import ProductSnackBar from "../ProductSnackBar";
import { describe, it } from "@jest/globals";
import renderer from "react-test-renderer";
import { dataContext } from "../../../ContextProvider";
import { mockContext } from "../../../utils/utilsForTests/mockContext";

describe("testing ProductSnackBar render", () => {
  it("ProductSnackBar Renders Correctly", () => {
    const productSnackBar = renderer
      .create(
        <dataContext.Provider value={mockContext}>
          <ProductSnackBar text="Proceed" />
        </dataContext.Provider>
      )
      .toJSON();
    expect(productSnackBar).toMatchSnapshot();
  });
});
