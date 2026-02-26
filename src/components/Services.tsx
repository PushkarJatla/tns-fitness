"use client";

import { motion } from "framer-motion";
import {
    Users, UtilityPole as Apple, HeartPulse, UserCheck,
    Dumbbell, Droplets, Lock, ShowerHead, GlassWater,
    ParkingCircle, Bath, Pizza, Zap
} from "lucide-react";

const services = [
    { icon: UserCheck, title: "Certified Trainers", desc: "Male & Female experts" },
    { icon: Apple, title: "Diet Consultants", desc: "Nutrition plans" },
    { icon: HeartPulse, title: "Physiotherapists", desc: "Recovery support" },
    { icon: Dumbbell, title: "Personal Training", desc: "One-on-one sessions" },
    { icon: Zap, title: "Group Classes", desc: "Yoga, Cardio, Aerobics" },
    { icon: Droplets, title: "Steam Bath", desc: "Full relaxation" },
    { icon: Lock, title: "Personal Lockers", desc: "Secure storage" },
    { icon: ShowerHead, title: "Shower Facilities", desc: "Clean & modern" },
    { icon: GlassWater, title: "Filtered Water", desc: "Stay hydrated" },
    { icon: ParkingCircle, title: "Parking", desc: "Validated parking" },
    { icon: Bath, title: "Towel Service", desc: "Fresh every time" },
    { icon: Pizza, title: "Juice Bar", desc: "Healthy salads & juices" },
];

export default function Services() {
    return (
        <section id="services" className="py-24 bg-black relative overflow-hidden mesh-gradient">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -ml-64 -mb-64" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <div className="max-w-2xl text-center md:text-left">
                        <div className="inline-block bg-primary/10 border border-primary/20 px-4 py-1 rounded-full text-primary text-xs font-black uppercase tracking-widest mb-4">
                            Premium Facilities
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white uppercase italic leading-[0.85] tracking-tighter">
                            World-Class <br /> <span className="text-primary">Experience</span>
                        </h2>
                    </div>
                    <p className="text-white/40 max-w-sm mb-2 font-medium text-center md:text-left">
                        From elite training modules to luxury recovery zones,
                        we provide everything you need to reach your peak potential.
                    </p>
                </div>

                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10 }}
                            className="group p-4 md:p-10 bg-secondary/50 backdrop-blur-xl border border-white/5 rounded-2xl md:rounded-[2.5rem] hover:border-primary/50 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(255,0,0,0.1)] relative overflow-hidden text-center"
                        >
                            {/* Card Accent */}
                            <div className="absolute top-0 left-0 w-1 md:w-2 h-0 bg-primary group-hover:h-full transition-all duration-500" />

                            <div className="w-10 h-10 md:w-20 md:h-20 bg-white/5 rounded-xl md:rounded-3xl flex items-center justify-center mb-4 md:mb-8 mx-auto border border-white/10 group-hover:bg-primary group-hover:rotate-[360deg] group-hover:scale-110 transition-all duration-700 shadow-2xl relative z-10">
                                <service.icon className="text-primary group-hover:text-white w-5 h-5 md:w-9 md:h-9" />
                            </div>

                            <h3 className="text-white font-black text-xs md:text-xl uppercase mb-1 md:mb-3 group-hover:text-primary transition-colors tracking-tighter">
                                {service.title}
                            </h3>
                            <p className="text-white/40 text-[8px] md:text-[11px] font-bold uppercase tracking-widest leading-relaxed">
                                {service.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
