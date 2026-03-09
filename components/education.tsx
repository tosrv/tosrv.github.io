"use client";

import education from "../data/education.json";
import { Card, CardContent, CardDescription, CardTitle } from "./ui/card";
import { LuGraduationCap } from "react-icons/lu";

export default function Education() {
  return (
    <section id="education">
      <h2 className="text-3xl font-bold text-center bg-linear-to-l from-primary to-orange-600 dark:to-purple-500 bg-clip-text text-transparent">Education</h2>

      <div className="my-20 max-w-2xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
        {education.map((item) => (
          <Card
            key={item.name}
            className="shadow-none bg-secondary hover:border-primary hover:bg-background dark:hover:bg-gray-800/50"
          >
            <CardContent className="flex justify-center items-center gap-6">
              <div className="flex justify-center">
                <div className="w-fit">
                  <div className="border border-primary rounded-full p-2 bg-primary/5">
                    <LuGraduationCap className="w-6 h-6" />
                  </div>
                </div>
              </div>
              <div className="space-y-1">
                <CardTitle>{item.name}</CardTitle>
                <CardDescription>{item.location}</CardDescription>
                <CardDescription>{item.duration}</CardDescription>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
