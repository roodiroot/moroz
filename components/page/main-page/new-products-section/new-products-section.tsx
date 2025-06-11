"use client";

import ProductItem from "./product-item";
import GeneralTitle from "@/components/general/title";
import ProductsSaleCarousel from "./products-carousel";

import { useMediaQuery } from "@/hooks/use-media-query";
import { ConditionerItem } from "@/data/types-api";

interface NewProductsSectionProps {
  products?: ConditionerItem[];
}

const NewProductsSection: React.FC<NewProductsSectionProps> = ({
  products,
}) => {
  const isDesctop = useMediaQuery("(min-width: 768px)");

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 md:pt-44 pb-20 md:pb-0 overflow-hidden">
      <GeneralTitle subtitle="Товары со скидкой" />
      {isDesctop ? (
        <div className="mt-9 md:mt-11 grid  gap-x-7 gap-y-14 md:grid-cols-3 lg:grid-cols-4">
          {products?.map((i, index) => (
            <ProductItem
              key={index}
              name={i.name}
              brand={i?.brand?.name}
              slug={i.slug}
              square={i.square}
              compressor={i.compressor}
              wifi={i.wifi}
              price={i.price}
              image={i.images && i.images[0]?.url}
            />
          ))}
        </div>
      ) : (
        <div className="mt-9 -ml-4 relative z-10">
          <ProductsSaleCarousel products={products} />
        </div>
      )}
    </div>
  );
};

export default NewProductsSection;
