"use server";

import { z } from "zod";

import { sendNotification } from "@/lib/telegram";
import {
  formContactsSchema,
  formPromptSchema,
  formProfileSchema,
} from "@/schemas";

export const sendMessagePopup = async (
  value: z.infer<typeof formProfileSchema>,
  data?: string
) => {
  try {
    await sendNotification(
      `<b>SITE.RU</b> Заявка от ${value?.name} ${value?.phone}. ${data || ""}`
    );
    return { succsess: "Спасибо за заявку, ожидайте звонка!" };
  } catch {
    return { error: "Произошла ошибка, попробуйте еще раз" };
  }
};

export const sendMessagePropmpt = async (
  value: z.infer<typeof formPromptSchema>,
  data?: string
) => {
  try {
    await sendNotification(
      `<b>SITE.RU</b> Быстрая заявка ${value?.phone}. ${data}`
    );
    return { succsess: "Спасибо за заявку, ожидайте звонка!" };
  } catch {
    return { error: "Произошла ошибка, попробуйте еще раз" };
  }
};
export const sendMessageFedback = async (
  value: z.infer<typeof formContactsSchema>,
  data?: string
) => {
  try {
    await sendNotification(
      `<b>SITE.RU</b> Обратная связь от ${value?.name}. ${
        value?.email
      }. <b>Сообщение от пользователя:</b> <i>${value?.message}</i> ${
        data || ""
      }`
    );
    return { succsess: "Спасибо за обратную связь, для нас это важно!" };
  } catch {
    return { error: "Произошла ошибка, попробуйте еще раз" };
  }
};
