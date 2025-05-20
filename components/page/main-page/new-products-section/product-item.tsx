import OpenFeedbackButton from "@/components/general/open-feedback-button";

import { Button } from "@/components/ui/button";
import Image from "next/image";

const ProductItem = () => {
  return (
    <div className="overflow-hidden">
      <div className="relative aspect-[28/25] rounded-[20px] bg-[#EFEEF3] overflow-hidden shadow-md p-4">
        <div className="relative w-full h-full">
          <Image
            src="/images/product.png"
            alt="hero-bg"
            width={240}
            height={130}
            className="absolute w-full h-full object-contain"
          />
        </div>
      </div>
      <div className="mt-4">
        <OpenFeedbackButton>
          <h3 className="font-bold text-sm text-balance sm:text-base cursor-pointer">
            Сплит система Royal Clima RCI-PFC30HN
          </h3>
        </OpenFeedbackButton>
        <div className="mt-3 space-y-1 text-balance">
          <div className="flex justify-between gap-4">
            <div className="text-xs text-gray-600">Помещение м²:</div>
            <div className="text-xs text-gray-900 font-bold">26</div>
          </div>
          <div className="flex justify-between gap-4">
            <div className="text-xs text-gray-600">Компрессор:</div>
            <div className="text-xs text-gray-900 font-bold">Инвертор</div>
          </div>
          <div className="flex justify-between gap-4">
            <div className="text-xs text-gray-600">WiFi адаптер:</div>
            <div className="text-xs text-gray-900 font-bold">Да</div>
          </div>
        </div>
        <div className="flex justify-between items-end mt-4">
          <div className="text-lg font-bold text-primary">
            {new Intl.NumberFormat("ru").format(46600)} руб.
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
