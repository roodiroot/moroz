"use client";

import { motion, AnimatePresence } from "framer-motion";

import { usePathname, useRouter } from "next/navigation";
import { useDisableBodyScroll } from "@/hooks/use-disable-body-scroll";
import { cn } from "@/lib/utils";
import { useEffect } from "react";
import useMobilMenu from "@/hooks/use-mobil-menu";
import { useMediaQuery } from "@/hooks/use-media-query";

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
                    <button
                      onClick={() => handleClick("/")}
                      className={cn(
                        "text-lg font-bold text-primary hover:text-primary/80  text-start",
                        className
                      )}
                    >
                      Главная
                    </button>
                    <button
                      onClick={() => handleClick("/")}
                      className={cn(
                        "text-lg font-bold text-primary hover:text-primary/80  text-start",
                        className
                      )}
                    >
                      О нас
                    </button>

                    <button
                      onClick={() => handleClick("/")}
                      className={cn(
                        "text-lg font-bold text-primary hover:text-primary/80  text-start",
                        className
                      )}
                    >
                      Контакты
                    </button>
                    <button
                      onClick={() => handleClick("/")}
                      className={cn(
                        "text-lg font-bold text-primary hover:text-primary/80  text-start",
                        className
                      )}
                    >
                      Политика конфиденциальности
                    </button>
                    <button
                      onClick={() => handleClick("/")}
                      className={cn(
                        "text-lg font-bold text-primary hover:text-primary/80 text-start",
                        className
                      )}
                    >
                      Согласие на обработку персональных данных
                    </button>
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-200">
                  <div className="space-y-3">
                    <div className="text-sm">
                      Режим работы: Пн-Вс 10:00 - 20:00
                    </div>
                    <div className="text-sm">
                      <a href="tel:89999999999">+7 999 999 99 99</a>
                    </div>
                    <div className="text-sm">
                      <a href="tel:89999999999">info@technoprogress.ru</a>
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
