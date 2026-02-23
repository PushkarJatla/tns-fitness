"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
    {
        name: "Rahul Verma",
        role: "Member since 2021",
        content: "The best gym in Solapur! The equipment is top-notch and Satish Sir is an amazing mentor who really cares about your progress.",
        rating: 5,
    },
    {
        name: "Sneha Patil",
        role: "Member since 2022",
        content: "I love the atmosphere here. Safe and supportive environment for women. The steam bath facility is a huge plus after a hard workout!",
        rating: 5,
    },
    {
        name: "Amit Shinde",
        role: "Member since 2019",
        content: "Affordable packages with premium facilities. The group classes are high energy and really helped me stay consistent with my weight loss.",
        rating: 4,
    },
];

export default function Testimonials() {
    return (
        <section className="py-24 bg-secondary">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <Quote className="text-primary w-12 h-12 mx-auto mb-6 opacity-50" />
                    <span className="text-primary font-black uppercase tracking-[0.3em] text-sm">Success Stories</span>
                    <h2 className="text-4xl md:text-6xl font-black text-white mt-4 uppercase italic">
                        What Our <span className="text-primary">Members Say</span>
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="p-8 bg-black rounded-3xl border border-white/5 hover:border-primary/30 transition-all duration-300 relative group"
                        >
                            <div className="flex gap-1 mb-6">
                                {[...Array(5)].map((_, index) => (
                                    <Star
                                        key={index}
                                        size={16}
                                        className={index < t.rating ? "text-primary fill-primary" : "text-white/20"}
                                    />
                                ))}
                            </div>
                            <p className="text-white/70 italic mb-8 leading-relaxed">
                                "{t.content}"
                            </p>
                            <div>
                                <h4 className="text-white font-black uppercase text-sm tracking-widest">{t.name}</h4>
                                <p className="text-primary/70 text-xs font-bold mt-1 uppercase">{t.role}</p>
                            </div>

                            {/* Decorative accent */}
                            <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 blur-3xl rounded-full group-hover:bg-primary/10 transition-colors" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
