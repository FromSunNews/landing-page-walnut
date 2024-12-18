"use client"

import { Container } from "../global/container";
import { Wrapper } from "../global/wrapper";
import SectionBadge from "../ui/section-badge";
import { Cpu, Brain, Coins } from "lucide-react"; // Import Lucide React icons

// Define process steps
const steps = [
  {
    title: "Share Resources",
    info: "Contribute your CPU/GPU to the network and earn tokens as rewards for sharing computing resources.",
    icon: Cpu
  },
  {
    title: "Develop AI Agents",
    info: "Use network resources to develop and train your own AI Agents, with unique tokens for each Agent.",
    icon: Brain
  },
  {
    title: "Use & Trade",
    info: "Access and utilize AI Agents through corresponding tokens, participating in the decentralized AI ecosystem.",
    icon: Coins
  }
];

export const ProcessSection = () => {
  return (
    <section id="process">
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <Container>
          <div className="max-w-md md:mx-auto text-start md:text-center">
            <SectionBadge title="The Process" />
            <h2 className="text-3xl lg:text-4xl font-semibold mt-6">
              Three steps to join Depin AI ecosystem
            </h2>
            <p className="text-muted-foreground mt-6">
              Easily participate in the decentralized AI platform with these simple steps
            </p>
          </div>
        </Container>
        <Container>
          <div className="flex flex-col items-center justify-center py-10 md:py-20 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full divide-x-0 md:divide-x divide-y md:divide-y-0 divide-gray-900 lg:first:border-none first:border-gray-900">
              {steps.map((step) => (
                <div
                  key={step.title}
                  className="flex flex-col items-start px-4 py-4 md:px-6 lg:px-8 lg:py-6"
                >
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-primary/10">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-medium mt-4">{step.title}</h3>
                  <p className="text-muted-foreground mt-2 text-start">
                    {step.info}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
};