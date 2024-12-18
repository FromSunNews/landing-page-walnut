"use client"

import Link from "next/link";
import { buttonVariants } from "../ui/button";
// import { currentUser } from "@clerk/nextjs/server";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useEffect, useState } from "react";

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
      const offset = 80; // Điều chỉnh offset nếu cần
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
          <Image src="/icons/icon.png" alt="WalnutNetwork" width={32} height={32} />
          <span className="text-lg font-medium">WalnutNetwork</span>
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

        <div className="flex items-center gap-4">
          {/* {user ? (
            <UserButton />
          ) : ( */}
            <>
              <Link href="/sign-in" className={buttonVariants({size: "sm", variant: "ghost"})}>
                Login
              </Link>
              <Link href="/sign-up" className={buttonVariants({size: "sm", className:"hidden md:flex"})}>
                Start free trial
              </Link>
            </>
          {/* )} */}
        </div>
      </div>
    </header>
  );
}