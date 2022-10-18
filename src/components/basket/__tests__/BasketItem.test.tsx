import renderer from "react-test-renderer";
import { basketProcessedType } from "../../../types/basketProcessedType";
import BasketItem from "../BasketItem";
import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { dataContext } from "../../../ContextProvider";
import { mockContext } from "../../../utils/utilsForTests/mockContext";

describe("testing BasketItem component", () => {
  const fn = jest.fn();
  const item: basketProcessedType = {
    name: "item_1",
    price: 20,
    category: "category_1",
    id: "item_1",
    quantity: 2,
    imgUrl: "",
  };
  const wrapper = (item: basketProcessedType) => {
    return (
      <dataContext.Provider value={{ ...mockContext, setBasketData: fn }}>
        <BasketItem item={item} />
      </dataContext.Provider>
    );
  };

  it("BasketItem Renders Correctly", () => {
    const basketItem = renderer.create(wrapper(item)).toJSON();
    expect(basketItem).toMatchSnapshot();
  });

  it("checks if increase button clicks", () => {
    render(wrapper(item));
    const button = screen.getByTestId("increaseButton");
    fireEvent.click(button);
    expect(fn).toHaveBeenCalled();
  });
  it("checks if reduce button clicks", () => {
    render(wrapper(item));
    const button = screen.getByTestId("reduceButton");
    fireEvent.click(button);
    expect(fn).toHaveBeenCalled();
  });
  it("checks if delete button clicks", () => {
    render(wrapper(item));
    const button = screen.getByTestId("deleteButton");
    fireEvent.click(button);
    expect(fn).toHaveBeenCalled();
  });
});
