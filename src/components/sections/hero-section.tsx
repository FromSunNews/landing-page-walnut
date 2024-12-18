"use client"

import Link from "next/link";
import Image from "next/image";
import { Container } from "../global/container";
import { Wrapper } from "../global/wrapper";
import AnimatedGradientText from "../ui/animated-gradient-text";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { BorderBeam } from "../ui/border-beam";
import { Button } from "../ui/button";
import { ArrowRight, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export const HeroSection = () => {
  return (
    <section id="hero">
      <Wrapper>
      <div className="absolute inset-0 dark:bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10 h-[150vh]" />

      <Container>
        <div className="flex flex-col items-center justify-center py-20 h-full">    
          <button className="group relative grid overflow-hidden rounded-full shadow-[0_1000px_0_0_hsl(0_0%_20%)_inset] transition-colors duration-200 bg-gradient-to-tr from-primary/40">
            <span className="h-full w-full blur-md absolute bottom-0 inset-x-0 bg-gradient-to-tr from-primary/40" />
            <AnimatedGradientText className="bg-neutral-950">
              🚀 <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />
              <span className={cn(
                `inline animate-gradient bg-gradient-to-r from-[#FFAA40] via-[#9C40FF] to-[#FFAA40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`,
              )}>
                Revolutionizing AI Computing
              </span>
              <ChevronRight className="ml-2 w-4 h-4" />
            </AnimatedGradientText>
          </button>

          <div className="flex flex-col mt-8 w-full md:max-w-6xl items-center">
          <TextGenerateEffect words="Building the World's First Decentralized AI Supercomputer" title={true} />

          <div className="space-y-4 text-center">
            <p className="text-base md:text-lg text-foreground/80 mt-6 text-center">
              Transform the future of AI computing through our groundbreaking decentralized platform. 
              Whether you're an AI researcher, developer, or resource provider, join us in democratizing 
              access to high-performance computing.
            </p>
          </div>

            <div className="flex gap-4 mt-8">
              <Link href="/provide">
                <Button size="lg" className="rounded-full bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-600/90">
                  Share Resources
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link href="/marketplace">
                <Button size="lg" variant="outline" className="rounded-full">
                  Explore AI Agents
                </Button>
              </Link>
            </div>
          </div>

          <div className="relative flex items-center justify-center mx-auto py-10 md:py-20 w-full">
            <div className="absolute top-1/2 left-1/2 -z-10 gradient w-3/4 -translate-x-1/2 h-3/4 -translate-y-1/2 inset-0 blur-[10rem]"></div>
            <div className="-m-2 rounded-xl p-2 ring-1 ring-inset ring-foreground/20 lg:-m-4 lg:rounded-2xl bg-opacity-50 backdrop-blur-3xl">
              <Image
                src="/assets/dashboard.png" // Need to replace with actual project dashboard
                alt="Depin AI Dashboard"
                width={800}
                height={800}
                quality={100}
                className="left-1/2 rounded-md lg:rounded-xl bg-foreground/10 shadow-2xl ring-1 ring-border"
              />
              <BorderBeam size={250} duration={12} delay={9} />
            </div>
          </div>
        </div>
      </Container>
    </Wrapper>
    </section>
  );
}