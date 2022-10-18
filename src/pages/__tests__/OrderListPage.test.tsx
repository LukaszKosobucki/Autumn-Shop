import OrderListPage from "../OrderListPage";
import { dataContext } from "../../ContextProvider";
import { mockContext } from "../../utils/utilsForTests/mockContext";
import { orderType } from "../../types/orderType";
import {
  mockDeliveryInformation,
  mockOrderDataArray,
} from "../../utils/utilsForTests/mockOrderData";
import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { mockBasketData } from "../../utils/utilsForTests/mockBasketData";
describe("testing OrderListPage render", () => {
  const fn = jest.fn();
  const mockHugeArray: orderType[] = [
    {
      id: 1,
      items: mockBasketData,
      date: "1/1/2022",
      delivery_information: mockDeliveryInformation,
      delivery_option: "DHL",
      payment_option: "cash",
    },
    {
      id: 2,
      items: mockBasketData,
      date: "1/1/2022",
      delivery_information: mockDeliveryInformation,
      delivery_option: "DHL",
      payment_option: "cash",
    },
    {
      id: 3,
      items: mockBasketData,
      date: "1/1/2022",
      delivery_information: mockDeliveryInformation,
      delivery_option: "DHL",
      payment_option: "cash",
    },
    {
      id: 4,
      items: mockBasketData,
      date: "1/1/2022",
      delivery_information: mockDeliveryInformation,
      delivery_option: "DHL",
      payment_option: "cash",
    },
    {
      id: 5,
      items: mockBasketData,
      date: "1/1/2022",
      delivery_information: mockDeliveryInformation,
      delivery_option: "DHL",
      payment_option: "cash",
    },
    {
      id: 6,
      items: mockBasketData,
      date: "1/1/2022",
      delivery_information: mockDeliveryInformation,
      delivery_option: "DHL",
      payment_option: "cash",
    },
    {
      id: 7,
      items: mockBasketData,
      date: "1/1/2022",
      delivery_information: mockDeliveryInformation,
      delivery_option: "DHL",
      payment_option: "cash",
    },
    {
      id: 8,
      items: mockBasketData,
      date: "1/1/2022",
      delivery_information: mockDeliveryInformation,
      delivery_option: "DHL",
      payment_option: "cash",
    },
    {
      id: 9,
      items: mockBasketData,
      date: "1/1/2022",
      delivery_information: mockDeliveryInformation,
      delivery_option: "DHL",
      payment_option: "cash",
    },
    {
      id: 10,
      items: mockBasketData,
      date: "1/1/2022",
      delivery_information: mockDeliveryInformation,
      delivery_option: "DHL",
      payment_option: "cash",
    },
    {
      id: 11,
      items: mockBasketData,
      date: "1/1/2022",
      delivery_information: mockDeliveryInformation,
      delivery_option: "DHL",
      payment_option: "cash",
    },
    {
      id: 12,
      items: mockBasketData,
      date: "1/1/2022",
      delivery_information: mockDeliveryInformation,
      delivery_option: "DHL",
      payment_option: "cash",
    },
    {
      id: 13,
      items: mockBasketData,
      date: "1/1/2022",
      delivery_information: mockDeliveryInformation,
      delivery_option: "DHL",
      payment_option: "cash",
    },
    {
      id: 14,
      items: mockBasketData,
      date: "1/1/2022",
      delivery_information: mockDeliveryInformation,
      delivery_option: "DHL",
      payment_option: "cash",
    },
    {
      id: 15,
      items: mockBasketData,
      date: "1/1/2022",
      delivery_information: mockDeliveryInformation,
      delivery_option: "DHL",
      payment_option: "cash",
    },
    {
      id: 16,
      items: mockBasketData,
      date: "1/1/2022",
      delivery_information: mockDeliveryInformation,
      delivery_option: "DHL",
      payment_option: "cash",
    },
    {
      id: 17,
      items: mockBasketData,
      date: "1/1/2022",
      delivery_information: mockDeliveryInformation,
      delivery_option: "DHL",
      payment_option: "cash",
    },
    {
      id: 18,
      items: mockBasketData,
      date: "1/1/2022",
      delivery_information: mockDeliveryInformation,
      delivery_option: "DHL",
      payment_option: "cash",
    },
    {
      id: 19,
      items: mockBasketData,
      date: "1/1/2022",
      delivery_information: mockDeliveryInformation,
      delivery_option: "DHL",
      payment_option: "cash",
    },
    {
      id: 20,
      items: mockBasketData,
      date: "1/1/2022",
      delivery_information: mockDeliveryInformation,
      delivery_option: "DHL",
      payment_option: "cash",
    },
    {
      id: 21,
      items: mockBasketData,
      date: "1/1/2022",
      delivery_information: mockDeliveryInformation,
      delivery_option: "DHL",
      payment_option: "cash",
    },
  ];
  const wrapper = (orderData: orderType[]) => {
    return (
      <dataContext.Provider
        value={{ ...mockContext, setOrderLoadLimit: fn, orderData: orderData }}
      >
        <OrderListPage />
      </dataContext.Provider>
    );
  };
  it("buttonLoadMore clicks, after that disapears and renders new content", async () => {
    render(wrapper(mockHugeArray));
    const buttonLoadMore = screen.getByTestId("buttonLoadMore");
    const orderItems = screen.getAllByTestId("orderItem");
    expect(orderItems.length).toEqual(20);
    fireEvent.click(buttonLoadMore);
    expect(fn).toBeCalled();
  });
  it("buttonLoadMore does not exist", () => {
    render(wrapper(mockOrderDataArray));
    const buttonLoadMore = screen.queryByTestId("buttonLoadMore");
    const orderItems = screen.getAllByTestId("orderItem");
    expect(buttonLoadMore).toBeNull();
    expect(orderItems.length).toEqual(2);
  });
  it("expect empty page with typography when orderdata is empty", () => {
    render(wrapper([]));
    const typography = screen.getByText(
      "There is no orders yet, please do a first order to see the history of orders"
    );
    expect(typography).toBeTruthy();
  });
});
