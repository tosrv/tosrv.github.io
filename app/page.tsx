import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Tech from "@/components/tech";
import Work from "@/components/work";
import Project from "@/components/project";
import Footer from "@/components/footer";
import Contact from "@/components/contact";
import Education from "@/components/education";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-white dark:bg-black">
        <div className="container mx-auto p-4">
          <Hero />
        </div>
      </div>
      <div className="container mx-auto p-4 py-20">
        <div className="space-y-20">
          <Tech />
          <Work />
          <Education />
          <Project />
          <Contact />
        </div>
      </div>
      <Footer />
      <svg width="0" height="0">
        <defs>
          <linearGradient
            id="instagram-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#f58529" />
            <stop offset="25%" stopColor="#dd2a7b" />
            <stop offset="50%" stopColor="#8134af" />
            <stop offset="100%" stopColor="#515bd4" />
          </linearGradient>
        </defs>
      </svg>
    </>
  );
}
