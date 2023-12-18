"use client";

import { useRouter } from "next/navigation";

const ErrorPage = () => {
  const route = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-green-800 min-w-screen">
      <h1 className="mb-4 text-4xl font-bold text-white">
        Oops! Something went wrong
      </h1>
      <p className="mb-6 text-lg text-center text-white">
        Sorry, it seems there was an error on the page.
      </p>
      <button
        className="px-4 py-2 font-semibold text-white bg-green-500 rounded cursor-pointer hover:bg-green-600"
        onClick={() => {
          route.push("/");
        }}
      >
        Back to the home page
      </button>
    </div>
  );
};

export default ErrorPage;
