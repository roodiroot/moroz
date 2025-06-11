import GeneralTitle from "@/components/general/title";
import { FAQItem } from "@/data/types-api";

interface FAQSectionProps {
  faqs?: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({ faqs }) => {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
      <GeneralTitle
        title="Вопросы"
        subtitle="Важные вопросы которые возникают у наших клиентов"
        description="Ниже — ответы на самые частые вопросы наших клиентов: про сроки, цены, гарантию и обслуживание. Если не нашли нужной информации — просто напишите нам, и мы всё расскажем."
      />
      <div className="mt-16">
        <div className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-3 lg:gap-x-10">
          {faqs?.map((item, index) => (
            <div key={index}>
              <dt>
                <h3 className="text-base font-bold">{item.question}</h3>
              </dt>
              <dd className="mt-2 text-base leading-7 text-gray-600">
                {item.answer}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
