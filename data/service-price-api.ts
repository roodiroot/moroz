import { ServiceResponse } from "./types-api";

type ServiceResponseData<T = ServiceResponse> = {
  success: boolean;
  data?: T;
  error?: string;
};

export const getAllServicePrice = async (
  param?: string
): Promise<ServiceResponseData> => {
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
      return {
        success: false,
        error: `Ошибка ${response.status}: ${response.statusText}`,
      };
    }

    const data = await response.json();
    return { data: data, success: true };
  } catch (error) {
    console.error("Ошибка при получении стоимости услуг:", error);
    return {
      success: false,
      error: JSON.stringify(error) || "Неизвестная ошибка",
    };
  }
};
