"use client";

import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import work from "../data/work.json";
import Image from "next/image";
import { HiMiniCalendarDateRange } from "react-icons/hi2";
import { FaLocationDot } from "react-icons/fa6";
import { FiExternalLink } from "react-icons/fi";
import Link from "next/link";

export default function Work() {
  return (
    <section id="work">
      <h2 className="text-3xl font-bold text-center dark:bg-linear-to-l dark:from-primary dark:to-purple-500 dark:bg-clip-text dark:text-transparent">Work Experience</h2>

      <div className="my-20 max-w-3xl mx-auto">
        {work.map((item) => (
          <Card
            key={item.logo}
            className="m-4 shadow-none bg-secondary hover:border-primary hover:bg-background dark:hover:bg-gray-800/50"
          >
            <CardContent className="flex flex-col md:flex-row gap-6">
              <div className="flex justify-center">
                <div className="w-fit">
                  <div className="shadow-sm rounded-md p-2 bg-gray-50 dark:bg-background">
                    <div className="relative w-15 aspect-square">
                      <Image
                        src={`/logo/${item.logo}`}
                        alt={item.company}
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="flex flex-wrap justify-between items-start space-y-2">
                  <div>
                    <CardTitle className="text-xl">{item.role}</CardTitle>
                    <CardDescription className="font-bold text-primary">
                      {item.company}
                    </CardDescription>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm whitespace-nowrap font-semibold text-muted-foreground flex items-center gap-1">
                      <HiMiniCalendarDateRange className="text-primary" />
                      {item.duration}
                    </span>
                    <span className="text-sm italic text-muted-foreground flex items-center gap-1">
                      <FaLocationDot className="text-red-600" />
                      {item.location}
                    </span>
                  </div>
                </div>

                <div className="flex flex-col">
                  <span className="mt-3 text-muted-foreground">
                    {item.description}
                  </span>
                  {item.link && (
                    <Link
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-semibold text-muted-foreground flex items-center gap-1 hover:text-blue-400"
                    >
                      <FiExternalLink />
                      Documentation
                    </Link>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
