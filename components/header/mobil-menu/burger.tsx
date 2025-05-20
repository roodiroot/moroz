"use client";

import useMobilMenu from "@/hooks/use-mobil-menu";

import { Button } from "@/components/ui/button";
import { MenuIcon, XIcon } from "lucide-react";

const Burger = () => {
  const { isOpen, toggle } = useMobilMenu();
  return (
    <Button
      size="icon"
      variant="ghost"
      className="hover:bg-white/10"
      onClick={toggle}
    >
      {isOpen ? (
        <XIcon className="size-8 text-white" />
      ) : (
        <MenuIcon className="size-8 text-white" />
      )}
      <span className="sr-only">Open main menu</span>
    </Button>
  );
};

export default Burger;
