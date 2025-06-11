"use client";

import { cn } from "@/lib/utils";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useMediaQuery } from "@/hooks/use-media-query";
import { usePathname, useRouter } from "next/navigation";
import { useDisableBodyScroll } from "@/hooks/use-disable-body-scroll";

import useMobilMenu from "@/hooks/use-mobil-menu";
import { menu } from "@/routs";

interface MenuMobilProps extends React.HtmlHTMLAttributes<HTMLElement> {}

const MenuMobil: React.FC<MenuMobilProps> = ({ className }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { isOpen, onClose } = useMobilMenu();
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    onClose();
  }, [pathname]);

  useDisableBodyScroll(isOpen);
  if (isDesktop) {
    return null;
  }

  const handleClick = (path: string) => {
    router.push(path);
    onClose();
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-[#F3F4F6] "
          >
            <div className="mx-auto max-w-7xl h-full px-6 pt-36 pb-6">
              <div className="w-full h-full flex flex-col">
                <div className="flex-1">
                  <div className="flex flex-col gap-6 mt-4 items-start">
                    {/* Основное меню */}
                    {menu.main.map((item) => (
                      <button
                        onClick={() => handleClick(item.href)}
                        key={item.name}
                        className={cn(
                          "text-lg font-bold text-primary hover:text-primary/80  text-start",
                          className
                        )}
                      >
                        {item.name}
                      </button>
                    ))}

                    {/* Документация */}
                    {menu.docs.map((item) => (
                      <button
                        onClick={() => handleClick(item.href)}
                        key={item.name}
                        className={cn(
                          "text-lg font-bold text-primary hover:text-primary/80  text-start",
                          className
                        )}
                      >
                        {item.name}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="space-y-3">
                    <div className="text-sm text-gray-500 font-bold">
                      Режим работы:
                      <br /> Пн-Пт: 9:00–20:00, Сб-Вс: 10:00–18:00
                    </div>
                    <div className="text-sm text-gray-500">
                      <a href="tel:+79271881532">+7 (927) 188-15-32</a>
                    </div>
                    <div className="text-sm text-gray-500">
                      <a href="mailto:info@mordovklimat.ru">
                        info@mordovklimat.ru
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default MenuMobil;
