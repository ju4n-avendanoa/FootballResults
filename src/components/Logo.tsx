import { GlobeAmericasIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function Logo() {
  return (
    <div className="flex gap-2 items-center">
      <Link href={"/"}>
        <GlobeAmericasIcon color="rgb(74 222 128)" className="w-8 lg:w-10" />
      </Link>
      <Link href={"/"}>
        <h3 className="text-white w-auto text-base md:text-lg">
          Football <span className="text-green-400">Results</span>
        </h3>
      </Link>
    </div>
  );
}

export default Logo;
