import React from "react";

function LoadingPage() {
  return (
    <div className="flex items-center justify-center w-auto h-full">
      <div className="w-16 h-16 border-t-2 border-b-2 border-blue-300 rounded-full animate-spin"></div>
    </div>
  );
}

export default LoadingPage;
