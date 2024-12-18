import Link from "next/link";
import Icons from "../global/icons";
import { Heart } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32">
        <div className="hidden lg:block absolute -top-1/3 -right-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>
        <div className="hidden lg:block absolute bottom-0 -left-1/4 bg-primary w-72 h-72 rounded-full -z-10 blur-[14rem]"></div>

        <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">
            <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                <div className="flex items-start">
                    <Image src="/icons/icon.png" alt="Depin AI" width={28} height={28} />
                </div>
                <p className="text-muted-foreground mt-4 text-sm text-start">
                    Decentralized Platform for AI Development and Resource Sharing
                </p>
                <span className="mt-4 text-neutral-200 text-sm flex flex-row items-center">
                   Built with
                   by Walnut Network
                </span>
            </div>

            <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div className="">
                        <h3 className="text-base font-medium text-white">
                            Platform
                        </h3>
                        <ul className="mt-4 text-sm text-muted-foreground">
                            <li className="mt-2">
                                <Link href="#features" className="hover:text-foreground transition-all duration-300">
                                    Features
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="#pricing" className="hover:text-foreground transition-all duration-300">
                                    Pricing
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="#testimonials" className="hover:text-foreground transition-all duration-300">
                                    Testimonials
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="/documentation" className="hover:text-foreground transition-all duration-300">
                                    Documentation
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-10 md:mt-0 flex flex-col">
                        <h3 className="text-base font-medium text-white">
                            Community
                        </h3>
                        <ul className="mt-4 text-sm text-muted-foreground">
                            <li className="">
                                <Link href="https://discord.gg/walnutnetwork" className="hover:text-foreground transition-all duration-300">
                                    Discord
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="https://t.me/walnutnetwork" className="hover:text-foreground transition-all duration-300">
                                    Telegram
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="https://twitter.com/walnutnetwork" className="hover:text-foreground transition-all duration-300">
                                    Twitter
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="https://github.com/walnutnetwork" className="hover:text-foreground transition-all duration-300">
                                    GitHub
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="md:grid md:grid-cols-2 md:gap-8">
                    <div className="">
                        <h3 className="text-base font-medium text-white">
                            Resources
                        </h3>
                        <ul className="mt-4 text-sm text-muted-foreground">
                            <li className="mt-2">
                                <Link href="/blog" className="hover:text-foreground transition-all duration-300">
                                    Blog
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="/whitepaper" className="hover:text-foreground transition-all duration-300">
                                    Whitepaper
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="/support" className="hover:text-foreground transition-all duration-300">
                                    Support
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-10 md:mt-0 flex flex-col">
                        <h3 className="text-base font-medium text-white">
                            Legal
                        </h3>
                        <ul className="mt-4 text-sm text-muted-foreground">
                            <li className="">
                                <Link href="/privacy" className="hover:text-foreground transition-all duration-300">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="/terms" className="hover:text-foreground transition-all duration-300">
                                    Terms of Service
                                </Link>
                            </li>
                            <li className="mt-2">
                                <Link href="/disclaimer" className="hover:text-foreground transition-all duration-300">
                                    Disclaimer
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <div className="mt-8 border-t border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
            <p className="text-sm text-muted-foreground mt-8 md:mt-0">
                &copy; {new Date().getFullYear()} Walnut Network. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm text-white mt-8 md:mt-0">
                <Link href="/status" className="hover:text-white/80 transition">
                    System Status
                </Link>
                <Link href="/changelog" className="hover:text-white/80 transition">
                    Changelog
                </Link>
            </div>
        </div>
    </footer>
  );
}