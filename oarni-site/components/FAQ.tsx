"use client";

import { useState } from "react";

type FAQItem = { q: string; a: string };
type FAQCategory = { title: string; items: FAQItem[] };

const faqData: FAQCategory[] = [
  {
    title: "Real vs. fake?",
    items: [
      {
        q: "Isn't AI photography fake?",
        a: "Commercial photography has always been constructed. AI doesn't introduce fakeness into brand photography — it's simply a more efficient way to produce content that was already generic to begin with.",
      },
      {
        q: "Why use Oarni instead of a real photographer?",
        a: "We're not saying you always should. The campaigns that require real people, real moments, and situations you can't plan in advance — those need a photographer, and they deserve every penny you can give them. But a significant part of any brand's image needs is generic by nature. For that work, Oarni frees up the budget and time that would otherwise disappear into production logistics. The result is more resources for the shoots that actually matter.",
      },
      {
        q: "Doesn't using AI mean compromising on brand authenticity?",
        a: "Only if you think authenticity lives in the production method rather than the idea. A brand communicates through what it chooses to do — not through whether a human or a machine produced the image.",
      },
    ],
  },
  {
    title: "Creativity and control",
    items: [
      {
        q: "Doesn't AI just do its own thing?",
        a: "This is the most common misconception. Oarni takes in brand color palettes, visual tone, composition style, subject matter, and usage context. A creative person can embed their vision deeply into every output — as much or as little as they want. The tool doesn't replace creative direction. It executes it.",
      },
      {
        q: "Where does human creativity fit in?",
        a: "Everywhere it matters. The brief, the visual strategy, the brand identity — all human. What Oarni removes is the execution overhead: studio bookings, logistics, post-production queues. That time and budget goes back to you.",
      },
      {
        q: "Can we control the output?",
        a: "Yes. Brand profiles define the visual rules. You approve or reject images. The system learns from feedback. Control scales with how much you want — from broad visual direction down to specific stylistic details and nuances.",
      },
    ],
  },
  {
    title: "Brand and quality",
    items: [
      {
        q: "Won't the images look like generic AI images?",
        a: "Generic AI images come from generic prompts. Oarni builds a visual profile for each brand — color palette, atmosphere, people, compositional style. It works from your brand's visual DNA, not a random prompt.",
      },
      {
        q: "What if our brand is distinctive?",
        a: "That's exactly where Oarni performs best. The more defined your brand identity, the more precisely it can be encoded — and the more consistently executed across hundreds of images.",
      },
      {
        q: "How does consistency hold across large volumes?",
        a: "It's built into the system, not dependent on someone remembering the brief from last quarter. The brand profile is the single source of truth for every image.",
      },
    ],
  },
  {
    title: "The bigger picture",
    items: [
      {
        q: "Doesn't this put photographers out of work?",
        a: "Oarni frees up budget from generic production — the kind that never really needed a photographer anyway, but got one because there was no alternative. That budget can now go to productions that genuinely require human presence and creative risk. Oarni doesn't reduce good photography. It makes more of it possible.",
      },
      {
        q: "What will our customers think?",
        a: "That's a question only you can answer — and it depends entirely on whether your brand has a clear point of view. Companies that use Oarni confidently don't hide it. They've made a deliberate choice about where to invest their visual budget, and that clarity comes through.",
      },
      {
        q: "Will AI imagery be accepted?",
        a: "We're in a transitional moment where people still ask where an image came from. That won't last. What will matter — as it always has — is whether the image works. Origin will become as irrelevant as whether a headline was written by hand or typed.",
      },
      {
        q: "Is AI in brand photography ethical?",
        a: "Constructed imagery has been the norm in commercial photography since the beginning. The ethical questions worth asking are about representation and what stories brands choose to tell — not about the tools used to produce the image.",
      },
    ],
  },
  {
    title: "Objections",
    items: [
      {
        q: "\"The internet is already drowning in AI-generated garbage. Why would we want more?\"",
        a: "You're right that most AI imagery is noise. That's a prompt quality problem, not an AI problem. Oarni is built on brand-specific visual profiles, not generic text prompts. The difference between AI-slop and a useful brand image is the same as the difference between a random Google search and a professional brief. The tool is neutral. The thinking behind it isn't.",
      },
      {
        q: "\"AI images all look the same.\"",
        a: "Default AI images do. That's what happens when thousands of people use the same tools with similar inputs. Oarni's output is shaped by your brand's specific visual rules — color, atmosphere, people, environments. The system is designed to produce images that look like your brand, not like everyone else's AI experiment.",
      },
      {
        q: "\"Using AI means you're cutting corners.\"",
        a: "Cutting corners means producing something worse to save money. Oarni produces consistent, on-brand imagery at a fraction of the cost of a studio shoot — not a degraded version of it. The corner-cutting was always happening: in the rushed brief, the compromised location, the stock photo that was almost right. This is a different approach, not a cheaper version of the old one.",
      },
      {
        q: "\"Our creative team will hate this.\"",
        a: "Some might, at first. But creative teams generally hate repetitive execution work — booking studios, briefing photographers on generic lifestyle shots, waiting for post-production on images everyone knows are filler. Oarni removes that work. What's left is the part that actually requires creativity.",
      },
      {
        q: "\"Why not just use any AI image generator?\"",
        a: "You could. But a generic AI tool gives you a generic result — it has no idea what your brand looks, feels, or sounds like. Oarni is built around your brand's visual identity from the ground up. The difference isn't the technology. It's the thinking behind it.",
      },
      {
        q: "\"Can't I just feed my brand guidelines into ChatGPT or Midjourney?\"",
        a: "You can try. But a brand profile is more than a PDF of guidelines — it's a structured visual logic that needs to be translated into something an image model can consistently execute. Oarni is built to do exactly that translation, and to maintain it across hundreds of images over time. Pasting a brand deck into a chat prompt gets you one decent image. It doesn't get you a system.",
      },
    ],
  },
  {
    title: "Ownership and rights",
    items: [
      {
        q: "Who owns the images Oarni produces?",
        a: "You do. Images generated for your brand are yours to use without restrictions.",
      },
      {
        q: "Could the same image appear on a competitor's website?",
        a: "No. Oarni generates unique images from your brand's specific visual profile — not from a shared template or stock library. Two brands with different profiles produce fundamentally different output.",
      },
      {
        q: "Are the images safe to use commercially?",
        a: "Yes. All output is cleared for commercial use across any channel or format.",
      },
    ],
  },
  {
    title: "Getting started",
    items: [
      {
        q: "How fast do we get images?",
        a: "Minutes, not weeks. No studio booking, no weather dependency, no post-production queue.",
      },
      {
        q: "What formats and use cases are supported?",
        a: "Websites, social media, presentations, campaign materials. All aspect ratios. Built for the full range of a brand's image needs.",
      },
      {
        q: "How do we get started?",
        a: "We run a pilot with your brand. You see output before committing to anything. Get in touch.",
      },
    ],
  },
];

