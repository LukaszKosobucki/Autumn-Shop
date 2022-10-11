import { describe, it } from "@jest/globals";
import renderer from "react-test-renderer";
import ContextProvider from "../../../ContextProvider";
import BasketFinalizeBox from "../BasketFinalizeBox";
import { MemoryRouter as Router } from "react-router-dom";

describe("testing BasketFinalizeBox component", () => {
  it("BasketFinalizeBox Renders Correctly", () => {
    const basketFinalizeBox = renderer
      .create(
        <ContextProvider>
          <BasketFinalizeBox text="proceed" link={false} />
        </ContextProvider>
      )
      .toJSON();
    expect(basketFinalizeBox).toMatchSnapshot();
  });
  it("BasketFinalizeBox Renders Correctly with a link", () => {
    const basketFinalizeBox = renderer
      .create(
        <Router>
          <ContextProvider>
            <BasketFinalizeBox text="proceed" link={true} />
          </ContextProvider>
        </Router>
      )
      .toJSON();
    expect(basketFinalizeBox).toMatchSnapshot();
  });
});
