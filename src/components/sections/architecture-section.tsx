"use client"

import { Container } from "../global/container";
import { Wrapper } from "../global/wrapper";
import SectionBadge from "../ui/section-badge";
import Image from "next/image";
import { ArrowRight, Cpu, Network, Shield } from "lucide-react";
import { motion } from "framer-motion";

const layers = [
    {
      title: "Application Layer",
      description: "Interactive platform for AI development, trading and resource management",
      features: [
        "AI Development Interface",
        "Token Management",
        "AI Model Exchange",
        "Computing Resource Market",
      ],
      icon: Shield,
      gradient: "from-blue-500/20 to-blue-600/20"
    },
    {
      title: "Core Service Layer", 
      description: "Essential services powering the AI development ecosystem",
      features: [
        "AI Training Pipeline",
        "Resource Orchestration",
        "Token Generation System",
        "Transaction Processing"
      ],
      icon: Network,
      gradient: "from-indigo-500/20 to-indigo-600/20"
    },
    {
      title: "Network & Infrastructure Layer",
      description: "Decentralized computing foundation with robust security",
      features: [
        "Distributed Computing",
        "Resource Analytics",
        "Security Framework",
        "Performance Tracking"
      ],
      icon: Cpu,
      gradient: "from-purple-500/20 to-purple-600/20"
    }
  ];

export const ArchitectureSection = () => {
  return (
    <section id="architecture">
      <Wrapper className="flex flex-col justify-center py-8 relative">
        {/* Background effects */}
        <div className="hidden md:block absolute top-0 -right-1/3 w-60 h-60 bg-primary rounded-full blur-[8rem] -z-10"></div>
        <div className="hidden md:block absolute bottom-0 -left-1/3 w-60 h-60 bg-indigo-600 rounded-full blur-[8rem] -z-10"></div>

        {/* Header */}
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <SectionBadge title="Architecture" />
            <h2 className="text-3xl lg:text-4xl font-bold mt-4">
              Platform Architecture
            </h2>
            <p className="text-muted-foreground mt-4 text-base">
              Secure and scalable infrastructure for AI training and resource sharing
            </p>
          </motion.div>
        </Container>

        {/* Main Content */}
        <Container className="mt-12">
          <div className="grid grid-cols-12 gap-8 items-center">
            {/* Image - 5 columns */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="col-span-12 lg:col-span-6"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image 
                  src="/assets/layer.png"
                  alt="Layer Architecture"
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>

            {/* Content - 7 columns */}
            <div className="col-span-12 lg:col-span-6">
              <div className="space-y-8">
                {/* Architecture Layers */}
                <div className="space-y-6">
                  {layers.map((layer, index) => (
                    <motion.div 
                      key={layer.title}
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ 
                        duration: 0.5,
                        delay: index * 0.2 // stagger effect
                      }}
                      viewport={{ once: true }}
                      whileHover={{ scale: 1.02 }}
                      className={`p-4 rounded-lg bg-gradient-to-r ${layer.gradient} border border-border/50 hover:border-primary/50 transition-all duration-300`}
                    >
                      <div className="flex items-center gap-2">
                        <layer.icon className="w-5 h-5 text-foreground" />
                        <h3 className="text-lg font-semibold">{layer.title}</h3>
                      </div>
                      <p className="mt-2 text-sm text-muted-foreground">
                        {layer.description}
                      </p>
                      <div className="mt-3 flex flex-wrap gap-1.5">
                        {layer.features.map((feature, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-1 rounded-full bg-background/50 text-foreground text-sm border border-border/50"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Token System */}
                <motion.div 
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="p-6 rounded-xl bg-card border border-border"
                >
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <span>Custom Token System</span>
                    <ArrowRight className="w-4 h-4" />
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    After successful training, users can create custom tokens for their AI models. 
                    These tokens are required for accessing and utilizing the trained models.
                  </p>
                  <div className="mt-4 flex flex-wrap gap-3">
                    <span className="px-3 py-1 rounded-full bg-card border border-border text-sm">
                      Token Creation
                    </span>
                    <span className="px-3 py-1 rounded-full bg-card border border-border text-sm">
                      Access Control
                    </span>
                    <span className="px-3 py-1 rounded-full bg-card border border-border text-sm">
                      Model Monetization
                    </span>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </Container>
      </Wrapper>
    </section>
  );
};