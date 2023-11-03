import { GlobeAmericasIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <>
      <Link href={"/"}>
        <GlobeAmericasIcon color="rgb(74 222 128)" className="w-10" />
      </Link>
      <Link href={"/"}>
        <h3 className="text-white ">
          Football <span className="text-green-400">Results</span>
        </h3>
      </Link>
    </>
  );
}

export default Logo;
