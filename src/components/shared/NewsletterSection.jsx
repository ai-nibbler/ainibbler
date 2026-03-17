import React from "react";

export default function NewsletterSection() {
  return (
    <section className="py-10">
      <div className="flex items-start gap-6">
        <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground pt-1 w-24 flex-shrink-0 hidden sm:block">
          Newsletter
        </span>
        <div className="flex-1">
          <p className="text-foreground leading-relaxed">
            One easy idea each week to help your child understand AI, one small step at a time.
          </p>
          <a
            href="https://substack.com/@tinkeringexe"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-4 px-5 py-2.5 bg-[#FF6719] hover:bg-[#e55a10] text-white text-sm font-semibold rounded-lg transition-colors duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
            </svg>
            Subscribe on Substack
          </a>
        </div>
      </div>
    </section>
  );
}