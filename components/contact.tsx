"use client";

import Link from "next/link";
import { CiMail } from "react-icons/ci";
import { SiWhatsapp } from "react-icons/si";

export default function Contact() {
  return (
    <div className="flex flex-col gap-4 items-center justify-center my-20">
      <h2 className="font-bold text-3xl text-center dark:bg-linear-to-l dark:from-primary dark:to-purple-500 dark:bg-clip-text dark:text-transparent">
        Let&apos;s work on something meaningful
      </h2>
      <span className="text-center text-muted-foreground font-semibold">
        Feel free to reach out if you&apos;re looking for a developer, have a
        question, or just want to connect.
      </span>
      <div className="flex flex-wrap gap-2 items-center justify-center text-muted-foreground font-semibold">
        <Link
          href="mailto:rahmattomyapriliyanto@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-1 items-center"
        >
          <CiMail />
          <span>rahmattomyapriliyanto@gmail.com</span>
        </Link>

        <span className="hidden md:inline">|</span>

        <Link
          href="https://wa.me/6281553960011"
          target="_blank"
          rel="noopener noreferrer"
          className="flex gap-1 items-center"
        >
          <SiWhatsapp />
          <span>+62 815-5396-0011</span>
        </Link>
      </div>
    </div>
  );
}
