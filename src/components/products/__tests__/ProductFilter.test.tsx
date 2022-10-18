import ProductFilter from "../ProductFilter";
import renderer from "react-test-renderer";
import { dataContext } from "../../../ContextProvider";
import { mockContext } from "../../../utils/utilsForTests/mockContext";
import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
describe("testing ProductFilter render", () => {
  const fn1 = jest.fn();
  const fn2 = jest.fn();
  const fn = jest.fn();
  const wrapper = () => {
    return (
      <dataContext.Provider
        value={{
          ...mockContext,
          setOrder: fn1,
          setSort: fn2,
          setFilter: fn,
        }}
      >
        <ProductFilter />
      </dataContext.Provider>
    );
  };
  it("ProductFilter Renders Correctly", () => {
    const productFilter = renderer.create(wrapper()).toJSON();
    expect(productFilter).toMatchSnapshot();
  });
  it("checks if 7 category filter buttons renders", async () => {
    render(wrapper());
    const buttons = await screen.findAllByPlaceholderText(
      "buttonFilterCategory"
    );
    expect(buttons.length).toEqual(7);
  });
  it("category filter clicks", async () => {
    render(wrapper());
    const buttonSetCategoryFilter = await screen.findByTestId("category_1");
    fireEvent.click(buttonSetCategoryFilter);
    expect(fn).toBeCalled();
  });
  it("button setting expand to true and renders two new buttons, the two new buttons clicks", async () => {
    render(wrapper());
    const buttonSetExpand = await screen.findByPlaceholderText(
      "buttonSetExpand"
    );
    fireEvent.click(buttonSetExpand);
    const buttonSortByPrice = await screen.findByPlaceholderText(
      "buttonSortByPrice"
    );
    const buttonSortByLetter = await screen.findByPlaceholderText(
      "buttonSortByLetter"
    );
    expect(buttonSortByPrice).toBeTruthy();
    fireEvent.click(buttonSortByLetter);
    expect(fn1).toBeCalled();
    expect(fn2).toBeCalled();
    expect(buttonSortByLetter).toBeTruthy();
    fireEvent.click(buttonSortByPrice);
    expect(fn1).toBeCalled();
    expect(fn2).toBeCalled();
  });
});
