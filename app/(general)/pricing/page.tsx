import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Pricing Page',
 description: 'Pricing Page Description',
 keywords: ['Pricing Page', 'List Pricing', 'Pricing Plans'],
};

export default function Pricing() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-bold">Pricing</h1>
    </main>
  )
}