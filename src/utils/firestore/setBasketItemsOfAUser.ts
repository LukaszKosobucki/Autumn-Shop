import { User } from "firebase/auth";
import { collection, doc, Firestore, writeBatch } from "firebase/firestore";
import { basketType } from "../../types/basketType";

export const setBasketItemsOfAUser = (
  firestore: Firestore,
  user: User,
  basketData: basketType[],
  initBasketData: basketType[] = [] as basketType[]
) => {
  const basketCol = collection(firestore, `users/${user?.uid}/basket`);
  const batch = writeBatch(firestore);
  initBasketData.forEach((dbCartItem) => {
    if (!basketData.includes(dbCartItem)) {
      const uid = dbCartItem.uid;
      const docRef = doc(basketCol, uid);
      batch.delete(docRef);
    }
  });
  basketData.forEach(({ uid, id, quantity }) => {
    if (uid === undefined) {
      const docRef = doc(basketCol);
      batch.set(docRef, { id, quantity });
    } else {
      const docRef = doc(basketCol, uid);
      batch.set(docRef, { id, quantity });
    }
  });
  batch.commit();
};
