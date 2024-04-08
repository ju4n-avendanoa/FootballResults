import ImageWithFallback from "../ImageWithFallback";
import Link from "next/link";

function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Link href={"/"}>
        <ImageWithFallback
          src="https://res.cloudinary.com/dhjqarghy/image/upload/v1712289493/football/football-svgrepo-com_gbfxxp.svg"
          width={30}
          height={30}
          alt="logo"
          fallbackSrc=""
          className="bg-green-400 rounded-full h-5 w-5 md:w-7 md:h-7 lg:w-8 lg:h-8"
        />
      </Link>
      <Link href={"/"}>
        <h3 className="w-auto text-xs sm:text-base text-white md:text-lg">
          Football <span className="text-green-400">Results</span>
        </h3>
      </Link>
    </div>
  );
}

export default Logo;
