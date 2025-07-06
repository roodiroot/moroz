import { Metadata } from "next";
import MarkdownContent from "@/components/general/markdown-content";
import HeroForm from "@/components/general/forms/hero-form";

export const metadata: Metadata = {
  title:
    "Контакты МордовКлимат — Установка и Обслуживание Кондиционеров в Саранске",
  description:
    "Свяжитесь с МордовКлимат: телефон, адрес, карта проезда и мессенджеры. Работаем по Саранску и области. Кондиционеры под ключ — от подбора до монтажа и сервиса.",
  icons: "./favicon_io/android-chrome-192x192.png",
};

const content = `# 📞 Контакты МордовКлимат  
### *Свяжитесь с нами удобным способом!*  

---

## 🏢 **Наш офисы**  

### **Головной офис и Сервисный центр**  
📍 **Адрес**: г. Саранск  
🕒 **Часы работы**: Пн-Пт: 9:00–20:00, Сб-Вс: 10:00–18:00  
📞 **Телефон**: +7 (927) 188-15-32

---

## 📲 **Способы связи**  
- **Телефон**: +7 (927) 188-15-32 (многоканальный)  
- **Email**: zakaz@mordovklimat.ru
  - Общие вопросы: info@mordovklimat.ru
  - Техподдержка: support@mordovklimat.ru
  - Оптовые заказы: sales@mordovklimat.ru
- **Telegram**: [@mordovklimat](https://t.me/mordovklimat)  
- **WhatsApp**: [+7 (927) 188-15-32](https://wa.me/+79271881532)

---
`;

const ContactsPage = () => {
  return (
    <div className="pt-[68px] md:pt-[88px] ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        <MarkdownContent content={content} />
        <div className="p-6 sm:p-10 mx-auto rounded-4xl bg-linear-to-b from-[#B3C1D9] to-[#263363] shadow-xl">
          <div className="text-xl sm:text-3xl uppercase font-bold text-center text-white text-shadov-lg">
            Обратная связь
          </div>
          <HeroForm />
        </div>
      </div>
    </div>
  );
};
export default ContactsPage;
