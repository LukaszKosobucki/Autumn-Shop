import { describe, it } from "@jest/globals";
import renderer from "react-test-renderer";
import Footer from "../Footer";

describe("testing <Footer/> render", () => {
  it("Footer Renders Correctly", () => {
    const footer = renderer.create(<Footer />).toJSON();
    expect(footer).toMatchSnapshot();
  });
});
