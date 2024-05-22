"use client"

import CardList from "@/components/CardList";


export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-between container mx-auto py-8">
      <h1 className="text-2xl text-left w-full text-purple-700 block mb-3">Content Feed</h1>
      <CardList />
    </main>
  );
}
