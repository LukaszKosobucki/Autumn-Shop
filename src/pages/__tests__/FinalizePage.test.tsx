import FinalizePage from "../FinalizePage";
import renderer from "react-test-renderer";
import { dataContext } from "../../ContextProvider";
import { MemoryRouter as Router } from "react-router-dom";
import { mockContext } from "../../utils/utilsForTests/mockContext";
describe("testing FinalizePage render", () => {
  const wrapper = () => {
    return (
      <Router>
        <dataContext.Provider value={mockContext}>
          <FinalizePage />
        </dataContext.Provider>
      </Router>
    );
  };
  it("FinalizePage Renders Correctly", () => {
    const finalizePage = renderer.create(wrapper()).toJSON();
    expect(finalizePage).toMatchSnapshot();
  });
});
