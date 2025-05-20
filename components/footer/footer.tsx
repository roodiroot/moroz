import { menu } from "@/routs";
import LogoFooter from "../general/logo-footer";
import OpenFeedbackButton from "../general/open-feedback-button";

import { Button } from "../ui/button";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="px-0 pt-10 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto py-14 rounded-none bg-linear-to-b from-[#B3C1D9] to-[#263363] shadow-xl md:rounded-[40px]">
        <div className="px-6 py-10 mb-10  flex flex-col gap-y-10  text-balance border-b border-[#737D9B] md:flex-row md:gap-x-14 md:px-14">
          <div className="flex-1 ">
            <div className="max-w-md">
              <LogoFooter />
              <p className="text-white font-bold text-3xl mt-6">
                Устанавливаем и обслуживаем климатическую технику
              </p>
            </div>
          </div>
          <div className="max-w-xs text-white text-lg">
            <h4 className="font-bold">Покупателю</h4>
            <ul className="mt-5 space-y-4">
              {menu.docs.map((i, index) => (
                <li key={index}>
                  <a target="_blank" href={i.href}>
                    {i.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="max-w-xs text-white text-lg">
            <h4 className="font-bold">Меню</h4>
            <ul className="mt-5 space-y-4">
              {menu.main.map((i, index) => (
                <li key={index}>
                  <Link href={i.href}>{i.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="px-6 md:px-14 flex justify-end">
          <OpenFeedbackButton>
            <Button>Вызвать мастера</Button>
          </OpenFeedbackButton>
        </div>
      </div>
      <div className="py-6 px-6 max-w-7xl mx-auto md:px-0">
        <p className="text-gray-500 text-sm">© 2025 Все права защищены.</p>
      </div>
    </div>
  );
};

export default Footer;
