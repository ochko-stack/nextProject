import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h2>
          За юу байцгаана хөгшид, залуусаа. Бараг анхны next.js project. Амархан
          юм байнаа хаха
        </h2>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <Link href="/about">Go to About</Link>
      </footer>
    </div>
  );
}
