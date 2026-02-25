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
          <p className="text-xl text-muted-foreground">
            Everything you need to know about Donkey SEO
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="bg-card rounded-2xl border-2 border-outline shadow-lg p-6">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-display font-bold text-foreground">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
