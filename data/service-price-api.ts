import { ServiceResponse } from "./types-api";

export const getAllServicePrice = async (
  param?: string
): Promise<ServiceResponse> => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/prices?${param || ""}`;

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
    console.error("Ошибка при получении стоимости услуг:", error);
    throw error;
  }
};
