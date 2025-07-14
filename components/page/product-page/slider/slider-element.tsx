"use client";

import { memo, useCallback, useEffect, useState } from "react";

import { type CarouselApi } from "@/components/ui/carousel";
import SliderElementThumb from "./slider-element-thumb";
import SliderElementMainImg from "./slider-element-main-img";

interface SliderElementProps extends React.HtmlHTMLAttributes<HTMLElement> {
  images: { src: string; alt: string }[];
}

const SliderElement: React.FC<SliderElementProps> = memo(({ images }) => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const scroll = useCallback(
    (index: number) => {
      api?.scrollTo(index);
    },
    [api]
  );

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="flex gap-3 lg:w-2xl">
      <div className="mx-auto hidden sm:block ">
        <SliderElementThumb list={images} scroll={scroll} current={current} />
      </div>
      <div className="flex-1 overflow-hidden">
        <SliderElementMainImg list={images} setApi={setApi} />
      </div>
    </div>
  );
});

SliderElement.displayName = "SliderElement";

export default SliderElement;
