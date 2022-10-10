import { ProductPage } from "../ProductPage";
import { describe, it } from "@jest/globals";
import renderer from "react-test-renderer";

describe("testing ProductPage render", () => {
  it("ProductPage Renders Correctly", () => {
    const productPage = renderer.create(<ProductPage />).toJSON();
    expect(productPage).toMatchSnapshot();
  });
});
