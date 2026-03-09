"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import tech from "../data/tech.json";
import Image from "next/image";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";

export default function Tech() {
  return (
    <section id="tech">
      <h2 className="text-3xl font-bold text-center bg-linear-to-l from-primary to-orange-600 dark:to-purple-500 bg-clip-text text-transparent">
        Technologies I&apos;ve Worked With
      </h2>
      <div className="relative p-10 my-10 hidden md:block">
        <div className="absolute left-10 top-0 w-50 h-full bg-linear-to-r from-background to-transparent z-10"></div>
        <div className="absolute right-10 top-0 w-50 h-full bg-linear-to-l from-background to-transparent z-10"></div>

        <Swiper
          modules={[Autoplay]}
          slidesPerView="auto"
          spaceBetween={100}
          loop={true}
          speed={4000}
          freeMode={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
        >
          {tech.map((item) => (
            <SwiperSlide key={item.name} className="w-auto! swiper-wrapper">
              <div className="flex flex-col items-center">
                <div className="shadow-sm rounded-md p-2 bg-secondary cursor-grab">
                  <div className="relative w-15 aspect-square">
                    <Image
                      src={`/logo/${item.logo}`}
                      alt={item.name}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <label className="text-sm mt-1">{item.name}</label>
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="md:hidden p-4 my-10">
        <Card className="p-4 grid grid-cols-2 gap-2 shadow-none bg-secondary">
          {tech.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="outline"
                size="sm"
                className="w-fit rounded-full shadow-none border hover:border-primary dark:hover:border-primary"
              >
                {item.name}
              </Button>
            </Link>
          ))}
        </Card>
      </div>
    </section>
  );
}
