import { Metadata } from "next";
import MarkdownContent from "@/components/general/markdown-content";

export const metadata: Metadata = {
  title:
    "О компании Kondish — лидер в продаже и установке кондиционеров в Москве",
  description:
    "Kondish — надежный поставщик кондиционеров от ведущих брендов. Профессиональный монтаж, техническое обслуживание и индивидуальный подход. Создаем комфорт в любом помещении!",
  icons: "/kondish.svg",
};

const content = `# 📞 Контакты ООО "ТехноПрогресс"  
### *Свяжитесь с нами удобным способом!*  

---

## 🏢 **Наши офисы и магазины**  

### **Головной офис и шоу-рум**  
📍 **Адрес**: г. Москва, ул. Климатическая, 15 (м. Технопарк)  
🕒 **Часы работы**: Пн-Пт: 9:00–20:00, Сб-Вс: 10:00–18:00  
📞 **Телефон**: +7 (495) 123-45-67  

### **Сервисный центр**  
📍 **Адрес**: г. Москва, пр-т Инженерный, 42, стр. 3  
🕒 **Часы работы**: Пн-Сб: 8:00–19:00  
🔧 **Только по записи**: +7 (495) 765-43-21  

---

## 📲 **Способы связи**  
- **Телефон**: +7 (495) 123-45-67 (многоканальный)  
- **Email**:  
  - Общие вопросы: info@technoprogress.ru  
  - Техподдержка: support@technoprogress.ru  
  - Оптовые заказы: sales@technoprogress.ru  
- **Telegram**: [@technoprogress_bot](https://t.me/technoprogress_bot)  
- **WhatsApp**: +7 (999) 123-45-67  

---

## 🌐 **Социальные сети**  
- **ВКонтакте**: [vk.com/technoprogress](https://vk.com/technoprogress)  
- **Instagram**: [@technoprogress](https://instagram.com/technoprogress)  
- **YouTube**: [Канал "ТехноПрогресс"](https://youtube.com/technoprogress)  

---

## 📍 **Как нас найти**  
[![Карта](https://via.placeholder.com/800x400?text=Карта+офиса+на+ул.+Климатическая)](https://yandex.ru/maps)  
*Нажмите на карту для просмотра в Яндекс.Картах*  

---

## ✉️ **Обратная связь**  
Хотите задать вопрос или оставить отзыв? Заполните форму ниже:  

`;

const ContactsPage = () => {
  return (
    <div className="pt-[68px] md:pt-[88px] ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        <MarkdownContent content={content} />
      </div>
    </div>
  );
};
export default ContactsPage;
