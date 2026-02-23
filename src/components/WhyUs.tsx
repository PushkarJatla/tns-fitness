"use client";

import { motion } from "framer-motion";
import { Clock, Star, TrendingUp, Music, Users, ShieldCheck, DollarSign } from "lucide-react";

export default function InfoSections() {
    return (
        <>
            {/* Operating Hours */}
            <section className="py-24 bg-secondary">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            viewport={{ once: true }}
                            className="relative rounded-3xl overflow-hidden h-[400px]"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
                                alt="Gym at Night"
                                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                            <div className="absolute bottom-10 left-10">
                                <div className="bg-primary text-white p-6 rounded-2xl shadow-2xl">
                                    <Clock className="w-10 h-10 mb-4" />
                                    <h3 className="text-3xl font-black uppercase italic">Open Daily</h3>
                                    <div className="text-xl font-bold mt-2">5:30 AM – 10:30 PM</div>
                                </div>
                            </div>
                        </motion.div>

                        <div className="lg:pl-12">
                            <h2 className="text-4xl md:text-5xl font-black text-white uppercase mb-6">
                                Flexible <span className="text-primary italic">Timings</span>
                            </h2>
                            <p className="text-white/60 text-lg mb-8 leading-relaxed">
                                We believe fitness should fit your schedule. Our extensive hours ensure you never miss a workout, whether you&apos;re an early bird or a night owl.
                            </p>
                            <div className="bg-white/5 border-l-4 border-primary p-6 rounded-r-2xl">
                                <h4 className="text-primary font-black uppercase text-sm mb-2">Exclusive Slot</h4>
                                <p className="text-white font-bold text-lg">
                                    Special timings available for female members. Contact us for details.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section id="why-us" className="py-24 bg-black relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase italic">
                            Why <span className="text-primary">TNS Fitness?</span>
                        </h2>
                        <p className="text-white/40 mt-4 max-w-2xl mx-auto">
                            Solapur&apos;s most trusted fitness destination for over 9 years.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <WhyCard
                            icon={Star}
                            title="Top Rated Gym"
                            desc="Rated among Solapur's Top 3 Gyms with 4.3+ Rating on Justdial (384+ Reviews)."
                            highlight
                        />
                        <WhyCard
                            icon={TrendingUp}
                            title="Results Driven"
                            desc="Environment designed to push your limits and achieve real body transformations."
                        />
                        <WhyCard
                            icon={Users}
                            title="Expert Mentors"
                            desc="Friendly and helpful trainers like Satish Sir, highly appreciated by our members."
                        />
                        <WhyCard
                            icon={Music}
                            title="Great Atmosphere"
                            desc="High-energy environment with motivating music to keep you focused."
                        />
                        <WhyCard
                            icon={ShieldCheck}
                            title="Premium Gear"
                            desc="Clean, well-maintained, and biomechanically designed machinery for safety."
                        />
                        <WhyCard
                            icon={DollarSign}
                            title="Affordable Plans"
                            desc="Multiple flexible packages that offer luxury fitness without the high price tag."
                        />
                    </div>

                    <div className="mt-16 text-center text-white/30 text-sm italic">
                        * Note: Peak hours may be busy due to high member demand.
                    </div>
                </div>
            </section>
        </>
    );
}

function WhyCard({ icon: Icon, title, desc, highlight = false }: { icon: any, title: string, desc: string, highlight?: boolean }) {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            className={`p-8 rounded-3xl border transition-all duration-300 ${highlight
                ? "bg-primary border-primary shadow-[0_0_40px_rgba(255,0,0,0.2)]"
                : "bg-secondary border-white/5 hover:border-primary/30"
                }`}
        >
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 shadow-xl ${highlight ? "bg-white" : "bg-primary"
                }`}>
                <Icon className={highlight ? "text-primary" : "text-white"} size={24} />
            </div>
            <h3 className={`text-xl font-black uppercase mb-3 ${highlight ? "text-white" : "text-white"}`}>
                {title}
            </h3>
            <p className={`text-sm leading-relaxed ${highlight ? "text-white/80" : "text-white/50"}`}>
                {desc}
            </p>
        </motion.div>
    );
}
