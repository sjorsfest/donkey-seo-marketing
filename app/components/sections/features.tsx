"use client";

import { motion } from "framer-motion";
import { FadeIn } from "~/components/motion/fade-in";
import { StaggerContainer, StaggerItem } from "~/components/motion/stagger";
import { Card, CardContent, CardTitle } from "~/components/ui/card";
import { features } from "~/data/features";

export function Features() {
  return (
    <section id="features" className="py-20">
      <div className="section-container">
        <FadeIn className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-4">
            Everything you need to ship SEO content
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            From keyword research to CMS delivery. Built for solo founders,
            indie builders, and small teams.
          </p>
        </FadeIn>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <StaggerItem key={index}>
              <Card className="h-full" variant="shiny" hover>
                <CardContent className="p-6">
                  <motion.div
                    className="text-3xl sm:text-4xl mb-4 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-teal-100 flex items-center justify-center border-2 border-outline"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    {feature.icon}
                  </motion.div>
                  <CardTitle className="mb-2 text-xl sm:text-2xl">{feature.title}</CardTitle>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
