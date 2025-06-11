import { Button } from "../ui/button";

import LogoHeader from "../general/logo";
import Link from "next/link";
import Burger from "./mobil-menu/burger";
import { menu } from "@/routs";

const Header = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#A3B0CB]/40 shadow-lg backdrop-blur-sm">
      <nav
        aria-label="Global"
        className="flex max-w-7xl mx-auto items-center justify-between px-6 py-4 lg:px-8"
      >
        <div className="flex">
          <div className="md:hidden">
            <Button asChild className="rounded-full px-7 py-4 font-bold">
              <a href="tel:89999999999">+7 999 999 99 99</a>
            </Button>
          </div>
          <div className="hidden md:flex">
            <LogoHeader />
          </div>
        </div>
        <div className="flex md:hidden">
          <Burger />
        </div>
        <div className="hidden md:flex md:flex-1 md:justify-center md:gap-x-8">
          {menu.main.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm/6 font-bold text-primary hover:text-primary/80 inline-block px-2 py-1"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden md:flex md:justify-end">
          <Button
            asChild
            className="rounded-full px-7 py-4 font-bold text-xl h-[56px]"
          >
            <a href="tel:+79271881532">+7 (927) 188-15-32</a>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
