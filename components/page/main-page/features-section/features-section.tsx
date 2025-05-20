import GeneralTitle from "@/components/general/title";
import {
  AlarmClockPlusIcon,
  BikeIcon,
  BinocularsIcon,
  Biohazard,
  BoltIcon,
  FlameIcon,
  SettingsIcon,
  ShoppingCartIcon,
  SnowflakeIcon,
  WrenchIcon,
} from "lucide-react";
import Image from "next/image";

const featuresList = [
  {
    Icon: WrenchIcon,
    title: "Ремонт кондиционеров.",
    description:
      "Быстро определим неисправность и устраним её. Работаем с любыми брендами.",
  },
  {
    Icon: SettingsIcon,
    title: "Обслуживание и чистка.",
    description:
      "Профилактика, дезинфекция, заправка фреоном. Рекомендуем делать 2 раза в год.",
  },
  {
    Icon: ShoppingCartIcon,
    title: "Продажа кондиционеров.",
    description: "Помогаем выбрать модель под ваш бюджет и потребности.",
  },
  {
    Icon: SnowflakeIcon,
    title: "Установка и монтаж.",
    description:
      "Профессиональный монтаж с гарантией и аккуратной укладкой коммуникаций.",
  },
  {
    Icon: BinocularsIcon,
    title: "Цены без накруток.",
    description: "Стоимость ремонта – от 500 рублей. Без накруток и обмана.",
  },
  {
    Icon: BoltIcon,
    title: "Выезжаю за 30 мин.",
    description: "Быстро приеду в любую точку города и до 30 км от города.",
  },
  {
    Icon: AlarmClockPlusIcon,
    title: "Опыт - более 14 лет.",
    description: "14 лет я профессионально занимаюсь ремонтом кондиционеров.",
  },
  {
    Icon: Biohazard,
    title: "Без посредников.",
    description:
      "Работаю на себя, поэтому мои цены до 40% ниже, чем у сервисных центров.",
  },
  {
    Icon: BikeIcon,
    title: "Быстро и качественно.",
    description:
      "95% поломок я устраняю на дому в вашем присутствии в течение часа.",
  },
  {
    Icon: FlameIcon,
    title: "Даю гарантию до 1 года.",
    description: "Предоставляю гарантию на работу и запчасти до 1 года.",
  },
];

const FeaturesSection = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 md:pt-44">
        <GeneralTitle
          className="md:text-center md:mx-auto"
          title="Услуги"
          subtitle="Всё, что нужно вашему кондиционеру — в одном месте"
          description="Продажа, установка, ремонт и обслуживание — работаем быстро, аккуратно и с гарантией."
        />
      </div>
      <div className="relative pt-16 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <Image
            src="/images/features.jpg"
            alt="hero-bg"
            width={1200}
            height={800}
            className="mb-[-12%] rounded-[20px] md:rounded-[40px] shadow-lg"
          />
          <div className="relative">
            <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-[#F3F4F6] to-[#F3F4F6]/0 pt-[7%]"></div>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl px-6 md:mt-14 lg:px-8">
        <p className="mt-2 text-3xl font-bold tracking-tight text-pretty text-center mx-auto sm:text-4xl lg:mx-0 lg:text-left">
          Почему рекомендуют нас ?
        </p>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
          {featuresList.map((i) => (
            <div key={i.title} className="relative pl-9 lg:last:col-start-2">
              <dt className="inline font-bold text-foreground">
                <i.Icon className="absolute top-1 left-1 size-5 text-primary" />
                {i.title}
              </dt>{" "}
              <dd className="inline">{i.description}</dd>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeaturesSection;
