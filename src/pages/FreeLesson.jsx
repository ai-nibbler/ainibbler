import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Mail, GraduationCap, Play } from "lucide-react";

const SUBSTACK_URL = "https://substack.com";
const YOUTUBE_EMBED_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ";

export default function FreeLesson() {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
        Try a Free AI Lesson
      </h1>

      <div className="mt-6 space-y-4 text-foreground leading-relaxed">
        <p>
          This lesson is designed so parents can watch with their child — or
          kids can explore independently (ages 8–12).
        </p>
        <p>
          No downloads. No sign-ups. Just a simple, fun introduction to how AI
          works.
        </p>
      </div>

      {/* Lesson Card */}
      <div className="mt-8 rounded-xl border border-border bg-card p-6">
        <div className="flex items-center gap-2 mb-2">
          <Play className="w-4 h-4 text-primary" />
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Lesson
          </span>
        </div>
        <h2 className="text-xl font-bold text-foreground">Doodle With AI</h2>
        <p className="text-sm text-muted-foreground mt-1">
          Based on Quick, Draw! — introduce what AI is through play.
        </p>

        {/* Video Embed */}
        <div className="mt-6 rounded-lg overflow-hidden bg-muted aspect-video">
          <iframe
            src={YOUTUBE_EMBED_URL}
            title="Doodle With AI - Free Lesson"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </div>

      {/* CTAs */}
      <div className="flex flex-wrap gap-3 mt-8">
        <a href={SUBSTACK_URL} target="_blank" rel="noopener noreferrer">
          <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-6 transition-all duration-200">
            <Mail className="w-4 h-4 mr-2" />
            Subscribe to Newsletter
          </Button>
        </a>
        <Link to="/AIAcademy">
          <Button
            variant="outline"
            className="rounded-lg px-6 border-border hover:bg-accent hover:text-accent-foreground transition-all duration-200"
          >
            <GraduationCap className="w-4 h-4 mr-2" />
            Explore AI Academy
          </Button>
        </Link>
      </div>
    </div>
  );
}