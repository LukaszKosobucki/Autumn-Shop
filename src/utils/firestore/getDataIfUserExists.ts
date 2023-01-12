import { User } from "firebase/auth";
import {
  collection,
  DocumentData,
  DocumentSnapshot,
  Firestore,
  getDocs,
} from "firebase/firestore";
import { IuserCreds } from "../../interfaces/IuserCreds";
import { basketType } from "../../types/basketType";
import { orderType } from "../../types/orderType";

export const getDataIfUserExists = async (
  docSnap: DocumentSnapshot<DocumentData>,
  firestore: Firestore,
  user: User,
  setUserCredentials: React.Dispatch<React.SetStateAction<IuserCreds>>,
  setOrderData: React.Dispatch<React.SetStateAction<orderType[]>>,
  setBasketData: React.Dispatch<React.SetStateAction<basketType[]>>,
  setInitBasketData: React.Dispatch<React.SetStateAction<basketType[]>>
) => {
  const orderCol = collection(firestore, `users/${user?.uid}/orders`);
  const basketCol = collection(firestore, `users/${user?.uid}/basket`);
  const orderDocsData = await getDocs(orderCol);
  const basketDocsData = await getDocs(basketCol);
  docSnap.exists() && setUserCredentials(docSnap.data());
  setOrderData(orderDocsData.docs.map((doc) => doc.data() as orderType));
  setBasketData(
    basketDocsData.docs.map((doc) => {
      return { ...doc.data(), uid: doc.id } as basketType;
    })
  );
  setInitBasketData(
    basketDocsData.docs.map((doc) => {
      return { ...doc.data(), uid: doc.id } as basketType;
    })
  );
};
