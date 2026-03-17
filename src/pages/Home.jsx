import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
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
          <div className="flex-1 space-y-4">
            <p className="text-foreground leading-relaxed">
              Hi, I'm Chloe. As a lawyer by training, I started my career
              helping big companies manage risks, while also working with
              children as a tutor.
            </p>
            <p className="text-foreground leading-relaxed">
              Now, as AI becomes part of children's everyday lives, I help
              parents understand it in a simple, practical way — through{" "}
              <span className="text-primary font-semibold">
                fun, hands-on projects
              </span>{" "}
              you can do together. I believe it's important we raise children
              who can think for themselves and use technology wisely.
            </p>

            <p className="text-sm text-muted-foreground font-medium">
              ✨ No AI or tech experience needed — just curiosity
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-10 border-b border-border">
        <div className="flex items-start gap-6">
          <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground pt-1 w-24 flex-shrink-0 hidden sm:block">
            Start Here
          </span>
          <div className="flex-1 flex flex-col sm:flex-row gap-4">
            {/* Free Lesson */}
            <div className="flex-1 p-5 rounded-xl border border-border bg-accent/30 flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">CTA</p>
              <Link to="/FreeLesson" className="group">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground w-full sm:w-auto rounded-lg px-5 transition-all duration-200">
                  🎨 Start with a simple, free doodling game
                </Button>
              </Link>
            </div>

            {/* Workshops */}
            <div className="flex-1 p-5 rounded-xl border border-border bg-accent/30 flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Workshops</p>
              <a
                href="mailto:chloe@tinkering.exe"
                className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 text-sm font-semibold rounded-lg transition-colors duration-200 w-fit"
              >
                📚 Book a 1:1 tutoring session for your child
              </a>
            </div>

            {/* Partnerships */}
            <div className="flex-1 p-5 rounded-xl border border-border bg-accent/30 flex flex-col gap-2">
              <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">Partnerships</p>
              <a
                href="mailto:chloe@tinkering.exe"
                className="inline-flex items-center gap-2 px-5 py-2 bg-primary/10 hover:bg-primary/20 text-primary border border-primary/30 text-sm font-semibold rounded-lg transition-colors duration-200 w-fit"
              >
                🤝 Sponsor a YouTube video or Substack post
              </a>
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