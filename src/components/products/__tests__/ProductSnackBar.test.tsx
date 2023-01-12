import ProductSnackBar from "../ProductSnackBar";
import { dataContext } from "../../../ContextProvider";
import { mockContext } from "../../../utils/utilsForTests/mockContext";
import { render, fireEvent } from "@testing-library/react";
import { screen } from "@testing-library/dom";
describe("testing ProductSnackBar render", () => {
  const fn = jest.fn();
  const wrapper = (open: boolean) => {
    return (
      <dataContext.Provider value={{ ...mockContext, setOpen: fn, open: open }}>
        <ProductSnackBar text="Proceed" />
      </dataContext.Provider>
    );
  };

  it("checks if snackbar button clicks", () => {
    render(wrapper(true));
    const buttonCloseSnackBar = screen.getByPlaceholderText(
      "buttonCloseSnackBar"
    );
    fireEvent.click(buttonCloseSnackBar);
    expect(fn).toHaveBeenCalled();
  });
});
