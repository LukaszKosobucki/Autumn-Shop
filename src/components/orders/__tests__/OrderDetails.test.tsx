import OrderDetails from "../OrderDetails";
import { dataContext } from "../../../ContextProvider";
import { mockContext } from "../../../utils/utilsForTests/mockContext";
import { mockOrderData } from "../../../utils/utilsForTests/mockOrderData";
import { render, fireEvent } from "@testing-library/react";
import { screen, waitFor } from "@testing-library/dom";
describe("testing OrderDetails render", () => {
  const handleClose = jest.fn();
  const wrapper = (openDetails: boolean) => {
    return (
      <dataContext.Provider value={mockContext}>
        <OrderDetails
          openDetails={openDetails}
          handleClose={handleClose}
          orderItem={mockOrderData}
        />
      </dataContext.Provider>
    );
  };
  it("close button clicks and modal renders", async () => {
    render(wrapper(true));
    const modal = screen.getByTestId("modal");
    const clickClose = screen.getByTestId("clickClose");
    await waitFor(() => {
      expect(modal).toBeTruthy();
    });
    fireEvent.click(clickClose);
    expect(handleClose).toBeCalled();
  });
  it("all order item data renders in good quantity", () => {
    render(wrapper(true));
    const deliveryInfo = screen.getAllByTestId("deliveryInfo");
    const orderInfoQuantity = screen.getAllByTestId("orderInfoQuantity");
    expect(deliveryInfo.length).toEqual(7);
    expect(orderInfoQuantity.length).toEqual(3);
  });
});
