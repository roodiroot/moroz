import OpenFeedbackButton from "@/components/general/open-feedback-button";
import CharacteristicModule from "@/components/page/product-page/characteristic-module/characteristic-module";
import OfferModulle from "@/components/page/product-page/offer-modulle/offer-modulle";
import SliderElement from "@/components/page/product-page/slider/slider-element";
import SliderPageSkeleton from "@/components/page/product-page/slider/slider-page-skeleton";
import { Button } from "@/components/ui/button";
import { getProductBySlug } from "@/data/products-api";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const productslug = (await params).slug;
  const product = await getProductBySlug(productslug);

  const defaultImage = "/images/hero-bg.png";
  const productImage = product?.images?.[0]?.url;

  const imageUrl = productImage
    ? `${process.env.NEXT_PUBLIC_URL}${productImage}`
    : defaultImage;

  return {
    title: product.brand?.name + " " + product?.name,
    description: `Преобретайте климатическую технику ${
      product.brand?.name + " " + product?.name
    } в интернет магазине МордовКлимат.`,
    openGraph: {
      title: `${product.brand?.name} ${product?.name}`,
      description: `Кондиционер ${product.brand?.name} ${product?.name} купить с доставкой и установкой в магазине "МордовКлимат".`,
      url: `https://mordovklimat.ru/catalog/${product.slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${product.brand?.name}_${product?.name}_изображение`,
        },
      ],
    },
  };
}

const ConditionerItemPage = async ({ params }: Props) => {
  const productslug = (await params).slug;
  const product = await getProductBySlug(productslug);

  const productImages =
    product.images?.map((image, index) => {
      if (process.env.NEXT_PUBLIC_URL) {
        return {
          src: process.env.NEXT_PUBLIC_URL + image.url,
          alt:
            product.brand?.name + "_" + product.name + "_изображение_" + index,
        };
      } else {
        return { src: "", alt: "" };
      }
    }) || [];

  // console.log("product", product);

  return (
    <div className="pt-[68px] md:pt-[88px]">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <div className="lg:flex lg:gap-x-8 relative">
          <div className="flex-1 relative">
            {productImages ? (
              <SliderElement images={productImages} />
            ) : (
              <SliderPageSkeleton />
            )}
          </div>

          <div className="mt-4 lg:mt-0 w-full sticky top-0 self-start">
            <OfferModulle
              title={product.brand?.name + " " + product.name}
              brand={product.brand?.name}
              square={product.square}
              wifi={product.wifi}
              compressor={product.compressor}
              price={product.price}
              description_short={product.description_short || ""}
              btu_capacity={product.btu_capacity}
            />
          </div>
        </div>
        <CharacteristicModule
          square={product.square}
          compressor={product.compressor}
          wifi={product.wifi}
          price={product.price}
          btu_capacity={product.btu_capacity}
          refrigerant_type={product.refrigerant_type}
          cooling_power={product.cooling_power}
          heating_power={product.heating_power}
          operation_modes={product.operation_modes}
          min_noise_level={product.min_noise_level}
          series={product.series}
          max_line_length={product.max_line_length}
          characteristics={product.caracteristic || []}
          description={product.description || ""}
        />
      </div>
    </div>
  );
};

export default ConditionerItemPage;
