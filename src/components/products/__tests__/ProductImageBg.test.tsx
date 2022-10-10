import ProductImageBg from "../ProductImageBg";
import { describe, it } from "@jest/globals";
import renderer from "react-test-renderer";

describe("testing ProductImageBg render", () => {
  it("ProductImageBg Renders Correctly", () => {
    const productBg = renderer.create(<ProductImageBg />).toJSON();
    expect(productBg).toMatchSnapshot();
  });
});
