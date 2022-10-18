import renderer from "react-test-renderer";
import Header from "../Header";
import { MemoryRouter as Router } from "react-router-dom";
import { dataContext } from "../../../ContextProvider";
import { mockContext } from "../../../utils/utilsForTests/mockContext";

describe("testing <Header/> render", () => {
  it("Header Renders Correctly", () => {
    const header = renderer
      .create(
        <Router>
          <dataContext.Provider value={mockContext}>
            <Header />
          </dataContext.Provider>
        </Router>
      )
      .toJSON();
    expect(header).toMatchSnapshot();
  });
});
