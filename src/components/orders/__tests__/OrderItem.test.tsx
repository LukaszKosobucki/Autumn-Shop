import renderer from "react-test-renderer";
import OrderItem from "../OrderItem";
import { dataContext } from "../../../ContextProvider";
import { mockContext } from "../../../utils/utilsForTests/mockContext";
import { mockOrderData } from "../../../utils/utilsForTests/mockOrderData";
import { orderType } from "../../../types/orderType";

describe("testing OrderItem render", () => {
  it("OrderItem Renders Correctly", () => {
    const orderItem = renderer
      .create(
        <dataContext.Provider value={mockContext}>
          <OrderItem
            orderItem={mockOrderData}
            handleOpen={(arg: orderType) => {}}
          />
        </dataContext.Provider>
      )
      .toJSON();
    expect(orderItem).toMatchSnapshot();
  });
});
