import React from "react";

function LoadingGameDetail() {
  return (
    <section className="fixed flex flex-col w-5/6 gap-6 transform -translate-x-1/2 -translate-y-1/2 md:w-2/3 lg:w-1/2 xl:w-1/3 h-2/3 inset-1/2">
      <div className="flex flex-col h-full gap-5 p-2 bg-zinc-700 select-none rounded-2xl ">
        <div className="bg-zinc-400 h-2/3 rounded-xl animate-pulse"></div>
        <div className="flex flex-col flex-1 gap-5 h-1/3 sm:p-2">
          <div className="flex flex-col flex-1 gap-3">
            <div className="w-full h-3 bg-zinc-400 animate-pulse rounded-2xl"></div>
            <div className="w-full h-3 bg-zinc-400 animate-pulse rounded-2xl"></div>
            <div className="w-full h-3 bg-zinc-400 animate-pulse rounded-2xl"></div>
            <div className="w-full h-3 bg-zinc-400 animate-pulse rounded-2xl"></div>
            <div className="w-full h-3 bg-zinc-400 animate-pulse rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LoadingGameDetail;
