import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

export async function getProductCategories() {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const productsByCategory = {};

    querySnapshot.forEach((doc) => {
      const product = { id: doc.id, ...doc.data() };
      const category = product.category || "other";

      if (!productsByCategory[category]) {
        productsByCategory[category] = [];
      }
      productsByCategory[category].push(product);
    });

    // Convert to the expected format
    const categories = Object.keys(productsByCategory).map((categoryKey) => ({
      id: categoryKey,
      title: categoryKey.charAt(0).toUpperCase() + categoryKey.slice(1),
      cover:
        productsByCategory[categoryKey][0]?.image ||
        "/images/products/cover.jpg",
      products: productsByCategory[categoryKey],
    }));

    return categories;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}

export async function getAllProducts() {
  try {
    const querySnapshot = await getDocs(collection(db, "products"));
    const products = [];
    querySnapshot.forEach((doc) => {
      products.push({ id: doc.id, ...doc.data() });
    });
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
}
