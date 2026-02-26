"use client";

import { FadeIn } from "~/components/motion/fade-in";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "~/components/ui/accordion";
import { faqItems } from "~/data/faq";

export function FAQ() {
  return (
    <section id="faq" className="py-20">
      <div className="section-container max-w-4xl">
        <FadeIn className="text-center mb-12">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Frequently asked questions
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Everything you need to know about Donkey SEO
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="space-y-3">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-muted-bg rounded-xl p-4 border-2 border-border hover:border-teal-300 transition-colors"
                >
                  <AccordionItem value={`item-${index}`} className="border-0">
                    <AccordionTrigger className="text-left font-display font-bold text-foreground text-lg leading-relaxed hover:no-underline">
                      {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </AccordionContent>
                  </AccordionItem>
                </div>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
