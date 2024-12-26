import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Pricing", href: "/pricing" },
  { label: "Contact", href: "/contact" },
];

export const Nabvar = () => {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-blue-800 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <Link href="/" className="flex items-center flex-shrink-0">
          <HomeIcon size={24} className="mr-2" />
          <span className="font-semibold text-xl tracking-tight">Home</span>
        </Link>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
          {navItems.map((item) => (
            <ActiveLink key={item.label} {...item} />
          ))}
        </div>
      </div>
    </nav>
  );
};
