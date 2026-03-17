import React from "react";
import ContactFooter from "@/components/shared/ContactFooter";

export default function AboutMe() {
  return (
    <div>
      <h1 className="text-2xl sm:text-3xl font-bold text-foreground">
        My Story
      </h1>

      {/* Who Am I */}
      <section className="mt-8">
        <h2 className="text-xl font-bold text-foreground">Who Am I?</h2>
        <ul className="mt-4 space-y-2 text-foreground">
          <li className="flex items-center gap-2">
            <span className="text-muted-foreground">◦</span>
            Parent of two curious kids
          </li>
          <li className="flex items-center gap-2">
            <span className="text-muted-foreground">◦</span>
            AI educator and content creator
          </li>
          <li className="flex items-center gap-2">
            <span className="text-muted-foreground">◦</span>
            Former tech professional turned teacher
          </li>
        </ul>
        <p className="text-muted-foreground mt-4 italic">
          ...and someone who believes every kid deserves to understand the
          technology shaping their future.
        </p>
      </section>

      {/* What I'm Working On */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-foreground">
          What I'm Working On
        </h2>
        <div className="mt-4 space-y-3 text-foreground leading-relaxed">
          <p>
            1. 🎓 I'm building the{" "}
            <span className="text-primary font-semibold">
              AI Academy For Kids
            </span>{" "}
            — a collection of hands-on AI projects that kids ages 8–12 can
            explore with their parents.
          </p>
          <p>
            2. 📹 On my{" "}
            <span className="text-primary font-semibold">YouTube Channel</span>,
            I create video lessons that make AI concepts feel approachable and
            fun.
          </p>
          <p>
            3. 💌 I write a weekly{" "}
            <span className="text-primary font-semibold">newsletter</span> with
            actionable AI tips parents can use with their children.
          </p>
          <p>
            4. 🧩 I see this website as a{" "}
            <span className="font-semibold">"learning hub"</span> where parents
            and kids alike can access resources I've created over the years.
          </p>
        </div>
      </section>

      {/* Why I Help Parents */}
      <section className="mt-10">
        <h2 className="text-xl font-bold text-foreground">
          Why I Help Parents
        </h2>
        <p className="mt-4 font-semibold text-foreground">
          Simple: because there's no playbook for this.
        </p>
        <p className="mt-4 text-foreground leading-relaxed italic">
          When I first tried to explain AI to my own kids, I realized something
          — most resources were either too technical, too abstract, or designed
          for adults. There was nothing that felt safe, simple, and genuinely
          fun for a 9-year-old.
        </p>
        <div className="mt-4 space-y-2 text-foreground">
          <p>
            ◦ Most parents feel{" "}
            <span className="font-semibold">overwhelmed by AI</span> — and
            that's completely normal
          </p>
          <p>
            ◦ Kids don't need to memorize definitions —{" "}
            <span className="font-semibold">they learn by doing</span>
          </p>
          <p>
            ◦ If parents don't guide their children,{" "}
            <span className="font-semibold">
              algorithms and social media will
            </span>
          </p>
        </div>
        <p className="mt-6 text-foreground leading-relaxed">
          That's why I created AI Literacy For Kids — to give parents the tools
          and confidence to explore AI alongside their children, one simple
          project at a time. 🌱
        </p>
      </section>

      {/* Footer */}
      <ContactFooter />
    </div>
  );
}