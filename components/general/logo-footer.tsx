import Link from "next/link";
import Icons from "../utils/icons";

const LogoFooter = () => {
  return (
    <Link href="/" className="-m-1.5 p-1.5 flex">
      <span className="sr-only">Your Company</span>
      <Icons.logoNoColor />
    </Link>
  );
};

export default LogoFooter;
