"use client"

import { Container } from "../global/container";
import Icons from "../global/icons";
import { Wrapper } from "../global/wrapper";
import SectionBadge from "../ui/section-badge";
import { Cpu, Brain, Shield, Coins, Network, Cloud } from "lucide-react";

const features = [
  {
    title: "Decentralized Computing",
    info: "Transform idle devices into revenue-generating nodes in our global computing network, from laptops to enterprise servers",
    icon: Network
  },
  {
    title: "AI-Powered Optimization",
    info: "Smart resource matching and task distribution powered by advanced AI algorithms for maximum efficiency",
    icon: Brain
  },
  {
    title: "Multi-Resource Support",
    info: "Comprehensive support for CPUs, GPUs, storage, and bandwidth with intelligent resource allocation",
    icon: Cpu
  },
  {
    title: "Economic Incentives",
    info: "Fair reward system based on resource quality and network demand through blockchain-based tokenomics",
    icon: Coins
  },
  {
    title: "Enterprise Integration",
    info: "Seamless integration with AI frameworks and development workflows for ML training and research",
    icon: Cloud
  },
  {
    title: "Advanced Security",
    info: "Multi-layered security with encryption and AI-powered verification for secure task execution",
    icon: Shield
  }
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="py-12">
      <Wrapper className="relative">
        <div className="hidden md:block absolute top-0 -right-1/4 w-56 h-56 bg-primary/30 rounded-full blur-[8rem] -z-10"></div>
        <div className="hidden md:block absolute bottom-0 -left-1/4 w-56 h-56 bg-indigo-600/30 rounded-full blur-[8rem] -z-10"></div>

        <Container className="max-w-6xl mx-auto">
          <div className="max-w-2xl mx-auto text-center mb-12">
            <SectionBadge title="Core Features" />
            <h2 className="text-2xl md:text-3xl font-semibold mt-4">
              Revolutionizing Computing Power
            </h2>
            <p className="text-muted-foreground text-sm mt-4">
              Democratizing access to high-performance computing through decentralization
            </p>
          </div>
          <Container>
          <div className="flex items-center justify-center mx-auto my-8 pb-8">
            <Icons.feature className="w-auto h-80" />
          </div>
        </Container>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-5 rounded-xl border border-border/50 
                hover:border-primary/50 transition-all duration-300 
                hover:shadow-md bg-gradient-to-r from-background/50 to-background
                hover:bg-gradient-to-r hover:from-primary/5 hover:to-indigo-600/5"
              >
                <div className="flex items-center justify-center w-12 h-12 
                  rounded-lg bg-gradient-to-r from-primary/10 to-indigo-600/10 
                  group-hover:from-primary/20 group-hover:to-indigo-600/20 
                  transition-colors duration-300"
                >
                  <feature.icon className="w-6 h-6 text-primary group-hover:text-primary/80" />
                </div>
                <h3 className="text-lg font-medium mt-4">{feature.title}</h3>
                <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
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