import Link from "next/link";
import Icons from "../utils/icons";
import { cn } from "@/lib/utils";

interface LogoHeaderProps extends React.HTMLAttributes<HTMLAnchorElement> {}

const LogoHeader: React.FC<LogoHeaderProps> = ({ className }) => {
  return (
    <Link href="/" className={cn("-m-1.5 p-1.5", className)}>
      <span className="sr-only">Your Company</span>
      <Icons.logo />
    </Link>
  );
};

export default LogoHeader;
