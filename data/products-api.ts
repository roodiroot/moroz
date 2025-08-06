import { ConditionerItem, ConditionerResponse } from "./types-api";

type ConditionerResponseData<T = ConditionerResponse> = {
  success: boolean;
  data?: T;
  error?: string;
};

type ConditionerItemData<T = ConditionerItem> = {
  success: boolean;
  data?: T;
  error?: string;
};

export const getAllProducts = async (
  param?: string
): Promise<ConditionerResponseData> => {
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
      return {
        success: false,
        error: `Ошибка ${response.status}: ${response.statusText}`,
      };
    }

    const data = await response.json();
    return { data: data, success: true };
  } catch (error) {
    console.error("Ошибка при получении товаров:", error);
    return {
      success: false,
      error: JSON.stringify(error) || "Неизвестная ошибка",
    };
  }
};

export const getProductBySlug = async (
  slug: string
): Promise<ConditionerItemData> => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/products/${slug}`;

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
      return {
        success: false,
        error: `Ошибка ${response.status}: ${response.statusText}`,
      };
    }

    const data = await response.json();
    return { data: data, success: true };
  } catch (error) {
    console.error("Ошибка при получении товаров:", error);
    return {
      success: false,
      error: JSON.stringify(error) || "Неизвестная ошибка",
    };
  }
};
