import OrderListPage from "../OrderListPage";

import renderer from "react-test-renderer";
import ContextProvider from "../../ContextProvider";

describe("testing OrderListPage render", () => {
  it("OrderListPage Renders Correctly", () => {
    const orderListPage = renderer
      .create(
        <ContextProvider>
          <OrderListPage />
        </ContextProvider>
      )
      .toJSON();
    expect(orderListPage).toMatchSnapshot();
  });
});
