import React from "react";
import Image from "next/image";
import Tags from "./ui/tags";

export default function NewsCard() {
  return (
    <div className="flex w-full items-center gap-3 py-3">
      <Image
        src="/images/fultterwave.png"
        width={40}
        height={40}
        className="size-auto rounded-lg"
        alt="image"
      />

      <div>
        <h4 className="text-base font-semibold leading-snug">
          capiton sells minority stake in Dec Group to ICG
        </h4>
        <p className="line-clamp-1 text-sm font-medium text-zinc-500">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Temporibus,
          molestiae? Consequatur provident, enim mollitia
        </p>
        <div className="mt-3 flex items-center gap-2">
          <Tags type="company" label="Tech Corp" />
          <Tags type="funding" label="Series A" />
          <Tags type="sector" label="Fintech" />
        </div>
      </div>
    </div>
  );
}
