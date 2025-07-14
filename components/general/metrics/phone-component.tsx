"use client";

import { useMediaQuery } from "@/hooks/use-media-query";

interface PhoneLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {}

const PhoneAnchor: React.FC<PhoneLinkProps> = ({ className, ...props }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  const onSubmit = () => {
    if (!isDesktop) {
      //@ts-ignore
      ym(94961323, "reachGoal", "click_phone");
      //   console.log(123);
    }
  };

  return (
    <a
      onClick={onSubmit}
      className={className}
      {...props}
      href="tel:+79271881532"
    >
      +7 (927) 188-15-32
    </a>
  );
};

export default PhoneAnchor;
