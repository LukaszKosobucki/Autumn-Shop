import ProductItem from "../ProductItem";
import { describe, it } from "@jest/globals";
import renderer from "react-test-renderer";

describe("testing <ProductItem/> render", () => {
  it("ProductItem Renders Correctly", () => {
    const productPage = renderer
      .create(
        <ProductItem
          item={{
            name: "product",
            price: 20,
            category: "category_1",
            id: "item_1",
          }}
        />
      )
      .toJSON();
    expect(productPage).toMatchSnapshot();
  });
});
