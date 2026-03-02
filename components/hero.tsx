"use client";

import Image from "next/image";
import data from "../data/intro.json";
import social from "../data/social.json";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { CiFileOn } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "./ui/button";
import Link from "next/link";

const iconMap: Record<string, React.ReactNode> = {
  Github: <FaGithub className="text-2xl text-[#747474] hover:text-[#a8a8a8]" />,
  Linkedin: (
    <FaLinkedin className="text-2xl text-[#0a66c2] hover:text-[#347ec9]" />
  ),
  Instagram: (
    <RiInstagramFill
      className="text-2xl"
      style={{ fill: "url(#instagram-gradient)" }}
    />
  ),
};

export default function Hero() {
  const intro = data[0];

  return (
    <section id="hero" className="min-h-screen flex items-center">
      <div className="max-w-8xl mx-auto flex flex-col lg:flex-row gap-8 p-4">
        <div className="flex flex-col md:flex-row justify-around items-center lg:items-start gap-6">
          <div className="space-y-2">
            <h2>
              Hi, I am <br />
              <span className="text-4xl font-bold dark:bg-linear-to-l dark:from-primary dark:to-purple-500 dark:bg-clip-text dark:text-transparent">
                {intro.name}
              </span>
            </h2>
            <div className="flex gap-1 items-center">
              <FaLocationDot className="text-red-600" />
              <span className="text-muted-foreground font-semibold">
                {intro.location}
              </span>
            </div>

            <div className="flex items-center justify-center gap-4 my-2">
              {social.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="z-10"
                >
                  <Button
                    variant="outline"
                    size="sm"
                    className="cursor-pointer"
                  >
                    {iconMap[item.name]}
                    <span className="font-semibold text-muted-foreground">
                      {item.name}
                    </span>
                  </Button>
                </Link>
              ))}
            </div>

            <div className="flex justify-center p-4">
              <Link
                href={intro.resume}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="sm"
                  className="font-bold bg-gray-700 hover:bg-gray-800 dark:bg-primary cursor-pointer dark:hover:bg-primary/90"
                >
                  <CiFileOn />
                  Resume
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative w-54 md:w-92 aspect-square my-20">
            <div className="absolute inset-0 rounded-full overflow-hidden bg-primary z-20 dark:bg-linear-to-tl dark:from-primary dark:to-purple-500">
              <div className="absolute inset-0 scale-150">
                <Image
                  src="/avatar/profile.png"
                  alt="Profile"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            <div className="absolute inset-0 scale-150">
              <Image
                src="/avatar/profile.png"
                alt="Profile"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-white dark:bg-black z-10 translate-y-1/2"></div>
          </div>
        </div>

        <div className="flex-1 lg:max-w-sm flex flex-col justify-center z-20">
          <h2 className="text-3xl font-semibold dark:bg-linear-to-l dark:from-primary dark:to-purple-500 dark:bg-clip-text dark:text-transparent">{intro.role}</h2>
          <article className="mt-2 text-muted-foreground font-semibold">
            {intro.introduction}
          </article>
        </div>
      </div>
    </section>
  );
}
