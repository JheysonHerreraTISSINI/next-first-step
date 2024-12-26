'use client';

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import style from "./ActiveLink.module.css";

interface ActiveLinkProps {
  href: string;
  label: string;
}

export const ActiveLink = ({ href, label }: ActiveLinkProps) => {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${style.link} ${ pathname === href && style['active-link'] }`}
    >
      {label}
    </Link>
  );
};
