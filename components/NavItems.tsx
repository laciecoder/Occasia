"use client";
import { headerLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavItems() {
  return (
    <ul className="flex flex-col md:flex-row md:items-center items-start justify-between gap-5">
      {headerLinks.map((link) => {
        const pathName = usePathname();
        const isActiveLink = link.route === pathName;
        return (
          <li
            key={link.route}
            className={cn(
              "font-semibold text-lg whitespace-nowrap",
              isActiveLink && "text-primary-500"
            )}
          >
            <Link href={link.route}>{link.label}</Link>
          </li>
        );
      })}
    </ul>
  );
}
