import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";
import NewsletterSection from "@/components/shared/NewsletterSection";
import ContactFooter from "@/components/shared/ContactFooter";

export default function Home() {
  return (
    <div>
      {/* Hero Image */}
      <div className="rounded-xl overflow-hidden mb-10">
        <img
          src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
          alt="Child exploring technology and learning"
          className="w-full h-64 sm:h-80 object-cover"
        />
      </div>

      {/* Hello Section */}
      <section className="pb-10 border-b border-border">
        <div className="flex items-start gap-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground pt-1 w-24 flex-shrink-0 hidden sm:block">
            Hello
          </span>
          <div className="flex-1">
            <p className="text-foreground leading-relaxed">
              I'm [Name]. I help parents introduce AI to their kids through{" "}
              <span className="text-primary font-semibold">
                simple, playful projects
              </span>
              . I believe kids learn best by experimenting — not memorizing
              definitions.
            </p>

            <p className="text-foreground leading-relaxed mt-4">
              Now, as a parent myself, I create guided lessons that make AI feel
              approachable, safe, and genuinely fun. You don't need to
              understand AI deeply —{" "}
              <span className="font-semibold">
                your curiosity is more than enough
              </span>
              .
            </p>

            <div className="flex flex-wrap gap-3 mt-5">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                🎯 Designed for ages 8–12
              </span>
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                🌱 No prior AI knowledge needed
              </span>
            </div>

            <div className="mt-6">
              <Link to="/FreeLesson">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg px-6 transition-all duration-200">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Try a Free AI Lesson
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <div className="border-b border-border">
        <NewsletterSection />
      </div>

      {/* Contact Footer */}
      <ContactFooter />
    </div>
  );
}