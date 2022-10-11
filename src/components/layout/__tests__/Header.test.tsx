import { describe, it } from "@jest/globals";
import renderer from "react-test-renderer";
import Header from "../Header";
import { MemoryRouter as Router } from "react-router-dom";

describe("testing <Header/> render", () => {
  it("Header Renders Correctly", () => {
    const header = renderer
      .create(
        <Router>
          <Header />
        </Router>
      )
      .toJSON();
    expect(header).toMatchSnapshot();
  });
});
