"use client";

import { useRouter } from "next/navigation";

const ErrorPage = () => {
  const route = useRouter();

  return (
    <div className="min-h-screen min-w-screen flex flex-col items-center justify-center bg-green-800">
      <h1 className="text-4xl font-bold text-white mb-4">
        Oops! Something went wrong
      </h1>
      <p className="text-lg text-white text-center mb-6">
        Sorry, it seems there was an error on the page.
      </p>
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded cursor-pointer"
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
