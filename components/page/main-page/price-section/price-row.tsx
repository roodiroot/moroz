interface PriceRowProps {
  service: string;
  model_conditionair: string | null;
  price: string;
}

const PriceRow: React.FC<PriceRowProps> = ({
  service,
  model_conditionair,
  price,
}) => {
  return (
    <tr className="bg-white">
      <td className="w-full max-w-0 py-4 pr-3 pl-6 text-sm font-medium text-gray-900 sm:w-auto sm:max-w-none text-balance">
        {service}
        <dl className="font-normal md:hidden">
          <dt className="sr-only">Модели кондиционеров</dt>
          <dd className="mt-1 text-ellipsis whitespace-nowrap overflow-hidden text-gray-600">
            {model_conditionair}
          </dd>
        </dl>
      </td>
      <td className="hidden px-3 py-4 text-sm md:table-cell">
        {model_conditionair}
      </td>
      <td className="px-3 py-4 text-sm whitespace-nowrap  font-bold">
        {new Intl.NumberFormat("ru").format(Number(price))} ₽
      </td>
      <td className="py-4 pl-3 pr-4 text-right text-smfont-medium flex justify-end">
        <button className="text-primary hidden sm:block">Подробнее</button>
      </td>
    </tr>
  );
};

export default PriceRow;
