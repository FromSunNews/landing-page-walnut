"use client"

import Link from "next/link";
import { buttonVariants } from "../ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ExternalLink } from "lucide-react";

const APP_CONFIG = {
  name: "WALNUT",
  logo: "/icons/icon.png",
  appUrl: "https://app.walnutnetwork.io",
  docsUrl: "https://docs.walnutnetwork.io"
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`px-4 h-14 sticky top-0 inset-x-0 w-full backdrop-blur-lg border-b z-50 transition-all duration-200 
      ${isScrolled ? 'bg-background/80 border-border' : 'bg-transparent border-transparent'}`}>
      <div className="flex items-center justify-between h-full mx-auto md:max-w-screen-xl">
        <div className="flex items-start">
          <Link href="/" className="flex items-center gap-2">
            <Image src={APP_CONFIG.logo} alt={APP_CONFIG.name} width={32} height={32} />
            <span className="text-lg font-medium">{APP_CONFIG.name}</span>
          </Link>
        </div>

        <nav className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform">
          <ul className="flex items-center justify-center gap-8">
            <li className="hover:text-foreground/80 text-sm">
              <button 
                onClick={() => scrollToSection('hero')}
                className="transition-colors duration-200 hover:text-primary"
              >
                Home
              </button>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <button 
                onClick={() => scrollToSection('architecture')}
                className="transition-colors duration-200 hover:text-primary"
              >
                Architecture
              </button>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <button 
                onClick={() => scrollToSection('features')}
                className="transition-colors duration-200 hover:text-primary"
              >
                Features
              </button>
            </li>
            <li className="hover:text-foreground/80 text-sm">
              <button 
                onClick={() => scrollToSection('process')}
                className="transition-colors duration-200 hover:text-primary"
              >
                Process
              </button>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link 
            href={APP_CONFIG.docsUrl}
            className={buttonVariants({
              size: "sm", 
              variant: "ghost",
              className: "hidden md:flex"
            })}
          >
            Docs
          </Link>
          
          <Link 
            href={APP_CONFIG.appUrl}
            target="_blank"
            className={buttonVariants({
              size: "sm",
              className: "hidden rounded-full md:flex items-center gap-2 bg-gradient-to-r from-primary to-indigo-600 hover:from-primary/90 hover:to-indigo-600/90"
            })}
          >
            Launch App
            <ExternalLink className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </header>
  );
}