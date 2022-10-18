import BasketPage from "../BasketPage";

import renderer from "react-test-renderer";
import { dataContext } from "../../ContextProvider";
import { mockContext } from "../../utils/utilsForTests/mockContext";
import { mockBasketData } from "../../utils/utilsForTests/mockBasketData";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { MemoryRouter as Router } from "react-router-dom";
import { basketType } from "../../types/basketType";

describe("testing BasketPage render", () => {
  const wrapper = (basketData: basketType[]) => {
    return (
      <Router>
        <dataContext.Provider
          value={{ ...mockContext, basketData: basketData }}
        >
          <BasketPage />
        </dataContext.Provider>
      </Router>
    );
  };
  it("BasketPage Renders Correctly", () => {
    const basketPage = renderer.create(wrapper(mockBasketData)).toJSON();
    expect(basketPage).toMatchSnapshot();
  });

  it("renders good number of items", () => {
    render(wrapper(mockBasketData));
    const basketItems = screen.getAllByTestId("basketItem");
    expect(basketItems.length).toEqual(3);
  });
  it("renders typography when basketdata is empty", () => {
    render(wrapper([]));
    const typography = screen.getByText(
      "The Basket is empty, go to the main page and add some items to proceed further"
    );
    expect(typography).toBeTruthy();
  });
});
