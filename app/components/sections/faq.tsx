"use client";

import { HelpCircle, MessageCircleQuestion } from "lucide-react";
import { SectionHeader } from "~/components/ui/section-header";
import { FadeIn } from "~/components/motion/fade-in";
import { Button } from "~/components/ui/button";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "~/components/ui/accordion";
import { faqItems as defaultFaqItems, type FAQItem } from "~/data/faq";
import { useAppConfig } from "~/context/appConfig";

interface FAQProps {
  title?: string;
  subtitle?: string;
  items?: FAQItem[];
}

export function FAQ({
  title = "Frequently asked questions",
  subtitle = "Everything you need to know about Donkey SEO.",
  items,
}: FAQProps = {}) {
  const faqData = items ?? defaultFaqItems;
  const { appUrl } = useAppConfig();

  return (
    <section id="faq" className="py-20 md:py-28 bg-white/50">
      <div className="section-container max-w-3xl">
        <SectionHeader
          eyebrow="FAQ"
          eyebrowIcon={<HelpCircle />}
          title={title}
          subtitle={subtitle}
          className="mb-12"
        />

        <FadeIn delay={0.15}>
          <Accordion type="single" collapsible className="w-full space-y-3">
            {faqData.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-2xl border-2 border-outline bg-white px-5 shadow-[4px_4px_0_#1a1a1a] transition-all hover:-translate-y-0.5 hover:shadow-[5px_5px_0_#1a1a1a] data-[state=open]:bg-teal-50"
              >
                <AccordionItem value={`item-${index}`} className="border-0">
                  <AccordionTrigger className="py-5 text-left font-display text-base sm:text-lg font-bold text-foreground hover:no-underline [&>svg]:size-5 [&>svg]:text-teal-700">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              </div>
            ))}
          </Accordion>
        </FadeIn>

        {/* Still have questions */}
        <FadeIn delay={0.2}>
          <div className="mt-10 flex flex-col items-center gap-4 rounded-3xl border-2 border-outline bg-yellow-50 p-7 text-center shadow-[6px_6px_0_#1a1a1a] sm:flex-row sm:justify-between sm:text-left">
            <div className="flex items-center gap-4">
              <span className="icon-chip size-12 rounded-2xl bg-yellow-400 [&_svg]:size-6">
                <MessageCircleQuestion className="text-teal-950" strokeWidth={2.25} />
              </span>
              <div>
                <div className="font-display text-lg font-bold text-foreground">
                  Still have questions?
                </div>
                <div className="text-sm text-muted-foreground">
                  Start free and see it work on your own domain in minutes.
                </div>
              </div>
            </div>
            <Button variant="default" size="lg" className="shrink-0" asChild>
              <a href={appUrl}>Start free</a>
            </Button>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
