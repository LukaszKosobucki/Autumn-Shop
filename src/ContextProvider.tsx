import { createContext, useEffect, useState, useMemo } from "react";
import { mapBasketData } from "./mappers/mapBasketData";
import { basketType } from "./types/basketType";
import { finalizeOptionsType } from "./types/finalizeOptionsType";
import { orderType } from "./types/orderType";
import { productType } from "./types/productType";
import { childrenInterface } from "./interfaces/childrenInterface";
import { basketProcessedType } from "./types/basketProcessedType";
import { IuserCreds } from "./interfaces/IuserCreds";
import { contextProviderInterface } from "./interfaces/contextProviderInterface";
import firebaseConfig from "./utils/firestore/firestore.config";
import { initializeApp } from "firebase/app";
import {
  collection,
  doc,
  getDoc,
  getFirestore,
  onSnapshot,
} from "firebase/firestore";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { sortProductItems } from "./utils/componentsFunctions/sortProductItems";
import { setBasketItemsOfAUser } from "./utils/firestore/setBasketItemsOfAUser";
import { isLogged } from "./types/isLoggedType";
import debounce from "lodash.debounce";
import { userAuthChangeOperations } from "./utils/firestore/userAuthChangeOperations";

export const dataContext = createContext<contextProviderInterface>(
  {} as contextProviderInterface
);

const ContextProvider = ({ children }: childrenInterface) => {
  const [basketData, setBasketData] = useState<basketType[]>(
    JSON.parse(localStorage.getItem("basketData") || "[]")
  );
  const [initBasketData, setInitBasketData] = useState<basketType[]>(
    [] as basketType[]
  );
  const [filter, setFilter] = useState<string[]>([]);
  const [data, setData] = useState<productType[]>([]);
  const [loadLimit, setLoadLimit] = useState<number>(9);
  const [orderLoadLimit, setOrderLoadLimit] = useState<number>(20);
  const [basketProcessedData, setBasketProcessedData] = useState<
    basketProcessedType[]
  >([]);
  const [processedData, setProcessedData] = useState<productType[]>(data);
  const [deliveryOptions, setDeliveryOptions] = useState<finalizeOptionsType[]>(
    []
  );
  const [paymentOptions, setPaymentOptions] = useState<finalizeOptionsType[]>(
    []
  );
  const [open, setOpen] = useState<boolean>(false);
  const [orderData, setOrderData] = useState<orderType[]>([]);
  const [order, setOrder] = useState<boolean>(
    JSON.parse(localStorage.getItem("order") || "false")
  );
  const [sort, setSort] = useState<string>(
    localStorage.getItem("sort") || "price"
  );
  const [user, setUser] = useState<User | null>(null);
  const [userCredentials, setUserCredentials] = useState<IuserCreds>({});
  const [isLogged, setIsLogged] = useState<isLogged>("notLoggedInYet");
  // firebase init
  const firebaseApp = initializeApp(firebaseConfig);
  const firestore = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);
  // collections init
  const paymentOptionsCol = collection(firestore, "paymentOptions");
  const deliveryOptionsCol = collection(firestore, "deliveryOptions");
  const productItemsCol = collection(firestore, "productItems");
  const userCol = collection(firestore, `users`);

  const debouncedPost = useMemo(
    () =>
      debounce((basketData, user, firestore, initBasketData, isLogged) => {
        user &&
          setBasketItemsOfAUser(firestore, user, basketData, initBasketData);
        isLogged === "notLoggedInYet" &&
          localStorage.setItem("basketData", JSON.stringify(basketData));
      }, 3000),
    []
  );

  useEffect(() => {
    debouncedPost(basketData, user, firestore, initBasketData, isLogged);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [basketData]);

  useEffect(() => {
    onSnapshot(paymentOptionsCol, (snapshot) => {
      setPaymentOptions(
        snapshot.docs.map((doc) => doc.data() as finalizeOptionsType)
      );
    });
    onSnapshot(deliveryOptionsCol, (snapshot) => {
      setDeliveryOptions(
        snapshot.docs.map((doc) => doc.data() as finalizeOptionsType)
      );
    });
    onSnapshot(productItemsCol, (snapshot) => {
      setData(
        snapshot.docs.map((doc) => {
          return { ...doc.data(), id: doc.id, key: doc.id } as productType;
        })
      );
    });
    const orderCol = collection(firestore, `users/${user?.uid}/orders`);
    user &&
      onSnapshot(orderCol, (snapshot) => {
        setOrderData(snapshot.docs.map((doc) => doc.data() as orderType));
      });
    user &&
      onSnapshot(userCol, async (snapshot) => {
        const docRef = doc(userCol, user?.uid);
        const docSnap = await getDoc(docRef);
        setUserCredentials(docSnap.data() as IuserCreds);
      });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    user !== null && setIsLogged("loggedIn");
    isLogged !== "notLoggedInYet" &&
      userAuthChangeOperations(
        firestore,
        user,
        setUserCredentials,
        setOrderData,
        setBasketData,
        setInitBasketData,
        basketData,
        userCol,
        userCredentials
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  useEffect(() => {
    onAuthStateChanged(auth, async (currentuser: User | null) => {
      setUser(currentuser);
      currentuser !== null && setIsLogged("loggedIn");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setBasketProcessedData(mapBasketData(data, basketData));
    sortProductItems(data, sort, order);
    setProcessedData(data);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const trueValues = useMemo(
    () => ({
      filter,
      setFilter,
      basketData,
      setBasketData,
      data,
      loadLimit,
      setLoadLimit,
      basketProcessedData,
      setBasketProcessedData,
      deliveryOptions,
      setDeliveryOptions,
      paymentOptions,
      setPaymentOptions,
      open,
      setOpen,
      orderData,
      setOrderData,
      order,
      setOrder,
      sort,
      setSort,
      processedData,
      setProcessedData,
      orderLoadLimit,
      setOrderLoadLimit,
      firestore,
      auth,
      user,
      setUser,
      userCredentials,
      setUserCredentials,
      isLogged,
      setIsLogged,
      initBasketData,
    }),
    [
      filter,
      setFilter,
      basketData,
      setBasketData,
      data,
      loadLimit,
      setLoadLimit,
      basketProcessedData,
      setBasketProcessedData,
      deliveryOptions,
      setDeliveryOptions,
      paymentOptions,
      setPaymentOptions,
      open,
      setOpen,
      orderData,
      setOrderData,
      order,
      setOrder,
      sort,
      setSort,
      processedData,
      setProcessedData,
      orderLoadLimit,
      setOrderLoadLimit,
      firestore,
      auth,
      user,
      setUser,
      userCredentials,
      setUserCredentials,
      isLogged,
      setIsLogged,
      initBasketData,
    ]
  );

  return (
    <dataContext.Provider value={trueValues}>{children}</dataContext.Provider>
  );
};
export default ContextProvider;
