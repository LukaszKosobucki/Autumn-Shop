import { User } from "firebase/auth";
import { collection, doc, Firestore, writeBatch } from "firebase/firestore";
import { basketType } from "../../types/basketType";

export const deleteBasketItemsFromUser = (
  firestore: Firestore,
  user: User,
  basketData: basketType[]
) => {
  const basketCol = collection(firestore, `users/${user?.uid}/basket`);
  const batch = writeBatch(firestore);
  basketData.forEach((basketItem) => {
    if (basketItem.uid !== undefined) {
      const docRef = doc(basketCol, basketItem.uid);
      batch.delete(docRef);
    }
  });

  batch.commit();
  console.log("deleted");
};
