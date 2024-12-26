import type { Metadata } from "next";

export const metadata: Metadata = {
 title: 'Contact Page',
 description: 'Contact Page Description',
 keywords: ['Contact Page', 'Contact Form'],
};

export default function Contact() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-5xl font-bold">Contact</h1>
    </main>
  )
}