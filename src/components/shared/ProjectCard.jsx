import React from "react";
import { Link } from "react-router-dom";
import { Clock } from "lucide-react";

export default function ProjectCard({ project }) {
  const isComingSoon = project.comingSoon;

  const CardContent = () => (
    <div
      className={`group rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 ${
        isComingSoon
          ? "opacity-60 cursor-default"
          : "hover:border-primary/30 hover:shadow-sm cursor-pointer"
      }`}
    >
      <div className="aspect-video bg-muted relative overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            {isComingSoon ? (
              <Clock className="w-8 h-8 text-muted-foreground/40" />
            ) : (
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-primary text-lg">✨</span>
              </div>
            )}
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-foreground text-sm">
          {project.title}
        </h3>
        <p className="text-xs text-muted-foreground mt-1">
          {project.subtitle}
        </p>
      </div>
    </div>
  );

  if (isComingSoon) {
    return <CardContent />;
  }

  return (
    <Link to={project.path || "#"}>
      <CardContent />
    </Link>
  );
}