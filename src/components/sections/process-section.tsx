"use client"

import { Container } from "../global/container";
import { Wrapper } from "../global/wrapper";
import SectionBadge from "../ui/section-badge";
import { Cpu, Brain, Coins, Network, Server, Shield } from "lucide-react";

const steps = [
  {
    title: "Connect Resources",
    info: "Connect your computing devices (CPU, GPU, storage) to our network and verify your resources through our secure validation process",
    icon: Network
  },
  {
    title: "Resource Validation",
    info: "AI-powered system validates and rates your computing resources based on performance, reliability and availability",
    icon: Shield
  },
  {
    title: "Smart Task Matching",
    info: "Advanced AI algorithms automatically match your resources with optimal computing tasks from the network",
    icon: Brain
  },
  {
    title: "Task Execution",
    info: "Your resources execute assigned tasks securely, from AI training to scientific computations",
    icon: Server
  },
  {
    title: "Performance Monitoring",
    info: "Real-time monitoring and optimization of resource utilization and task execution efficiency",
    icon: Cpu
  },
  {
    title: "Earn Rewards",
    info: "Receive token rewards automatically based on resource contribution, task complexity and performance quality",
    icon: Coins
  }
];

export const ProcessSection = () => {
  return (
    <section id="process">
      <Wrapper className="flex flex-col items-center justify-center py-12 relative">
        <div className="hidden md:block absolute top-0 -right-1/4 w-56 h-56 bg-primary/30 rounded-full blur-[8rem] -z-10"></div>
        <div className="hidden md:block absolute bottom-0 -left-1/4 w-56 h-56 bg-indigo-600/30 rounded-full blur-[8rem] -z-10"></div>

        <Container>
          <div className="max-w-2xl mx-auto text-center">
            <SectionBadge title="How It Works" />
            <h2 className="text-2xl md:text-3xl font-semibold mt-4">
              Join Our Decentralized Computing Network
            </h2>
            <p className="text-muted-foreground text-sm mt-4">
              Transform your computing resources into revenue through our AI-powered platform
            </p>
          </div>
        </Container>

        <Container className="mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className="relative p-6 rounded-xl border border-border/50 
                hover:border-primary/50 transition-all duration-300 
                bg-gradient-to-r from-background/50 to-background
                hover:shadow-md"
              >
                <div className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 
                    rounded-lg bg-gradient-to-r from-primary/10 to-indigo-600/10 
                    group-hover:from-primary/20 group-hover:to-indigo-600/20"
                  >
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-muted-foreground">
                    Step {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-medium mt-4">{step.title}</h3>
                <p className="text-muted-foreground text-sm mt-2">
                  {step.info}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </Wrapper>
    </section>
  );
};