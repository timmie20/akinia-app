import React from "react";
import Image from "next/image";
import { Input } from "../ui/input";
import { Search, ChevronDown, LogOut } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function Header() {
  return (
    <div className="bg-custom-vanDyke text-custom-white fixed left-0 right-0 top-0 z-50 flex h-14 w-full items-center justify-between py-2 pl-3 pr-8 shadow-md">
      <div className="w-[20%]">
        <Image
          src="/images/akinia-logo-new.png"
          alt="logo"
          width={120}
          height={120}
        />
      </div>
      <div className="relative w-1/3">
        <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
        <Input
          placeholder="Search..."
          className="placeholder:text-custom-white h-8 w-full border-none bg-white/10 pl-8 text-white focus-visible:ring-1 focus-visible:ring-white/50"
        />
      </div>

      <div className="flex w-[20%] items-center justify-end gap-2">
        <Avatar className="size-7">
          <AvatarFallback className="text-black">TO</AvatarFallback>
          <AvatarImage src="https://github?.com/shadcn.png" />
        </Avatar>
        <p className="text-sm font-semibold">Timilehin Olayinka</p>
        <Popover>
          <PopoverTrigger asChild className="cursor-pointer">
            <ChevronDown size={20} />
          </PopoverTrigger>
          <PopoverContent className="flex items-center gap-2">
            <span>
              <LogOut color="red" size={16} />
            </span>
            <span className="text-sm">Log out</span>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
}
