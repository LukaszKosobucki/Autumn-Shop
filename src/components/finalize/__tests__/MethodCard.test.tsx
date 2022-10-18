import renderer from "react-test-renderer";
import MethodCard from "../MethodCard";
import { dataContext } from "../../../ContextProvider";
import { mockContext } from "../../../utils/utilsForTests/mockContext";
import { mockFinalizeData } from "../../../utils/utilsForTests/mockFinalizeData";
import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
describe("testing MethodCard render", () => {
  const fn1 = jest.fn();
  const fn2 = jest.fn();
  const wrapper = (selected: boolean) => {
    return (
      <dataContext.Provider
        value={{
          ...mockContext,
          setDeliveryOptions: fn1,
          setPaymentOptions: fn2,
        }}
      >
        <MethodCard
          name={mockFinalizeData[0].name}
          imgUrl={mockFinalizeData[0].imgUrl}
          selected={selected}
        />
      </dataContext.Provider>
    );
  };
  it("MethodCard Renders Correctly", () => {
    const methodCard = renderer.create(wrapper(true)).toJSON();
    expect(methodCard).toMatchSnapshot();
  });
  it("checks if delivery button clicks", () => {
    render(wrapper(true));
    const button = screen.getByPlaceholderText("buttonDelivery");
    fireEvent.click(button);
    expect(fn1).toHaveBeenCalled();
    expect(fn2).toHaveBeenCalled();
  });
  it("checks if payment button clicks", () => {
    render(wrapper(false));
    const button = screen.getByPlaceholderText("buttonPayment");
    fireEvent.click(button);
    expect(fn1).toHaveBeenCalled();
    expect(fn2).toHaveBeenCalled();
  });
});
