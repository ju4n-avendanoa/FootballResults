import React from "react";

function LoadingPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-300">
      <div className="w-16 h-16 border-t-4 border-slate-600 border-solid rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-semibold text-slate-800">Loading...</p>
    </div>
  );
}

export default LoadingPage;
