import renderer from "react-test-renderer";
import MainLayout from "../MainLayout";
import { MemoryRouter as Router } from "react-router-dom";
import { dataContext } from "../../../ContextProvider";
import { mockContext } from "../../../utils/utilsForTests/mockContext";

describe("testing <MainLayout/> render", () => {
  it("MainLayout Renders Correctly", () => {
    const mainLayout = renderer
      .create(
        <Router>
          <dataContext.Provider value={mockContext}>
            <MainLayout>{}</MainLayout>
          </dataContext.Provider>
        </Router>
      )
      .toJSON();
    expect(mainLayout).toMatchSnapshot();
  });
});
