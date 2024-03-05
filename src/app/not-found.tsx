import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center h-screen gap-4 pt-40 bg-zinc-700">
      <h2 className="text-2xl font-bold text-white lg:text-4xl">
        Oops! Something went wrong
      </h2>
      <p className="text-white">
        Sorry, it seems the page you are looking for does not exist
      </p>
      <Link href="/" className="px-4 py-2 bg-white rounded-md">
        Return Home
      </Link>
    </div>
  );
}
