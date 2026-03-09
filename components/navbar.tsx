"use client";

import Image from "next/image";
import { useState } from "react";
import { MdOutlineLightMode } from "react-icons/md";
import { AiOutlineMoon } from "react-icons/ai";

export default function Navbar() {
  const [dark, setDark] = useState(() => {
    if (typeof window === "undefined") return false;

    const isDark = localStorage.theme === "dark";
    if (isDark) {
      document.documentElement.classList.add("dark");
      return true;
    }

    return false;
  });

  const menu = [
    { id: "tech", name: "Tech" },
    { id: "work", name: "Work" },
    { id: "education", name: "Education" },
    { id: "project", name: "Project" },
  ];

  const handleScroll = (id: string) => {
    if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -50;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const handleTheme = () => {
    const toggle = () => {
      if (dark) {
        document.documentElement.classList.remove("dark");
        localStorage.theme = "light";
      } else {
        document.documentElement.classList.add("dark");
        localStorage.theme = "dark";
      }
      setDark(!dark);
    };

    if ("startViewTransition" in document) {
      document.startViewTransition(() => {
        toggle();
      });
    } else {
      toggle();
    }
  };

  return (
    <div className="sticky top-0 z-50 w-full backdrop-blur-lg bg-yellow-200/10">
      <div className="container mx-auto flex items-center justify-between py-2 px-4">
        <section className="flex gap-2">
          <button
            onClick={() => handleScroll("hero")}
            className="cursor-pointer"
          >
            <Image src="/logo/logo.png" alt="Logo" width={25} height={25} />
          </button>
          <h1 className="font-bold text-lg hidden md:block">Rahmat Tomy</h1>
        </section>
        <section className="flex items-center gap-4">
          {menu.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="cursor-pointer text-sm font-semibold hover:text-primary"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={handleTheme}
            className="
              relative w-5 h-5
              flex items-center justify-center
              transition-colors duration-300
              cursor-pointer
            "
          >
            <MdOutlineLightMode
              className="
                absolute
                rotate-0 scale-100
                dark:-rotate-90 dark:scale-0
              "
            />

            <AiOutlineMoon
              className="
                absolute
                rotate-90 scale-0
                dark:rotate-0 dark:scale-100
              "
            />
          </button>
        </section>
      </div>
    </div>
  );
}
