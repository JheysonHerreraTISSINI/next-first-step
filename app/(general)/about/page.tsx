import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'About Page',
 description: 'About Page Description',
 keywords: ['About Page', 'Jheyson', 'About Products'],
};

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-bold">About</h1>
    </main>
  )
}