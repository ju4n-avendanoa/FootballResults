"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { Suspense } from "react";
function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      {children}
      <Suspense>
        <ProgressBar
          height="5px"
          color="#38a169"
          options={{ showSpinner: false }}
          shallowRouting
        />
      </Suspense>
    </>
  );
}

export default Provider;
