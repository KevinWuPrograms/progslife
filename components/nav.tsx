import Link from "next/link";
import * as React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

export default function Nav() {
  return (
    <div className="w-full h-[2rem]  border-b-2 mb-4 flex items-center flex-row py-8 ">
      <a
        className="text-3xl font-bold block w-1/2
      "
        href="https://www.youtube.com/channel/UCqgdQWNBL9j2j-bCN6NqBFw"
      >
        ProgsLife
      </a>
      <div className=" flex w-1/2 justify-end px-4 items-center flex-row h-full gap-7">
        <Link
          href={"/"}
          className="font-semibold text-black/60 dark:text-white/60"
        >
          About
        </Link>
        <Link
          href={"/"}
          className="font-semibold text-black/60 dark:text-white/60"
        >
          Analytics
        </Link>
        <ModeToggle />
      </div>
    </div>
  );
}
