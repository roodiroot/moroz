import OpenFeedbackButton from "@/components/general/open-feedback-button";

import { Button } from "@/components/ui/button";
import Image from "next/image";

interface ProductItemProps extends React.HTMLAttributes<HTMLDivElement> {
  name: string;
  slug: string;
  square?: string;
  compressor?: string;
  wifi?: string;
  price?: string;
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
  brand,
  image,
  className,
  ...props
}) => {
  const imageUrl = image
    ? process.env.NEXT_PUBLIC_URL + image
    : "/images/hero-bg.png";

  return (
    <div {...props} className="overflow-hidden">
      <div className="relative aspect-[28/25] rounded-[20px] bg-white overflow-hidden border border-gray-200">
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
      <div className="mt-4">
        <OpenFeedbackButton>
          <h3 className="font-bold text-sm text-balance sm:text-base cursor-pointer">
            {brand} {name}
          </h3>
        </OpenFeedbackButton>
        <div className="mt-3 space-y-1 text-balance">
          <div className="flex justify-between gap-4">
            <div className="text-xs text-gray-600">Помещение м²:</div>
            <div className="text-xs text-gray-900 font-bold">{square}</div>
          </div>
          <div className="flex justify-between gap-4">
            <div className="text-xs text-gray-600">Компрессор:</div>
            <div className="text-xs text-gray-900 font-bold">{compressor}</div>
          </div>
          <div className="flex justify-between gap-4">
            <div className="text-xs text-gray-600">WiFi адаптер:</div>
            <div className="text-xs text-gray-900 font-bold">{wifi}</div>
          </div>
        </div>
        <div className="flex justify-between items-end mt-4">
          <div className="text-lg font-bold text-primary">
            {new Intl.NumberFormat("ru").format(Number(price))} руб.
          </div>
          <OpenFeedbackButton>
            <Button className="sm:block hidden">Подробнее</Button>
          </OpenFeedbackButton>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
