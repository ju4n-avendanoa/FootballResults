import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-zinc-700 h-screen flex flex-col items-center pt-40 gap-4">
      <h2 className="text-white text-2xl lg:text-4xl font-bold">
        Oops! Something went wrong
      </h2>
      <p className="text-white">
        Sorry, it seems the page you are looking for does not exist
      </p>
      <Link href="/" className="bg-white py-2 px-4 rounded-md">
        Return Home
      </Link>
    </div>
  );
}
