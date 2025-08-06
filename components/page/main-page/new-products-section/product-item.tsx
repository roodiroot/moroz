import OpenFeedbackButton from "@/components/general/open-feedback-button";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

interface ProductItemProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  slug: string;
  square?: string;
  compressor?: string;
  wifi?: string;
  price?: string;
  old_price?: string;
  image?: string;
  brand?: string;
}

const ProductItem: React.FC<ProductItemProps> = ({
  name,
  slug,
  square,
  compressor,
  wifi,
  price,
  old_price,
  brand,
  image,
  className,
  ...props
}) => {
  const imageUrl = image
    ? process.env.NEXT_PUBLIC_URL + image
    : "/images/hero-bg.png";

  const sale = old_price
    ? ((Number(price) - Number(old_price)) * 100) / Number(price)
    : 0;

  return (
    <div {...props} className="overflow-hidden h-full flex flex-col">
      <div className="relative aspect-[28/25] rounded-[20px] bg-white overflow-hidden border border-gray-200">
        <div className="p-2 absolute z-10 bottom-0 inset-x-0 flex gap-1 flex-row flex-wrap ">
          {compressor === "инвертор" && (
            <div className="text-xs font-bold text-rose-500 rounded-md px-2 py-1 border-2 border-rose-500 bg-rose-300 shadow">
              Инвертор
            </div>
          )}
          {wifi === "да" && (
            <div className="text-xs font-bold text-sky-500 rounded-md px-2 py-1 border-2 border-sky-500 bg-sky-300 shadow">
              Wi-Fi
            </div>
          )}
        </div>
        <div className="p-2 absolute z-10 top-0 inset-x-0 flex gap-1 flex-row flex-wrap ">
          {old_price && (
            <div className="text-xs font-bold text-white rounded-md px-2 py-1 border-2 border-rose-500 bg-rose-500 shadow">
              {sale.toFixed(0)}% скидка
            </div>
          )}
        </div>
        <div className="relative w-full h-full">
          <Image
            src={imageUrl}
            alt={name + "_image"}
            width={300}
            height={300}
            className="absolute w-full h-full object-contain"
          />
        </div>
        <div className="bg-[#ABABAB]/10 absolute inset-0"></div>
      </div>
      <div className="mt-4 flex-1 flex flex-col justify-between">
        <Link href={`/catalog/${slug}`}>
          <h3 className="font-bold text-sm text-balance sm:text-base cursor-pointer">
            {brand} {name}
          </h3>
        </Link>
        <div className=" items-end">
          <div className="mt-3 space-y-1 text-balance">
            <div className="flex justify-between gap-4">
              <div className="text-xs text-gray-600">Помещение м²:</div>
              <div className="text-xs text-gray-900 font-bold">{square}</div>
            </div>
            <div className="flex justify-between gap-4">
              <div className="text-xs text-gray-600">Компрессор:</div>
              <div className="text-xs text-gray-900 font-bold">
                {compressor}
              </div>
            </div>
            <div className="flex justify-between gap-4">
              <div className="text-xs text-gray-600">Поддержка Wi-fi:</div>
              <div className="text-xs text-gray-900 font-bold">{wifi}</div>
            </div>
          </div>
          <div className="flex justify-between items-end mt-4">
            <div className="text-lg font-bold text-primary">
              {new Intl.NumberFormat("ru").format(Number(price))} руб.
            </div>
            <Link href={`/catalog/${slug}`}>
              <Button className="sm:block hidden">Подробнее</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
