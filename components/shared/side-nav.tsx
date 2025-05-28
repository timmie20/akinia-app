"use client";
import React from "react";

import {
  House,
  Building2,
  Handshake,
  CircleDollarSign,
  Contact,
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  {
    id: 1,
    label: "Home",
    path: "/",
    icon: House,
  },
  {
    id: 2,
    label: "Companies",
    path: "/companies",
    icon: Building2,
  },
  {
    id: 3,
    label: "Investors",
    path: "/investors",
    icon: Handshake,
  },
  {
    id: 4,
    label: "Funds",
    path: "/funds",
    icon: CircleDollarSign,
  },
  {
    id: 5,
    label: "Contacts",
    path: "/contacts",
    icon: Contact,
  },
];

export default function SideNav() {
  const pathname = usePathname();

  const router = useRouter();

  const handleNavigate = (path: string) => {
    router.push(path);
  };
  return (
    <div className="border-custom-umber/30 fixed left-0 top-14 h-[calc(100vh-3.5rem)] w-[250px] border-r-[1px] bg-background px-4 shadow-sm">
      <nav className="mt-6">
        <p className="mb-2 ml-4 text-sm text-slate-500">Explore</p>
        <ul className="flex flex-col items-start gap-2 text-left">
          {navItems.map(({ id, label, path, icon: Icon }) => {
            const isActive = pathname === path;

            return (
              <li
                key={id}
                className={`flex h-8 w-full cursor-pointer items-center gap-1 rounded-md text-sm transition-all duration-100 ${
                  isActive
                    ? "bg-custom-umber text-custom-white font-medium"
                    : "text-custom-umber hover:bg-slate-100"
                }`}
                onClick={() => handleNavigate(path)}
              >
                <span></span>
                <span className="flex size-10 items-center justify-center rounded-full">
                  <Icon size={18} />
                </span>
                <span>{label}</span>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
