import renderer from "react-test-renderer";
import OrderDetails from "../OrderDetails";
import { dataContext } from "../../../ContextProvider";
import { mockContext } from "../../../utils/utilsForTests/mockContext";
import { mockOrderData } from "../../../utils/utilsForTests/mockOrderData";

describe("testing OrderDetails render", () => {
  // it("OrderDetails Renders Correctly", () => {
  //   const orderDetails = renderer
  //     .create(
  //       <dataContext.Provider value={mockContext}>
  //         <OrderDetails
  //           openDetails={true}
  //           orderItem={mockOrderData}
  //           handleClose={() => {}}
  //         />
  //       </dataContext.Provider>
  //     )
  //     .toJSON();
  //   expect(orderDetails).toMatchSnapshot();
  // });
  it.todo("create test for modal");
});
