import * as React from "react";

type Props = { children: React.ReactNode; className?: string };

/** Mobile-first container: narrow by default, wider at md and xl. */
export default function Container({ children, className = "" }: Props) {
  return (
    <div
      className={`mx-auto w-full max-w-screen-sm px-5 md:max-w-3xl xl:max-w-6xl ${className}`}
    >
      {children}
    </div>
  );
}