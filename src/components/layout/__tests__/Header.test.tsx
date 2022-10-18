import renderer from "react-test-renderer";
import Header from "../Header";
import { MemoryRouter as Router } from "react-router-dom";
import { dataContext } from "../../../ContextProvider";
import { mockContext } from "../../../utils/utilsForTests/mockContext";
import "jest-location-mock";
import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
describe("testing <Header/> render", () => {
  const mockLocation = "http://localhost:3005/";
  const location = window.location;
  beforeEach(() => {
    Object.defineProperty(window, "location", {
      configurable: true,
      value: { href: mockLocation, reload: jest.fn() },
    });
  });
  console.log(location);
  afterAll(() => {
    Object.defineProperty(window, "location", {
      configurable: true,
      value: location,
    });
  });

  const wrapper = () => {
    return (
      <Router>
        <dataContext.Provider value={mockContext}>
          <Header />
        </dataContext.Provider>
      </Router>
    );
  };
  it("Header Renders Correctly", () => {
    const header = renderer.create(wrapper()).toJSON();
    expect(header).toMatchSnapshot();
  });
  it("mocks reload function", () => {
    expect(jest.isMockFunction(window.location.reload)).toBe(true);
  });
  it("reload onClick", () => {
    render(wrapper());
    const buttonLogo = screen.getByTestId("buttonLogo");
    fireEvent.click(buttonLogo);
    expect(window.location.reload).toBeCalled();
  });
});
