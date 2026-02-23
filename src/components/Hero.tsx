"use client";

import { motion } from "framer-motion";
import { Phone, Calendar, Dumbbell, Zap } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="relative md:h-screen min-h-[800px] w-full overflow-hidden flex items-center bg-black">
            {/* Background with overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-110"
                style={{
                    backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.95) 10%, rgba(0, 0, 0, 0.4)), url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')`
                }}
            />

            {/* Floating Elements */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                <motion.div
                    className="absolute top-[15%] right-[10%] opacity-20 hidden lg:block"
                    animate={{ y: [0, -40, 0], rotate: [0, 15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Dumbbell size={150} className="text-white" />
                </motion.div>
                <motion.div
                    className="absolute bottom-[20%] right-[25%] opacity-15 hidden lg:block"
                    animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                    <Dumbbell size={100} className="text-primary" />
                </motion.div>
                <motion.div
                    className="absolute top-[40%] right-[35%] opacity-10 hidden lg:block"
                    animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                >
                    <Zap size={80} className="text-white" />
                </motion.div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20 lg:pt-28">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center lg:text-left"
                    >
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 px-4 py-2 rounded-full text-[10px] md:text-xs font-black uppercase tracking-[0.2em] text-primary mb-6"
                        >
                            <Zap size={14} className="animate-pulse" />
                            Solapur&apos;s Leading Premium Gym
                        </motion.div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white leading-[1.1] lg:leading-[0.9] tracking-tighter mb-8 uppercase transition-all duration-500">
                            Transform <br className="hidden md:block" /> Your <span className="text-primary italic animate-pulse">Body</span> <br className="hidden md:block" /> At <span className="text-silver-metallic drop-shadow-[0_0_15px_rgba(255,255,255,0.3)]">TNS</span> Fitness
                        </h1>

                        <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-6">
                            <button className="btn-primary flex-1 sm:flex-none text-sm md:text-lg px-6 md:px-10 py-4 md:py-5 whitespace-nowrap">
                                JOIN THE ELITE
                            </button>
                            <button className="btn-outline flex-1 sm:flex-none flex items-center justify-center gap-2 text-sm md:text-lg px-6 md:px-10 py-4 md:py-5 whitespace-nowrap">
                                <Calendar size={18} />
                                FREE TRIAL
                            </button>
                            <a
                                href="tel:8055509999"
                                className="flex items-center gap-2 md:gap-3 text-white font-black hover:text-primary transition-all group whitespace-nowrap"
                            >
                                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary transition-colors">
                                    <Phone size={18} className="group-hover:text-white" />
                                </div>
                                <span className="text-base md:text-xl">80555 09999</span>
                            </a>
                        </div>
                    </motion.div>

                    {/* Right Side: Responsive Circular Dumbbell Animation */}
                    <div className="flex justify-center relative mt-12 lg:mt-0">
                        <div className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] lg:w-[400px] lg:h-[400px]">
                            {/* Rotating Outer Ring */}
                            <motion.div
                                className="absolute inset-0 border-[2px] border-dashed border-white/10 rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                            />

                            {/* Inner Pulsing Ring */}
                            <motion.div
                                className="absolute inset-8 md:inset-12 border-[1.5px] border-primary/20 rounded-full"
                                animate={{ scale: [1, 1.05, 1], opacity: [0.2, 0.4, 0.2] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            />

                            {/* Center Dumbbell */}
                            <div className="absolute inset-0 flex items-center justify-center">
                                <motion.div
                                    animate={{
                                        y: [0, -10, 0],
                                        rotate: [-5, 5, -5]
                                    }}
                                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                                    className="relative z-10"
                                >
                                    <Dumbbell className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 text-primary drop-shadow-[0_0_20px_rgba(255,0,0,0.4)]" />
                                </motion.div>
                            </div>

                            {/* Orbital Dumbbells - Responsive Radius */}
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    className="absolute w-8 h-8 md:w-10 md:h-10 flex items-center justify-center"
                                    animate={{
                                        rotate: i * 120 + 360,
                                        x: Math.cos((i * 120 * Math.PI) / 180) * (window?.innerWidth < 768 ? 120 : 180),
                                        y: Math.sin((i * 120 * Math.PI) / 180) * (window?.innerWidth < 768 ? 120 : 180),
                                    }}
                                    transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                                >
                                    <Dumbbell className="w-4 h-4 md:w-5 md:h-5 text-white/20" />
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20" />

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 opacity-50 hidden md:block"
            >
                <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center pt-2">
                    <div className="w-1 h-2 bg-white rounded-full" />
                </div>
            </motion.div>
        </section>
    );
}
