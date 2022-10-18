import BasketPage from "../BasketPage";

import renderer from "react-test-renderer";
import ContextProvider from "../../ContextProvider";

describe("testing BasketPage render", () => {
  it("BasketPage Renders Correctly", () => {
    const basketPage = renderer
      .create(
        <ContextProvider>
          <BasketPage />
        </ContextProvider>
      )
      .toJSON();
    expect(basketPage).toMatchSnapshot();
  });
});
