import React from "react";
import { FileText, Clock } from "lucide-react";

const articles = [
  { title: "Coming Soon", description: "A new article about AI for kids" },
  { title: "Coming Soon", description: "A new article about AI for kids" },
  { title: "Coming Soon", description: "A new article about AI for kids" },
];

export default function Articles() {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
        Articles — AI
      </h1>
      <p className="text-muted-foreground mt-2 leading-relaxed">
        Thoughtful articles on making AI accessible for kids and families.
      </p>

      <div className="mt-8 space-y-4">
        {articles.map((article, i) => (
          <div
            key={i}
            className="rounded-xl border border-border bg-card p-5 opacity-60"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-lg bg-muted">
                <Clock className="w-4 h-4 text-muted-foreground" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground text-sm">
                  {article.title}
                </h3>
                <p className="text-xs text-muted-foreground mt-1">
                  {article.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}