import { GlobeAmericasIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Link href={"/"}>
        <GlobeAmericasIcon color="rgb(74 222 128)" className="w-8 lg:w-10" />
      </Link>
      <Link href={"/"}>
        <h3 className="w-auto text-base text-white md:text-lg">
          Football <span className="text-green-400">Results</span>
        </h3>
      </Link>
    </div>
  );
}

export default Logo;
