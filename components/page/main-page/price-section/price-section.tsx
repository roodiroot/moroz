import GeneralTitle from "@/components/general/title";
import { Button } from "@/components/ui/button";

const PriceSection = () => {
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
              <tr className="bg-white">
                <td className="w-full max-w-0 py-4 pr-3 pl-6 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none text-balance">
                  Установка. Магистраль до 4м*
                  <dl className="font-normal md:hidden">
                    <dt className="sr-only">Модели кондиционеров</dt>
                    <dd className="mt-1 text-ellipsis whitespace-nowrap overflow-hidden text-gray-600">
                      07-09 BTU или до 26м²
                    </dd>
                  </dl>
                </td>
                <td className="hidden px-3 py-4 text-sm md:table-cell">
                  07-09 BTU или до 26м²
                </td>
                <td className="px-3 py-4 text-sm">8&nbsp;500,00&nbsp;₽</td>
                <td className="py-4 pl-3 pr-4 text-right text-smfont-medium flex justify-end">
                  <button className="text-primary hidden sm:block">
                    Подробнее
                  </button>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="w-full max-w-0 py-4 pr-3 pl-6 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none text-balance">
                  Установка. Магистраль до 4м*
                  <dl className="font-normal md:hidden">
                    <dt className="sr-only">Модели кондиционеров</dt>
                    <dd className="mt-1 text-ellipsis whitespace-nowrap overflow-hidden text-gray-600">
                      07-09 BTU или до 26м²
                    </dd>
                  </dl>
                </td>
                <td className="hidden px-3 py-4 text-sm md:table-cell">
                  07-09 BTU или до 26м²
                </td>
                <td className="px-3 py-4 text-sm">8&nbsp;500,00&nbsp;₽</td>
                <td className="py-4 pl-3 pr-4 text-right text-smfont-medium flex justify-end">
                  <button className="text-primary hidden sm:block">
                    Подробнее
                  </button>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="w-full max-w-0 py-4 pr-3 pl-6 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none text-balance">
                  Установка. Магистраль до 4м*
                  <dl className="font-normal md:hidden">
                    <dt className="sr-only">Модели кондиционеров</dt>
                    <dd className="mt-1 text-ellipsis whitespace-nowrap overflow-hidden text-gray-600">
                      07-09 BTU или до 26м²
                    </dd>
                  </dl>
                </td>
                <td className="hidden px-3 py-4 text-sm md:table-cell">
                  07-09 BTU или до 26м²
                </td>
                <td className="px-3 py-4 text-sm">8&nbsp;500,00&nbsp;₽</td>
                <td className="py-4 pl-3 pr-4 text-right text-smfont-medium flex justify-end">
                  <button className="text-primary hidden sm:block">
                    Подробнее
                  </button>
                </td>
              </tr>
              <tr className="bg-white">
                <td className="w-full max-w-0 py-4 pr-3 pl-6 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none text-balance">
                  Установка. Магистраль до 4м*
                  <dl className="font-normal md:hidden">
                    <dt className="sr-only">Модели кондиционеров</dt>
                    <dd className="mt-1 text-ellipsis whitespace-nowrap overflow-hidden text-gray-600">
                      07-09 BTU или до 26м²
                    </dd>
                  </dl>
                </td>
                <td className="hidden px-3 py-4 text-sm md:table-cell">
                  07-09 BTU или до 26м²
                </td>
                <td className="px-3 py-4 text-sm">8&nbsp;500,00&nbsp;₽</td>
                <td className="py-4 pl-3 pr-4 text-right text-smfont-medium flex justify-end">
                  <button className="text-primary hidden sm:block">
                    Подробнее
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-10 px-6 lg:px-8">
        <div className=" sm:px-0 sm:max-w-7xl sm:mx-auto">
          <Button asChild className="rounded-full px-7 py-4 font-bold">
            <a href="tel:89999999999">+7 999 999 99 99</a>
          </Button>
        </div>
      </div>
    </>
  );
};

export default PriceSection;
