import renderer from "react-test-renderer";
import MethodCard from "../MethodCard";
import { dataContext } from "../../../ContextProvider";
import { mockContext } from "../../../utils/utilsForTests/mockContext";
import { mockFinalizeData } from "../../../utils/utilsForTests/mockFinalizeData";

describe("testing MethodCard render", () => {
  it("MethodCard Renders Correctly", () => {
    const methodCard = renderer
      .create(
        <dataContext.Provider value={mockContext}>
          <MethodCard
            name={mockFinalizeData[0].name}
            imgUrl={mockFinalizeData[0].imgUrl}
            selected={mockFinalizeData[0].selected}
          />
        </dataContext.Provider>
      )
      .toJSON();
    expect(methodCard).toMatchSnapshot();
  });
});
