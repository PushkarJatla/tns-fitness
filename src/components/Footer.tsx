"use client";

import { motion } from "framer-motion";
import { Dumbbell, Instagram, Facebook, Twitter, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-black pt-24 pb-12 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6">
                {/* Main CTA */}
                <div className="bg-primary rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden mb-24">
                    {/* Decorative icons */}
                    <Dumbbell className="absolute -left-10 -top-10 text-white/10 w-64 h-64 -rotate-12" />
                    <Dumbbell className="absolute -right-10 -bottom-10 text-white/10 w-64 h-64 rotate-45" />

                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-7xl font-black text-white uppercase italic leading-none mb-6">
                            Start Your Fitness <br /> Journey Today
                        </h2>
                        <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10">
                            Join Solapur&apos;s premium fitness destination and achieve your goals
                            with expert guidance and world-class facilities.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-white text-primary font-black px-10 py-5 rounded-full text-xl hover:bg-black hover:text-white transition-all duration-300">
                                GET MEMBERSHIP
                            </button>
                            <button className="bg-black/20 text-white border-2 border-white/30 font-black px-10 py-5 rounded-full text-xl hover:bg-white hover:text-black transition-all duration-300">
                                BOOK FREE TRIAL
                            </button>
                        </div>
                    </div>
                </div>

                {/* Footer Links */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="space-y-6">
                        <Link href="/" className="relative h-16 w-16 md:h-20 md:w-20 group">
                            <Image
                                src="/images/tnslogo.png"
                                alt="TNS Fitness Logo"
                                fill
                                className="object-contain transition-transform duration-300 group-hover:scale-110"
                            />
                        </Link>
                        <p className="text-white/40 leading-relaxed">
                            Established in 2015, we are Solapur&apos;s leading premium fitness center
                            dedicated to transforming lives through expert training and state-of-the-art
                            equipment.
                        </p>
                        <div className="flex gap-4">
                            {[Instagram, Facebook, Twitter].map((Icon, i) => (
                                <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-black uppercase mb-8 tracking-widest text-sm">Quick Links</h4>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Services', 'Pricing', 'Why Us', 'Contact'].map((link) => (
                                <li key={link}>
                                    <Link href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-white/50 hover:text-primary transition-colors flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full" />
                                        {link}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-black uppercase mb-8 tracking-widest text-sm">Our Facilities</h4>
                        <ul className="space-y-4">
                            {['Certified Trainers', 'Steam Bath', 'Juice Bar', 'Personal Training', 'Advanced Equipment', 'Shower & Locker'].map((item) => (
                                <li key={item} className="text-white/50 flex items-center gap-2">
                                    <span className="text-primary opacity-50">•</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-black uppercase mb-8 tracking-widest text-sm">Newsletter</h4>
                        <p className="text-white/40 text-sm mb-6">Subscribe to receive fitness tips and special offers.</p>
                        <div className="flex gap-2">
                            <input
                                className="bg-white/5 border border-white/10 rounded-full px-4 py-2 text-white text-sm outline-none focus:border-primary w-full"
                                placeholder="Your email"
                            />
                            <button className="bg-primary p-2 rounded-full text-white">
                                <Send size={20} />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-white/30 text-sm">
                        © 2026 <span className="text-white font-bold">TNS Fitness</span> – All Rights Reserved
                    </p>
                    <div className="flex gap-8 text-white/30 text-sm">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function Send({ size }: { size: number }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
    );
}
