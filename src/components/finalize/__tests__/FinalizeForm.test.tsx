import { FieldValues, FormProvider, useForm } from "react-hook-form";
import FinalizeForm from "../FinalizeForm";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { dataContext } from "../../../ContextProvider";
import { mockContext } from "../../../utils/utilsForTests/mockContext";

describe("testing FinalizeForm render", () => {
  // const wrapper = () => {
  //   return (
  //     <FormProvider {...({ setValue: () => jest.fn() } as any)}>
  //       <FinalizeForm />
  //     </FormProvider>
  //   );
  // };
  // it("form renders with adequate number of fields", () => {
  //   render(wrapper());
  //   const formFields = screen.getAllByTestId("formField");
  //   expect(formFields.length).toEqual(7);
  // });
  it.todo("i do not know how to test this.");
});
