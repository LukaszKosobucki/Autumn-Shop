import { ProductPage } from "../ProductPage";
import { describe, it } from "@jest/globals";
import renderer from "react-test-renderer";
import ContextProvider from "../../ContextProvider";

describe("testing ProductPage render", () => {
  it("ProductPage Renders Correctly", () => {
    const productPage = renderer
      .create(
        <ContextProvider>
          <ProductPage />
        </ContextProvider>
      )
      .toJSON();
    expect(productPage).toMatchSnapshot();
  });
});