function AccordionItem({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="bg-white rounded-xl overflow-hidden transition-shadow"
      style={{ boxShadow: open ? "0 2px 16px rgba(0,0,0,0.07)" : "0 1px 4px rgba(0,0,0,0.04)" }}
    >
      <button
        className="w-full text-left px-6 py-5 flex items-center justify-between gap-6"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span
          className="font-medium text-[0.95rem] leading-snug"
          style={{ color: "var(--text-primary)" }}
        >
          {item.q}
        </span>
        <span
          className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-sm font-bold transition-transform duration-200"
          style={{
            background: open ? "var(--text-primary)" : "#EBEBEB",
            color: open ? "#fff" : "var(--text-primary)",
            transform: open ? "rotate(45deg)" : "rotate(0deg)",
          }}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{ maxHeight: open ? "300px" : "0px" }}
      >
        <p
          className="px-6 pb-5 text-[0.9rem] leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          {item.a}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 px-6" style={{ background: "var(--bg)" }}>
      <div className="max-w-3xl mx-auto">
        <h2
          className="font-syne font-extrabold mb-16"
          style={{ fontSize: "clamp(2rem, 4vw, 3rem)", color: "var(--text-primary)", letterSpacing: "-0.02em" }}
        >
          Frequently asked
        </h2>

        <div className="space-y-16">
          {faqData.map((category) => (
            <div key={category.title}>
              <h3
                className="font-syne font-bold text-lg mb-4"
                style={{ color: "var(--text-primary)" }}
              >
                {category.title}
              </h3>
              <div className="space-y-2">
                {category.items.map((item) => (
                  <AccordionItem key={item.q} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
