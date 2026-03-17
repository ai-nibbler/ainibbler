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
              Hi, I'm Chloe. As a lawyer by training, I started my career helping big companies manage risks, while also working with children as a tutor.
            </p>

            <p className="text-foreground leading-relaxed mt-4">
              Now, as AI becomes part of children's everyday lives, I help parents understand it in a simple, practical way — through{" "}
              <span className="text-primary font-semibold">fun, hands-on projects</span>{" "}
              you can do together. I believe it's important we raise children who can think for themselves and use technology wisely.
            </p>

            <div className="flex flex-wrap gap-3 mt-5">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                ✨ No AI or tech experience needed — just curiosity
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