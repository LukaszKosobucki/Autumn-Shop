import { describe, it } from "@jest/globals";
import renderer from "react-test-renderer";
import Header from "../Header";

describe("testing <Header/> render", () => {
  it("Header Renders Correctly", () => {
    const header = renderer.create(<Header />).toJSON();
    expect(header).toMatchSnapshot();
  });
});
