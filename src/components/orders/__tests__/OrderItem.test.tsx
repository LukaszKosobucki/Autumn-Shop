import renderer from "react-test-renderer";
import OrderItem from "../OrderItem";
import { dataContext } from "../../../ContextProvider";
import { mockContext } from "../../../utils/utilsForTests/mockContext";
import { mockOrderData } from "../../../utils/utilsForTests/mockOrderData";
import { orderType } from "../../../types/orderType";
import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
describe("testing OrderItem render", () => {
  const handleOpen = jest.fn();
  const wrapper = (handleOpen: (arg: orderType) => void) => {
    return (
      <dataContext.Provider value={mockContext}>
        <OrderItem orderItem={mockOrderData} handleOpen={handleOpen} />
      </dataContext.Provider>
    );
  };
  it("OrderItem Renders Correctly", () => {
    const orderItem = renderer.create(wrapper(handleOpen)).toJSON();
    expect(orderItem).toMatchSnapshot();
  });
  it("checks if button link clicks", () => {
    render(wrapper(handleOpen));
    const button = screen.getByPlaceholderText("buttonLink");
    fireEvent.click(button);
    expect(handleOpen).toHaveBeenCalled();
  });
});
