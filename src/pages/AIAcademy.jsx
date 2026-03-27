import React from "react";
import { Cookie } from "lucide-react";
import ProjectCard from "@/components/shared/ProjectCard";
import { AI_PROJECT_PANTRY_URL } from "@/constants/aiProjectPantry";
import SocialFooter from "@/components/shared/SocialFooter";

const projects = [
  {
    title: "Doodle With AI",
    subtitle: "Learn how AI recognizes drawings",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80",
    path: "/Project/doodle-with-ai",
    comingSoon: false,
  },
  {
    title: "Train Your First AI Model",
    subtitle: "Teach a computer to recognize objects",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80",
    path: "/Project/train-your-first-ai-model",
    comingSoon: false,
  },
  {
    title: "Coming Soon",
    subtitle: "New project launching soon",
    comingSoon: true,
  },
  {
    title: "Coming Soon",
    subtitle: "New project launching soon",
    comingSoon: true,
  },
  {
    title: "Coming Soon",
    subtitle: "New project launching soon",
    comingSoon: true,
  },
  {
    title: "Coming Soon",
    subtitle: "New project launching soon",
    comingSoon: true,
  },
  {
    title: "Coming Soon",
    subtitle: "New project launching soon",
    comingSoon: true,
  },
  {
    title: "Coming Soon",
    subtitle: "New project launching soon",
    comingSoon: true,
  },
  {
    title: "Coming Soon",
    subtitle: "New project launching soon",
    comingSoon: true,
  },
];

export default function AIAcademy() {
  return (
    <div>
      <h1 className="flex flex-col gap-1 m-0">
        <span className="flex items-center gap-3 text-2xl sm:text-3xl font-bold text-foreground">
          <Cookie
            className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0 text-primary"
            aria-hidden
          />
          <a
            href={AI_PROJECT_PANTRY_URL}
            className="leading-tight text-foreground hover:underline underline-offset-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:rounded-sm"
          >
            AI Project Pantry
          </a>
        </span>
        <span className="block text-sm sm:text-base text-muted-foreground font-normal pl-11 sm:pl-[3.25rem] leading-snug">
          Snackable 15‑Min Projects for Families
        </span>
      </h1>
      <p className="text-muted-foreground mt-2 leading-relaxed">
        A curated collection of hands-on AI projects designed for curious minds
        ages 8–12. Each lesson guides your child through building something real
        — no prior experience needed.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} />
        ))}
      </div>

      <SocialFooter />
    </div>
  );
}