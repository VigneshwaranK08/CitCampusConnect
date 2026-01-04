import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase";

export const getEvents = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, "events"));

    return querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
  } catch (error) {
    console.error("Error fetching events:", error);
    return [];
  }
};