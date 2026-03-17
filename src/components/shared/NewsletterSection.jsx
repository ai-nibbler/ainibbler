import React from "react";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const SUBSTACK_URL = "https://substack.com";

const featuredPosts = [
  { title: "Coming Soon", label: "Featured Post #1" },
  { title: "Coming Soon", label: "Featured Post #2" },
  { title: "Coming Soon", label: "Featured Post #3" },
];

export default function NewsletterSection({ compact = false }) {
  return (
    <section className={compact ? "" : "py-10"}>
      <div className="flex items-start gap-6">
        {!compact && (
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground pt-1 w-24 flex-shrink-0 hidden sm:block">
            Newsletter
          </span>
        )}
        <div className="flex-1">
          <p className="text-foreground leading-relaxed">
            One easy idea each week to help your child understand AI,{" "}
            <span className="text-primary font-semibold italic">
              one small step at a time
            </span>
            .
          </p>

          <h3 className="text-xl font-bold text-foreground mt-6 mb-4">
            My Favorite Posts
          </h3>

          <div className="space-y-3">
            {featuredPosts.map((post, i) => (
              <div
                key={i}
                className="flex items-center justify-between gap-4"
              >
                <span className="text-primary/60 font-medium text-sm">
                  {post.title}
                </span>
                <span className="flex-1 border-b border-dashed border-border" />
                <span className="text-xs text-muted-foreground whitespace-nowrap">
                  {post.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <a href="https://substack.com/@tinkeringexe" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-6 transition-all duration-200">
                <Mail className="w-4 h-4 mr-2" />
                Sign up here
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}