"use client";

import { motion } from "framer-motion";

const images = [
    "/images/tns1.jpg",
    "/images/tns2.jpg",
    "/images/tns3.jpg",
    "/images/tns4.jpg",
    "/images/tns5.jpg",
    "/images/tns6.jpg",
];

export default function Gallery() {
    return (
        <section className="py-24 bg-black overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
                    <div>
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-sm">Visual Tour</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white mt-4 uppercase italic">
                            Our <span className="text-primary">Facility</span>
                        </h2>
                    </div>
                    <p className="text-white/40 max-w-sm mb-2">
                        Take a look at our world-class equipment and motivating workout environment.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {images.map((src, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            whileHover={{ scale: 1.05 }}
                            className="relative aspect-square overflow-hidden rounded-2xl group cursor-pointer"
                        >
                            <img
                                src={src}
                                alt={`Gym Gallery ${index + 1}`}
                                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                <span className="text-white font-black uppercase tracking-widest text-sm translate-y-4 group-hover:translate-y-0 transition-transform">View Large</span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
