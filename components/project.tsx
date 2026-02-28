"use client";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import project from "../data/project.json";
import { Badge } from "./ui/badge";
import Link from "next/link";
import { RiGitRepositoryLine } from "react-icons/ri";
import { FiExternalLink } from "react-icons/fi";

export default function Project() {
  return (
    <section id="project">
      <h2 className="text-3xl font-bold text-center">Project</h2>

      <div className="my-20 max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {project.map((item) => (
          <Card
            key={item.name}
            className="bg-secondary overflow-hidden p-0 h-full shadow-none hover:border-primary hover:bg-background dark:hover:bg-gray-800/50"
          >
            <div className="relative w-full aspect-video">
              <Image
                src={`/project/${item.image}`}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>

            <CardContent className="flex flex-col p-4 gap-4 h-full flex-1">
              <CardTitle>{item.name}</CardTitle>
              <CardDescription>{item.description}</CardDescription>
              <div className="flex flex-wrap gap-2">
                {item.tech.map((item) => (
                  <Badge key={item} className="bg-primary">
                    <span className="font-bold">{item}</span>
                  </Badge>
                ))}
              </div>
              <CardAction className="flex justify-around w-full mt-auto">
                <div className="flex items-center gap-2">
                  <RiGitRepositoryLine />
                  <Link
                    href={item.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold hover:text-blue-400 hover:font-medium"
                  >
                    Github Repo
                  </Link>
                </div>

                <div className="flex items-center gap-2">
                  <FiExternalLink />
                  <Link
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold hover:text-blue-400 hover:font-medium"
                  >
                    Live Preview
                  </Link>
                </div>
              </CardAction>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
