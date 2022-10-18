import renderer from "react-test-renderer";
import { dataContext } from "../../../ContextProvider";
import { mockContext } from "../../../utils/utilsForTests/mockContext";
import BasketList from "../BasketList";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

describe("testing BasketList component", () => {
  const fn = jest.fn();
  const wrapper = () => {
    return (
      <dataContext.Provider
        value={{ ...mockContext, setBasketProcessedData: fn }}
      >
        <BasketList />
      </dataContext.Provider>
    );
  };
  it("BasketList Renders Correctly", () => {
    const basketList = renderer.create(wrapper()).toJSON();
    expect(basketList).toMatchSnapshot();
  });
  it("setBasketProcessedData fires after rendering", () => {
    render(wrapper());
    expect(fn).toHaveBeenCalled();
  });
  it("check if there are 3 items rendered", async () => {
    render(wrapper());
    const basketItem = screen.getAllByTestId("basketItem");
    expect(basketItem.length).toEqual(3);
  });
});
