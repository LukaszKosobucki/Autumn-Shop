import OrderList from "../OrderList";
import { dataContext } from "../../../ContextProvider";
import { mockContext } from "../../../utils/utilsForTests/mockContext";
import { orderType } from "../../../types/orderType";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { mockOrderDataArray } from "../../../utils/utilsForTests/mockOrderData";

describe("testing OrderList render", () => {
  const wrapper = (orderData: orderType[]) => {
    return (
      <dataContext.Provider value={{ ...mockContext, orderData: orderData }}>
        <OrderList />
      </dataContext.Provider>
    );
  };

  it("OrderList renders 2 orders", () => {
    render(wrapper(mockOrderDataArray));
    const orderItems = screen.getAllByTestId("orderItem");
    expect(orderItems.length).toEqual(2);
  });
  it("OrderList render 0 orders", () => {
    render(wrapper([]));
    const orderItems = screen.queryAllByTestId("orderItem");
    expect(orderItems.length).toEqual(0);
  });
});
