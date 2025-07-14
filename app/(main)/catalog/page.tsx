import ProductItem from "@/components/page/main-page/new-products-section/product-item";
import { getAllProducts } from "@/data/products-api";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "МордовКлимат — Каталог Кондиционеров в Саранске",
  description:
    "МордовКлимат предлагает широкий выбор кондиционеров. Установка, обслуживание и ремонт в Саранске.",
  icons: "./favicon_io/android-chrome-192x192.png",
};

const CatalogPage = async () => {
  const params = new URLSearchParams({
    "populate[0]": "images",
    "populate[1]": "brand",
    sort: "createdAt:desc",
    pagination: JSON.stringify({ page: 1, pageSize: 100 }),
  });
  const products = await getAllProducts(params.toString());
  return (
    <div className="pt-[68px] md:pt-[88px] ">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        <h1 className="text-4xl font-bold">Каталог товаров</h1>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-20 md:pb-0 overflow-hidden">
          <div className="mt-9 md:mt-11 grid  gap-x-7 gap-y-14 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.data?.map((i, index) => (
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
        </div>
      </div>
    </div>
  );
};

export default CatalogPage;
