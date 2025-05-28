import React from "react";
import { Building2, CircleDollarSign, Briefcase } from "lucide-react";

type TagType = "company" | "funding" | "sector";

interface TagsProps {
  type: TagType;
  label: string;
  className?: string;
}

const tagIcons = {
  company: Building2,
  funding: CircleDollarSign,
  sector: Briefcase,
};

export default function Tags({ type, label, className = "" }: TagsProps) {
  const Icon = tagIcons[type];
  const bgColor =
    type === "company"
      ? "bg-custom-umber text-custom-white"
      : "bg-zinc-200 text-black";

  return (
    <div className={`inline-flex ${className}`}>
      <div
        className={`${bgColor} flex w-fit items-center gap-1 rounded-full px-2 py-1 text-xs`}
      >
        <Icon size={13} />
        <span>{label}</span>
      </div>
    </div>
  );
}
