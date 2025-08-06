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
  const { data } = await getProductBySlug(productslug);

  const defaultImage = "/images/hero-bg.png";
  const productImage = data?.images?.[0]?.url;

  const imageUrl = productImage
    ? `${process.env.NEXT_PUBLIC_URL}${productImage}`
    : defaultImage;

  return {
    title: data?.brand?.name + " " + data?.name,
    description: `Преобретайте климатическую технику ${
      data?.brand?.name + " " + data?.name
    } в интернет магазине МордовКлимат.`,
    openGraph: {
      title: `${data?.brand?.name} ${data?.name}`,
      description: `Кондиционер ${data?.brand?.name} ${data?.name} купить с доставкой и установкой в магазине "МордовКлимат".`,
      url: `https://mordovklimat.ru/catalog/${data?.slug}`,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: `${data?.brand?.name}_${data?.name}_изображение`,
        },
      ],
    },
  };
}

const ConditionerItemPage = async ({ params }: Props) => {
  const productslug = (await params).slug;
  const { data, success } = await getProductBySlug(productslug);

  if (!success || !data) {
    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Товар не найден</h1>
      </div>
    );
  }

  const productImages =
    data?.images?.map((image, index) => {
      if (process.env.NEXT_PUBLIC_URL) {
        return {
          src: process.env.NEXT_PUBLIC_URL + image.url,
          alt: data?.brand?.name + "_" + data?.name + "_изображение_" + index,
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
              title={data?.brand?.name + " " + data?.name}
              brand={data?.brand?.name}
              square={data?.square}
              wifi={data?.wifi}
              compressor={data?.compressor}
              price={data?.price}
              description_short={data?.description_short || ""}
              btu_capacity={data?.btu_capacity}
            />
          </div>
        </div>
        <CharacteristicModule
          square={data?.square}
          compressor={data?.compressor}
          wifi={data?.wifi}
          price={data?.price}
          btu_capacity={data?.btu_capacity}
          refrigerant_type={data?.refrigerant_type}
          cooling_power={data?.cooling_power}
          heating_power={data?.heating_power}
          operation_modes={data?.operation_modes}
          min_noise_level={data?.min_noise_level}
          series={data?.series}
          max_line_length={data?.max_line_length}
          characteristics={data?.caracteristic || []}
          description={data?.description || ""}
        />
      </div>
    </div>
  );
};

export default ConditionerItemPage;
