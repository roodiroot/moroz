export type SOCIALType = {
  icon: "vk" | "ws" | "tg";
  bg: string;
  link: string | undefined;
};
export const link_list: SOCIALType[] = [
  { icon: "tg", bg: "#0088cc", link: process.env.NEXT_PUBLIC_TG_LINK },
  { icon: "ws", bg: "#8b00ff", link: process.env.NEXT_PUBLIC_WHATSAPP_LINK },
];
