import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const projectsData = {
  "doodle-with-ai": {
    title: "Doodle With AI",
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=800&q=80",
    description:
      "In this project, your child will explore how artificial intelligence can recognize hand-drawn images. Using Google's Quick, Draw! experiment, kids will discover that AI learns from patterns — just like they do. It's a playful, screen-based activity that sparks curiosity about how machines 'see' the world.",
  },
  "train-your-first-ai-model": {
    title: "Train Your First AI Model",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=80",
    description:
      "Your child will learn how to teach a computer to recognize everyday objects using Google's Teachable Machine. This hands-on project shows kids that AI isn't magic — it learns from examples, just like they learn from practice. A fantastic introduction to the concept of training data and machine learning.",
  },
};

export default function ProjectDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const pathParts = window.location.pathname.split("/");
  const slug = pathParts[pathParts.length - 1];
  const project = projectsData[slug];

  if (!project) {
    return (
      <div>
        <Link to="/AIAcademy">
          <Button variant="ghost" className="mb-4 -ml-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Academy
          </Button>
        </Link>
        <h1 className="text-2xl font-bold text-foreground">Project Not Found</h1>
        <p className="text-muted-foreground mt-2">
          This project doesn't exist yet. Check back soon!
        </p>
      </div>
    );
  }

  return (
    <div>
      <Link to="/AIAcademy">
        <Button variant="ghost" className="mb-4 -ml-2 text-muted-foreground hover:text-foreground">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Academy
        </Button>
      </Link>

      <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
        {project.title}
      </h1>

      <div className="mt-6 rounded-xl overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 sm:h-64 object-cover"
        />
      </div>

      <p className="text-foreground leading-relaxed mt-6">
        {project.description}
      </p>

      <div className="mt-8 rounded-xl border border-dashed border-primary/30 bg-accent/30 p-6 text-center">
        <p className="text-sm text-muted-foreground">
          ✨ More lessons and activities coming soon. Subscribe to the newsletter
          to be the first to know!
        </p>
      </div>
    </div>
  );
}