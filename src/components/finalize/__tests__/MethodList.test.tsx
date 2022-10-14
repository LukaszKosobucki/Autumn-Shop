import renderer from "react-test-renderer";
import MethodList from "../MethodList";
import { dataContext } from "../../../ContextProvider";
import { mockContext } from "../../../utils/utilsForTests/mockContext";
import { mockFinalizeData } from "../../../utils/utilsForTests/mockFinalizeData";

describe("testing MethodList render", () => {
  it("MethodList Renders Correctly", () => {
    const methodList = renderer
      .create(
        <dataContext.Provider value={mockContext}>
          <MethodList options={mockFinalizeData} />
        </dataContext.Provider>
      )
      .toJSON();
    expect(methodList).toMatchSnapshot();
  });
});
