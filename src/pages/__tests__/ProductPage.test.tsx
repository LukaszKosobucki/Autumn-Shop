import { ProductPage } from "../ProductPage";
import renderer from "react-test-renderer";
import { dataContext } from "../../ContextProvider";
import { mockContext } from "../../utils/utilsForTests/mockContext";
import { render } from "@testing-library/react";
import { fireEvent, screen } from "@testing-library/dom";
import { productType } from "../../types/productType";
import { mockProductDataResult } from "../../utils/utilsForTests/mockProductData";
describe("testing ProductPage render", () => {
  const mockHugeArray = [
    {
      name: "a",
      price: 15,
      category: "category1",
      id: "item_1",
      imgUrl: "url1",
      key: "item_1",
    },

    {
      name: "c",
      price: 25,
      category: "category2",
      id: "item_2",
      imgUrl: "url2",
      key: "item_2",
    },
    {
      name: "b",
      price: 20,
      category: "category3",
      id: "item_3",
      imgUrl: "url2",
      key: "item_3",
    },
    {
      name: "a",
      price: 15,
      category: "category1",
      id: "item_1",
      imgUrl: "url1",
      key: "item_4",
    },

    {
      name: "c",
      price: 25,
      category: "category2",
      id: "item_2",
      imgUrl: "url2",
      key: "item_5",
    },
    {
      name: "b",
      price: 20,
      category: "category3",
      id: "item_3",
      imgUrl: "url2",
      key: "item_6",
    },
    {
      name: "a",
      price: 15,
      category: "category1",
      id: "item_1",
      imgUrl: "url1",
      key: "item_7",
    },

    {
      name: "c",
      price: 25,
      category: "category2",
      id: "item_2",
      imgUrl: "url2",
      key: "item_8",
    },
    {
      name: "b",
      price: 20,
      category: "category3",
      id: "item_3",
      imgUrl: "url2",
      key: "item_9",
    },
    {
      name: "b",
      price: 20,
      category: "category3",
      id: "item_3",
      imgUrl: "url2",
      key: "item_10",
    },
  ];
  const fn1 = jest.fn();
  const fn2 = jest.fn();
  const wrapper = (processedData: productType[]) => {
    return (
      <dataContext.Provider
        value={{
          ...mockContext,
          setProcessedData: fn1,
          setLoadLimit: fn2,
          processedData: processedData,
        }}
      >
        <ProductPage />
      </dataContext.Provider>
    );
  };
  it("ProductPage Renders Correctly", () => {
    const productPage = renderer
      .create(wrapper(mockProductDataResult))
      .toJSON();
    expect(productPage).toMatchSnapshot();
  });

  it("setProcessedData fires on page creation,setLoadLimit onclik", () => {
    render(wrapper(mockHugeArray));
    expect(fn1).toBeCalled();
    const buttonLoadMore = screen.getByTestId("buttonLoadMore");
    fireEvent.click(buttonLoadMore);
    expect(fn2).toBeCalled();
  });

  it("buttonLoadMore will not render", () => {
    render(wrapper(mockProductDataResult));
    expect(fn1).toBeCalled();
    const buttonLoadMore = screen.queryByTestId("buttonLoadMore");
    expect(buttonLoadMore).toBeNull();
  });
});
