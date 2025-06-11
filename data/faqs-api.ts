import { FAQResponse } from "./types-api";

export const getAllFAQ = async (): Promise<FAQResponse> => {
  const url = `${process.env.NEXT_PUBLIC_URL}/api/faqs`;

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10000); // Тайм-аут 10 секунд

    const response = await fetch(url, {
      method: "GET",
      signal: controller.signal,
    });

    clearTimeout(timeout);

    if (!response.ok) {
      throw new Error(`Ошибка ${response.status}: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Ошибка при получении FAQ:", error);
    throw error;
  }
};
