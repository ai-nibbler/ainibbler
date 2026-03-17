import React from "react";
import NewsletterSection from "@/components/shared/NewsletterSection";
import SocialFooter from "@/components/shared/SocialFooter";

export default function Newsletter() {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
        Newsletter
      </h1>
      <p className="text-muted-foreground mt-2 leading-relaxed">
        Stay in the loop with simple, actionable tips to help your kids explore
        AI — delivered weekly, straight to your inbox.
      </p>

      <div className="mt-8">
        <NewsletterSection compact />
      </div>

      <SocialFooter />
    </div>
  );
}