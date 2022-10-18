import ProductItem from "../ProductItem";
import renderer from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { dataContext } from "../../../ContextProvider";
import { mockContext } from "../../../utils/utilsForTests/mockContext";

describe("testing <ProductItem/> render", () => {
  const fn1 = jest.fn();
  const fn2 = jest.fn();
  const wrapper = () => {
    return (
      <dataContext.Provider
        value={{ ...mockContext, setBasketData: fn1, setOpen: fn2 }}
      >
        <ProductItem
          item={{
            name: "product",
            price: 20,
            category: "category_1",
            id: "item_1",
            imgUrl: "",
          }}
        />
      </dataContext.Provider>
    );
  };

  it("ProductItem Renders Correctly", () => {
    const productItem = renderer.create(wrapper()).toJSON();
    expect(productItem).toMatchSnapshot();
  });
  it("checks if increase button clicks", () => {
    render(wrapper());
    const button = screen.getByPlaceholderText("buttonAddToBasket");
    fireEvent.click(button);
    expect(fn1).toHaveBeenCalled();
    expect(fn2).toHaveBeenCalled();
  });
});
