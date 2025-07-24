import GeneralTitle from "@/components/general/title";
import Image from "next/image";

const PortfolioSection = () => {
  return (
    <div className="pt-24 sm:pt-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <GeneralTitle
          className="md:text-center md:mx-auto"
          title="Портфолио"
          subtitle="Мы отремонтировали более 3 500 кондиционеров"
          description="Наши проекты это наша гордость и наша страсть. С которой мы делаем и устанавливаем климатическую технику для Вас"
        />
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3 lg:grid-rows-2">
          {/* Элемент 1 длинный */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-0 z-10">
              {/* <div className="px-8 pt-8 h-full pb-3 flex flex-col sm:px-10 sm:pt-10 sm:pb-0">
                <div className="flex-1 text-white font-bold text-xl text-shadow-md">
                  ДО
                </div>
                <div className="flex-1 text-white font-bold text-xl text-shadow-md">
                  ПОСЛЕ
                </div>
              </div> */}
              <div className="px-8 pt-8 sm:px-10 sm:pt-10 font-bold text-white text-xl text-shadow-md">
                Чистка и обслуживание кондиционера
              </div>
            </div>
            <div className="relative bg-red-500 flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-l-[calc(2rem+1px)]">
              {/* <Image
                src="/images/before-after-vertical.jpg"
                alt="hero-bg"
                width={563}
                height={837}
                className="size-full object-cover object-top"
              /> */}
              <video
                // controls
                width="600"
                autoPlay
                muted
                loop
                playsInline
                className="size-full object-cover object-top"
              >
                <source src="/videos/video_1.mp4" type="video/mp4" />
                Ваш браузер не поддерживает тег video.
              </video>
            </div>
          </div>

          {/* Элемент 2 короткий */}
          <div className="relative h-[332px] lg:h-auto max-lg:row-start-1">
            <div className="relative flex h-full flex-col overflow-hidden rounded-[12px] max-lg:rounded-t-[40px]">
              <div className="relative z-20 px-8 pt-8 sm:px-10 sm:pt-10 flex">
                <div className="flex-1 text-white font-bold text-xl text-shadow-md">
                  ДО
                </div>
                <div className="flex-1 text-white font-bold text-xl text-shadow-md pl-8">
                  ПОСЛЕ
                </div>
              </div>
              <div className="absolute inset-px rounded-lg shadow-sm">
                <Image
                  src="/images/before-after-gorisont.jpg"
                  alt="hero-bg"
                  width={775}
                  height={434}
                  className="size-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Элемент 3 короткий */}
          <div className="relative h-[332px] lg:h-auto max-lg:row-start-3 lg:col-start-2 lg:row-start-2">
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)]">
              <div className="relative z-20 px-8 pt-8 sm:px-10 sm:pt-10 flex">
                <div className="flex-1 text-white font-bold text-xl text-shadow-md">
                  ДО
                </div>
                <div className="flex-1 text-white font-bold text-xl text-shadow-md pl-8">
                  ПОСЛЕ
                </div>
              </div>
              <div className="absolute inset-px rounded-lg shadow-sm">
                <Image
                  src="/images/before-after-gorisont.jpg"
                  alt="hero-bg"
                  width={775}
                  height={434}
                  className="size-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Элемент 4 длинный */}
          <div className="relative lg:row-span-2">
            <div className="absolute inset-0 z-10">
              <div className="px-8 pt-8 h-full pb-3 flex flex-col sm:px-10 sm:pt-10 sm:pb-0">
                <div className="flex-1 text-white font-bold text-xl text-shadow-md">
                  ДО
                </div>
                <div className="flex-1 text-white font-bold text-xl text-shadow-md">
                  ПОСЛЕ
                </div>
              </div>
            </div>
            <div className="relative flex h-full flex-col overflow-hidden rounded-t-[12px] rounded-b-[40px] lg:rounded-l-[12px] lg:rounded-r-[40px]">
              <Image
                src="/images/before-after-vertical.jpg"
                alt="hero-bg"
                width={563}
                height={837}
                className="size-full object-cover object-top"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortfolioSection;
