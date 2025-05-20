import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ProductItem from "./product-item";

interface ProductsSaleCarouselProps {
  products?: any[];
}

const ProductsSaleCarousel: React.FC<ProductsSaleCarouselProps> = ({
  products,
}) => {
  // console.log(products);
  return (
    <Carousel
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full"
    >
      <div className="">
        <CarouselContent>
          {products
            ? products.map((product, index) => (
                <CarouselItem
                  key={index}
                  className="basis-1/2 pl-2 sm:basis-1/3 md:basis-1/4 sm:pl-4"
                >
                  <div className="p-1 h-full">
                    <ProductItem key={index} />
                  </div>
                </CarouselItem>
              ))
            : null}
        </CarouselContent>
      </div>
      <CarouselPrevious className="left-3 top-[110%]" />
      <CarouselNext className="left-18 top-[110%]" />
    </Carousel>
  );
};

export default ProductsSaleCarousel;
