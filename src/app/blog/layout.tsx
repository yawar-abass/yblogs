// app/blog/layout.tsx
import Header from "@/components/Header";
import React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <Header />
      <main className="">{children}</main>
    </div>
  );
}
