"use client"

import { Container } from "../global/container";
import Icons from "../global/icons";
import { Wrapper } from "../global/wrapper";
import SectionBadge from "../ui/section-badge";
import { features } from "@/constants";

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-16">
      <Wrapper className="relative">
        <div className="hidden md:block absolute top-0 -right-1/4 w-56 h-56 bg-primary/30 rounded-full blur-[8rem] -z-10"></div>
        <div className="hidden md:block absolute bottom-0 -left-1/4 w-56 h-56 bg-indigo-600/30 rounded-full blur-[8rem] -z-10"></div>

        <Container className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <SectionBadge title="Features" />
            <h2 className="text-2xl md:text-3xl font-semibold mt-4">
              Explore Depin AI Ecosystem
            </h2>
            <p className="text-muted-foreground text-sm mt-4">
              A decentralized platform enabling democratic participation in AI development and utilization
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <Icons.feature className="w-auto h-48 md:h-64" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-xl border border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-primary/10 to-indigo-600/10 group-hover:from-primary group-hover:to-indigo-600 transition-colors duration-300">
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-white" />
                </div>
                <h3 className="text-base font-medium mt-4">{feature.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">
                  {feature.info}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Wrapper>
    </section>
  );
};