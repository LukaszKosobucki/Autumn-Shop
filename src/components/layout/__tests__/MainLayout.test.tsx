import renderer from "react-test-renderer";
import MainLayout from "../MainLayout";
import { MemoryRouter as Router } from "react-router-dom";
import { dataContext } from "../../../ContextProvider";
import { mockContext } from "../../../utils/utilsForTests/mockContext";
import "jest-location-mock";
import { render } from "@testing-library/react";
describe("testing <MainLayout/> render", () => {
  beforeEach(() => {
    Object.defineProperty(window, "scrollTo", {
      value: jest.fn(),
    });
  });
  const wrapper = () => {
    return (
      <Router>
        <dataContext.Provider value={mockContext}>
          <MainLayout>{}</MainLayout>
        </dataContext.Provider>
      </Router>
    );
  };
  it("MainLayout Renders Correctly", () => {
    const mainLayout = renderer.create(wrapper()).toJSON();
    expect(mainLayout).toMatchSnapshot();
  });
  it("mocks reload function", () => {
    expect(jest.isMockFunction(window.scrollTo)).toBe(true);
  });
  it("fires window.scrolltop on render", () => {
    render(wrapper());
    expect(window.scrollTo).toBeCalled();
  });
});
