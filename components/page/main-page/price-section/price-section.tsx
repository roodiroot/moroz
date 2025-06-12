import GeneralTitle from "@/components/general/title";
import { Button } from "@/components/ui/button";
import { ServiceItem } from "@/data/types-api";
import PriceRow from "./price-row";

interface PriceSectionProps {
  prices?: ServiceItem[];
}
const PriceSection: React.FC<PriceSectionProps> = ({ prices }) => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 md:pt-44">
        <GeneralTitle
          title="Цена"
          subtitle="От установки до обслуживания"
          description="Продажа, установка, ремонт и обслуживание — работаем быстро, аккуратно и с гарантией."
        />
      </div>
      <div className="sm:px-6 lg:px-8">
        <div className="border sm:rounded-4xl sm:max-w-7xl sm:mx-auto overflow-hidden mt-16">
          <table className="min-w-full divide-y divide-gray-300 border-b">
            <thead>
              <tr className="bg-[#F9FAFB]">
                <th className="py-3.5 pl-6 pr-3 text-left text-sm font-semibold text-gray-900">
                  Услуга
                </th>
                <th className="hidden px-3 py-3.5 text-left text-sm font-bold text-gray-900 md:table-cell">
                  Модели кондиционеров
                </th>
                <th className="px-3 py-3.5 text-left text-sm font-bold text-gray-900">
                  Цена
                </th>
                <th className="relative py-3.5 pl-3 pr-4 sm:pr-0"></th>
              </tr>
            </thead>
            <tbody className=" divide-y divide-gray-200">
              {prices?.map((item) => (
                <PriceRow
                  key={item.documentId}
                  service={item.service}
                  model_conditionair={item.model_conditionair}
                  price={item.price}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-10 px-6 lg:px-8">
        <div className=" sm:px-0 sm:max-w-7xl sm:mx-auto">
          <Button asChild className="rounded-full px-7 py-4 font-bold">
            <a href="tel:+79271881532">+7 (927) 188-15-32</a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default PriceSection;
