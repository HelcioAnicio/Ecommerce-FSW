"use client";

import { useSession } from "next-auth/react";

export default function Home() {
  const { data } = useSession();

  return (
    <main className="text-cyan-200">
      <h2>{data?.user?.name}</h2>
    </main>
  );
}
