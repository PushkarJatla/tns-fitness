"use client";

import { motion } from "framer-motion";
import { Check, Zap, Target, Star, Crown } from "lucide-react";

const plans = [
    {
        name: "Monthly",
        price: "2000",
        duration: "1 Month",
        features: ["Full Gym Access", "Locker Facility", "Shower Access", "Professional Guidance"],
        icon: Target,
        button: "Get Started",
        popular: false,
    },
    {
        name: "Quarterly",
        price: "5000",
        duration: "3+2 Mo",
        features: ["5 Months Total", "All Facility Access", "Steam Bath", "Diet Consultation"],
        icon: Zap,
        button: "Join Now",
        popular: false,
    },
    {
        name: "Semi-Annual",
        price: "7000",
        duration: "6+3 Mo",
        features: ["9 Months Total", "Priority Support", "Personalized Workout", "Full Premium Access"],
        icon: Star,
        button: "Popular",
        popular: true,
    },
    {
        name: "Yearly",
        price: "8500",
        duration: "12 Months",
        features: ["Best Value Plan", "All-Inclusive Access", "Personal training intro", "Special Discounts"],
        icon: Crown,
        button: "Go Elite",
        popular: false,
    },
];

export default function Pricing() {
    return (
        <section id="pricing" className="py-24 bg-black relative overflow-hidden mesh-gradient">
            {/* Background decoration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(255,0,0,0.08)_0%,transparent_70%)]" />

            <div className="max-w-7xl mx-auto px-2 md:px-6 relative z-10">
                <div className="text-center mb-16 md:mb-24">
                    <div className="inline-block bg-primary/10 border border-primary/20 px-4 py-1 rounded-full text-primary text-[10px] md:text-xs font-black uppercase tracking-widest mb-4">
                        Membership Plans
                    </div>
                    <h2 className="text-3xl md:text-7xl font-black text-white uppercase italic leading-none tracking-tighter">
                        Pick Your <span className="text-primary">Power</span> Plan
                    </h2>
                </div>

                <div className="grid grid-cols-4 gap-1.5 md:gap-8">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative p-2 md:p-10 rounded-xl md:rounded-[3rem] border transition-all duration-500 flex flex-col group ${plan.popular
                                ? "bg-primary border-primary shadow-[0_10px_20px_rgba(255,0,0,0.2)] md:shadow-[0_30px_60px_rgba(255,0,0,0.25)] z-10"
                                : "bg-secondary/50 backdrop-blur-xl border-white/5 hover:border-primary/50"
                                }`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-2 left-1/2 -translate-x-1/2 bg-white text-primary font-black text-[5px] md:text-[10px] px-2 md:px-6 py-0.5 md:py-2 rounded-full uppercase tracking-widest shadow-2xl whitespace-nowrap">
                                    Top Pick
                                </div>
                            )}

                            <div className="mb-2 md:mb-10 text-center">
                                <div className={`w-6 h-6 md:w-16 md:h-16 rounded-lg md:rounded-2xl flex items-center justify-center mb-2 md:mb-6 mx-auto ${plan.popular ? "bg-white/20" : "bg-primary/10"}`}>
                                    <plan.icon className={plan.popular ? "text-white" : "text-primary"} size={12} />
                                </div>
                                <h3 className={`text-[7px] md:text-xl font-black uppercase tracking-tighter mb-1 md:mb-4 ${plan.popular ? "text-white" : "text-white"}`}>
                                    {plan.name}
                                </h3>
                                <div className="flex items-center justify-center gap-0.5">
                                    <span className={`text-[10px] md:text-5xl font-black ${plan.popular ? "text-white" : "text-silver-metallic"}`}>
                                        ₹{plan.price}
                                    </span>
                                </div>
                                <div className={`text-[5px] md:text-[10px] font-black uppercase tracking-widest mt-1 ${plan.popular ? "text-white/70" : "text-primary"}`}>
                                    / {plan.duration}
                                </div>
                            </div>

                            <ul className="space-y-1 md:space-y-5 mb-3 md:mb-12 flex-grow overflow-hidden">
                                {plan.features.slice(0, 3).map((feature, i) => (
                                    <li key={i} className="flex items-start gap-1 md:gap-4">
                                        <div className={`shrink-0 w-2 h-2 md:w-5 md:h-5 rounded-full flex items-center justify-center mt-0.5 ${plan.popular ? "bg-white/20" : "bg-primary/10"}`}>
                                            <Check
                                                size={6}
                                                className={plan.popular ? "text-white" : "text-primary"}
                                            />
                                        </div>
                                        <span className={`text-[6px] md:text-sm font-bold leading-tight truncate ${plan.popular ? "text-white/90" : "text-white/60"}`}>
                                            {feature}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <button
                                className={`w-full py-1.5 md:py-5 rounded-lg md:rounded-[2rem] font-black uppercase tracking-tighter md:tracking-widest text-[6px] md:text-xs transition-all duration-500 ${plan.popular
                                    ? "bg-white text-primary hover:bg-black hover:text-white shadow-lg"
                                    : "bg-white/5 text-white hover:bg-primary border border-white/10 hover:border-primary"
                                    }`}
                            >
                                {plan.popular ? "JOIN" : "GET IT"}
                            </button>
                        </motion.div>
                    ))}
                </div>

                <div className="mt-12 md:mt-20 text-center">
                    <p className="text-white/20 text-[6px] md:text-xs font-black uppercase tracking-[0.2em] md:tracking-[0.3em]">
                        * All payments are one-time. No hidden recurring charges.
                    </p>
                </div>
            </div>
        </section>
    );
}
