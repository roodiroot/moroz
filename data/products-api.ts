import { ConditionerItem, ConditionerResponse } from "./types-api";

export const getAllProducts = async (
  param?: string
): Promise<ConditionerResponse> => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/products?${param || ""}`;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000); // Тайм-аут 10 секунд

    const response = await fetch(url, {
      method: "GET",
      signal: controller.signal,
      cache: "no-cache",
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при получении товаров:", error);
    throw error;
  }
};
export const getProductBySlug = async (
  slug: string
): Promise<ConditionerItem> => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/product/${slug}`;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000); // Тайм-аут 10 секунд

    const response = await fetch(url, {
      method: "GET",
      signal: controller.signal,
      cache: "no-cache",
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при получении товаров:", error);
    throw error;
  }
};
