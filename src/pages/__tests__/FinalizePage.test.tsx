import FinalizePage from "../FinalizePage";
import renderer from "react-test-renderer";
import ContextProvider from "../../ContextProvider";
import { MemoryRouter as Router } from "react-router-dom";
describe("testing FinalizePage render", () => {
  it("FinalizePage Renders Correctly", () => {
    const finalizePage = renderer
      .create(
        <Router>
          <ContextProvider>
            <FinalizePage />
          </ContextProvider>
        </Router>
      )
      .toJSON();
    expect(finalizePage).toMatchSnapshot();
  });
});
