"use client";

import Link from "next/link";

type NavLinksProps = {
    href: string;
    onClick?: () => void;
    children: React.ReactNode;
  }

export const NavLinks: React.FC <NavLinksProps>= ({ href, children, onClick }) => {
 

  return (
    <Link href={href} passHref>
    <span
      className="text-white hover:text-white px-3 py-2 rounded-md text-xl font-medium lg:text-xl lg:font-medium"
      onClick={onClick}
    >
      {children}
    </span>
  </Link>
  );
};