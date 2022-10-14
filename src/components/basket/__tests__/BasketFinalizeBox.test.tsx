import { describe, it } from "@jest/globals";
import renderer from "react-test-renderer";
import { dataContext } from "../../../ContextProvider";
import BasketFinalizeBox from "../BasketFinalizeBox";
import { MemoryRouter as Router } from "react-router-dom";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { mockContext } from "../../../utils/utilsForTests/mockContext";

describe("testing BasketFinalizeBox component", () => {
  const wrapper = (linkBool: boolean) => {
    return (
      <Router>
        <dataContext.Provider value={mockContext}>
          <BasketFinalizeBox text="proceed" link={true} />
        </dataContext.Provider>
      </Router>
    );
  };
  it("Renders Correctly without link", async () => {
    const basketFinalizeBox = renderer.create(wrapper(false)).toJSON();
    expect(basketFinalizeBox).toMatchSnapshot();
    // expect(basketFinalizeBox.contains(<Button />)).toBe(true);
    //expect onclick type submit
  });
  it("Renders Correctly with a link", () => {
    const basketFinalizeBox = renderer.create(wrapper(true)).toJSON();
    expect(basketFinalizeBox).toMatchSnapshot();
    //expect is there a button (exist)
    //expect onclick route
  });
  it("check if button exist with link true", () => {
    render(wrapper(true));
    const button = screen.getByTestId("buttonLink");
    expect(button.nodeName).toBe("A");
  });
  it("check if button exist with link false", () => {
    render(wrapper(false));
    const button = screen.getByText("proceed");
    expect(button.nodeName).toBe("SPAN");
  });
});
