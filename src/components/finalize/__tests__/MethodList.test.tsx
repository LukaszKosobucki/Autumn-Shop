import renderer from "react-test-renderer";
import MethodList from "../MethodList";
import { dataContext } from "../../../ContextProvider";
import { mockContext } from "../../../utils/utilsForTests/mockContext";
import { mockFinalizeDataResult } from "../../../utils/utilsForTests/mockFinalizeData";
import { finalizeOptionsType } from "../../../types/finalizeOptionsType";
import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
describe("testing MethodList render", () => {
  const fn1 = jest.fn();
  const fn2 = jest.fn();
  const wrapper = (mockFinalizeData: finalizeOptionsType[]) => {
    return (
      <dataContext.Provider
        value={{
          ...mockContext,
          setDeliveryOptions: fn1,
          setPaymentOptions: fn2,
        }}
      >
        <MethodList options={mockFinalizeData} />
      </dataContext.Provider>
    );
  };
  it("MethodList Renders Correctly", () => {
    const methodList = renderer
      .create(wrapper(mockFinalizeDataResult))
      .toJSON();
    expect(methodList).toMatchSnapshot();
  });

  it("check if there are 1 item rendered", async () => {
    render(wrapper(mockFinalizeDataResult));
    const methodCard = screen.getAllByTestId("methodCard");
    const buttonMethodCard = screen.getByTestId("buttonMethodCard");
    fireEvent.click(buttonMethodCard);
    expect(methodCard.length).toEqual(1);
    expect(fn1).toHaveBeenCalled();
    expect(fn2).toHaveBeenCalled();
  });
  it("check if there are 2 item rendered", async () => {
    const newmockFinalizeData = [...mockFinalizeDataResult];
    newmockFinalizeData[0].selected = false;
    render(wrapper(newmockFinalizeData));
    const buttonMethodCard = screen.queryByTestId("buttonMethodCard");
    const methodCard = screen.getAllByTestId("methodCard");
    expect(methodCard.length).toEqual(2);
    expect(buttonMethodCard).toBeNull();
  });
});
