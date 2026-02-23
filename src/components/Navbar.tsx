"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Dumbbell } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Pricing", href: "#pricing" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4",
                scrolled ? "glass py-3 shadow-lg" : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <Link href="/" className="group flex items-baseline">
                    <span className="text-4xl md:text-5xl font-black tracking-tighter text-silver-metallic italic">
                        TNS
                    </span>
                    <span className="text-xs font-black tracking-[0.2em] text-primary ml-1 uppercase">
                        Fitness
                    </span>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-bold uppercase tracking-widest text-white/80 hover:text-primary transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link
                        href="#contact"
                        className="btn-primary py-2 px-6 text-sm"
                    >
                        JOIN NOW
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={cn(
                    "fixed inset-0 bg-black z-40 flex flex-col items-center justify-center gap-8 transition-all duration-500 md:hidden",
                    isOpen ? "translate-x-0" : "translate-x-full"
                )}
            >
                <button
                    className="absolute top-6 right-6 text-white"
                    onClick={() => setIsOpen(false)}
                >
                    <X size={40} />
                </button>
                {navLinks.map((link) => (
                    <Link
                        key={link.name}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-3xl font-black uppercase tracking-tighter text-white hover:text-primary transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
                <Link
                    href="#contact"
                    onClick={() => setIsOpen(false)}
                    className="btn-primary"
                >
                    JOIN NOW
                </Link>
            </div>
        </nav>
    );
}
