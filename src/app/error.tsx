"use client";

import Link from "next/link";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-zinc-700 min-w-screen">
      <h1 className="mb-4 text-4xl font-bold text-white">
        Oops! Something went wrong
      </h1>
      <p className="mb-6 text-lg text-center text-white">
        Sorry, it seems there was an error on the page.
      </p>
      <Link
        className="px-4 py-2 font-semibold bg-white rounded cursor-pointer hover:bg-green-600"
        href={"/"}
      >
        Back to the home page
      </Link>
    </div>
  );
};

export default ErrorPage;
