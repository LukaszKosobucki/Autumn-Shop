import { describe, it } from "@jest/globals";
import renderer from "react-test-renderer";
import OrderImageBg from "../OrderImageBg";

describe("testing <OrderImageBg/> render", () => {
  it("OrderImageBg Renders Correctly", () => {
    const orderBg = renderer.create(<OrderImageBg />).toJSON();
    expect(orderBg).toMatchSnapshot();
  });
});
