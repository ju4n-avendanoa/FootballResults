import React from "react";

function LoadingTeamDetails() {
  return (
    <section className="flex flex-col gap-6 xl:w-1/2 w-5/6 md:w-4/5 h-2/3 inset-1/2 transform -translate-x-1/2 -translate-y-1/2 fixed">
      <div className="bg-white p-2 h-full rounded-2xl flex flex-col gap-5 select-none ">
        <div className="bg-gray-200 h-1/2 rounded-xl animate-pulse"></div>
        <div className="flex flex-1 gap-5 h-1/2 sm:p-2">
          <div className="flex flex-col gap-2 w-1/3">
            <div className="bg-gray-200 h-full rounded-lg"></div>
            <div className="bg-gray-200 h-full rounded-lg"></div>
          </div>
          <div className="flex flex-col flex-1 gap-3">
            <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
            <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
            <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
            <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
            <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
            <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
            <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
            <div className="w-full h-3 bg-gray-200 animate-pulse rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoadingTeamDetails;
