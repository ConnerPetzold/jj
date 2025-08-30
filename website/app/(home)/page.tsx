import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jujutsu site demo",
  description: "A version control system",
};

export default function HomePage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center"></main>
  );
}
