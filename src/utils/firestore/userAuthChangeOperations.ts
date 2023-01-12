import { User } from "firebase/auth";
import {
  CollectionReference,
  doc,
  DocumentData,
  Firestore,
  getDoc,
  setDoc,
} from "firebase/firestore";
import { IuserCreds } from "../../interfaces/IuserCreds";
import { basketType } from "../../types/basketType";
import { orderType } from "../../types/orderType";
import { getDataIfUserExists } from "./getDataIfUserExists";
import { setBasketItemsOfAUser } from "./setBasketItemsOfAUser";

export const userAuthChangeOperations = async (
  firestore: Firestore,
  user: User | null,
  setUserCredentials: React.Dispatch<React.SetStateAction<IuserCreds>>,
  setOrderData: React.Dispatch<React.SetStateAction<orderType[]>>,
  setBasketData: React.Dispatch<React.SetStateAction<basketType[]>>,
  setInitBasketData: React.Dispatch<React.SetStateAction<basketType[]>>,
  basketData: basketType[],
  userCol: CollectionReference<DocumentData>,
  userCredentials: IuserCreds
) => {
  try {
    const docRef = doc(userCol, user?.uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      user &&
        getDataIfUserExists(
          docSnap,
          firestore,
          user,
          setUserCredentials,
          setOrderData,
          setBasketData,
          setInitBasketData
        );
    } else {
      setDoc(docRef, userCredentials);
      if (basketData.length > 0) {
        user && setBasketItemsOfAUser(firestore, user, basketData);
      }
    }
  } catch (error) {
    console.log(error);
  }
  if (user === null) {
    setOrderData([]);
    setUserCredentials({});
    setBasketData(JSON.parse(localStorage.getItem("basketData") || "[]"));
    setInitBasketData([]);
  }
};
