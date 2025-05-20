import Image from "next/image";

import HeroForm from "@/components/general/forms/hero-form";

const HeroSection = () => {
  return (
    <div className="bg-linear-to-b from-[#B3C1D9] to-[#263363] shadow-xl overflow-hidden">
      <div className="pt-[68px] md:pt-[88px] ">
        <div className="-mx-10 relative h-[189px] sm:h-[250px] lg:h-[415px] mt-4 sm:max-w-[972px] sm:mx-auto">
          <Image
            src="/images/elips.png"
            alt="hero-bg"
            width={972}
            height={500}
            className="absolute w-full h-full"
          />
          <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10  text-white text-center flex flex-col">
            <span className="text-xl sm:text-4xl lg:text-5xl font-bold text-shadow-lg">
              От заправки до ремонта
            </span>
            <span className="text-3xl mt-1 sm:text-5xl lg:text-7xl font-bold  text-shadow-lg uppercase lg:mt-5">
              кондиционеров
            </span>
            <span className="text-sm mt-3 lg:text-2xl lg:mt-10  text-shadow-lg uppercase">
              с гарантией лучшей цены в Саранске
            </span>
          </h1>
        </div>
      </div>
      <div className="relative h-[216px] sm:h-[250px] lg:h-[436px]">
        <Image
          src="/images/conditionair.png"
          alt="hero-bg"
          width={972}
          height={500}
          className="absolute z-0 -top-4 left-1/2 -translate-x-1/2 w-full h-full object-contain  pointer-events-none"
        />
        <Image
          src="/images/smoke.png"
          alt="hero-bg"
          width={1400}
          height={570}
          className="absolute animate-wiggle-reverse opacity-60 z-10 top-10 left-1/2 -translate-x-1/2 w-[140%] h-[140%] object-contain  pointer-events-none"
        />
        <Image
          src="/images/smoke.png"
          alt="hero-bg"
          width={1400}
          height={570}
          className="absolute animate-wiggle rotate-180 opacity-70 z-10 top-10 left-1/2 -translate-x-1/2 w-[140%] h-[140%] object-contain pointer-events-none"
        />
      </div>
      <div className="px-6 pb-10">
        <div className="p-6 sm:p-10 max-w-5xl mx-auto rounded-4xl bg-linear-to-b from-[#FFFFFF]/14 to-[#2A3767]/57 shadow-xl">
          <div className="text-xl sm:text-3xl uppercase font-bold text-center text-white text-shadov-lg">
            Забронировать выезд мастера
          </div>
          <HeroForm />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
