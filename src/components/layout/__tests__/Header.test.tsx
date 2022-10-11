import { describe, it } from "@jest/globals";
import renderer from "react-test-renderer";
import Header from "../Header";
import { MemoryRouter as Router } from "react-router-dom";
import ContextProvider from "../../../ContextProvider";

describe("testing <Header/> render", () => {
  it("Header Renders Correctly", () => {
    const header = renderer
      .create(
        <Router>
          <ContextProvider>
            <Header />
          </ContextProvider>
        </Router>
      )
      .toJSON();
    expect(header).toMatchSnapshot();
  });
});
