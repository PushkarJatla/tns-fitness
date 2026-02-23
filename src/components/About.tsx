"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Award, Users, Target } from "lucide-react";

const features = [
    { icon: Award, title: "Certified Trainers", desc: "Expert male & female guidance" },
    { icon: Target, title: "Weight Management", desc: "Focus on weight loss & muscle gain" },
    { icon: Users, title: "Great Atmosphere", desc: "Luxury feel & supportive environment" },
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-secondary overflow-hidden relative mesh-gradient">
            {/* Background decorative text */}
            <div className="absolute top-0 left-0 text-[20rem] font-black text-white/[0.02] select-none -translate-x-1/2 -translate-y-1/2">
                EST 2015
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="relative z-10 rounded-3xl overflow-hidden border-4 border-white/5 shadow-2xl group">
                            <img
                                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop"
                                alt="Gym Interior"
                                className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>

                        {/* Status Float */}
                        <motion.div
                            animate={{ y: [0, -15, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -bottom-6 -right-6 lg:-right-12 bg-primary p-10 rounded-3xl shadow-[0_20px_40px_rgba(255,0,0,0.3)] z-20"
                        >
                            <div className="text-5xl font-black text-white italic leading-none">10+</div>
                            <div className="text-white font-black uppercase tracking-widest text-[10px] mt-2">Years of Excellence</div>
                        </motion.div>

                        {/* Decorative circle */}
                        <div className="absolute -top-12 -left-12 w-64 h-64 border border-primary/20 rounded-full animate-float opacity-50" />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-block bg-primary/10 border border-primary/20 px-4 py-1 rounded-full text-primary text-xs font-black uppercase tracking-widest mb-6">
                            Since 2015
                        </div>
                        <h2 className="text-5xl md:text-6xl font-black text-white mb-10 uppercase leading-[0.9] tracking-tighter">
                            A <span className="text-primary italic">3000 SQ FT</span> <br /> Flagship Facility
                        </h2>
                        <p className="text-white/60 mb-10 leading-relaxed text-xl font-medium">
                            Located in the heart of Solapur, TNS Fitness is more than just a gym.
                            It's a results-driven sanctuary equipped with biomechanically designed
                            machinery that blends elite safety with modern luxury.
                        </p>

                        <div className="grid sm:grid-cols-2 gap-8 mb-12">
                            {['Certified Expert Trainers', 'Professional Growth Plans', 'Luxury Steam Bath', 'FITPASS Collaboration'].map((item) => (
                                <div key={item} className="flex items-center gap-4 group">
                                    <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary transition-colors">
                                        <CheckCircle2 className="text-primary group-hover:text-white" size={18} />
                                    </div>
                                    <span className="text-white font-bold text-lg">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-3 gap-6 border-t border-white/5 pt-12">
                            {features.map((f, i) => (
                                <div key={i} className="group cursor-default">
                                    <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center mb-4 border border-white/5 group-hover:bg-primary transition-colors">
                                        <f.icon className="text-primary group-hover:text-white" size={24} />
                                    </div>
                                    <h4 className="text-white font-black text-[10px] uppercase mb-1 tracking-widest">{f.title}</h4>
                                    <p className="text-white/30 text-[9px] font-bold uppercase">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
