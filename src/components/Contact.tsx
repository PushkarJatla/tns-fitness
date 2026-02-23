"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, MessageSquare, Mail, Send } from "lucide-react";

export default function Contact() {
    return (
        <section id="contact" className="py-24 bg-secondary">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-16">
                    {/* Contact Info */}
                    <div>
                        <span className="text-primary font-black uppercase tracking-[0.3em] text-sm">Visit Us</span>
                        <h2 className="text-4xl md:text-6xl font-black text-white mt-4 mb-8 uppercase italic">
                            Ready to <span className="text-primary">Level Up?</span>
                        </h2>

                        <div className="space-y-8 mb-12">
                            <div className="flex gap-6 group">
                                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-primary transition-all duration-300">
                                    <MapPin className="text-primary group-hover:text-white" size={32} />
                                </div>
                                <div>
                                    <h4 className="text-white font-black uppercase text-sm mb-1 tracking-widest">Our Location</h4>
                                    <p className="text-white/60 leading-relaxed">
                                        Chippa Complex, Old WIT College Road<br />
                                        (New Paccha Peth / Sakhar Peth)<br />
                                        Solapur, Maharashtra – 413003
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-6 group">
                                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center shrink-0 border border-white/10 group-hover:bg-primary transition-all duration-300">
                                    <Phone className="text-primary group-hover:text-white" size={32} />
                                </div>
                                <div>
                                    <h4 className="text-white font-black uppercase text-sm mb-1 tracking-widest">Call Us</h4>
                                    <div className="flex flex-col gap-2">
                                        <a href="tel:8055509999" className="text-2xl font-black text-white hover:text-primary transition-colors">
                                            80555 09999
                                        </a>
                                        <a href="tel:8055249999" className="text-2xl font-black text-white hover:text-primary transition-colors">
                                            80552 49999
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <a
                                    href="https://wa.me/918055509999"
                                    target="_blank"
                                    className="flex-1 btn-primary py-4 flex items-center justify-center gap-3"
                                >
                                    <MessageSquare size={20} />
                                    WHATSAPP US
                                </a>
                                <button className="bg-white/5 hover:bg-white inset-0 flex items-center justify-center p-4 rounded-full border border-white/10 text-white hover:text-black transition-all">
                                    <Mail size={24} />
                                </button>
                            </div>
                        </div>

                        {/* Quick Contact Form (Optional but adds value) */}
                        <div className="bg-white/5 p-8 rounded-3xl border border-white/10">
                            <h4 className="text-white font-black uppercase mb-6">Send A Message</h4>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <input className="bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none" placeholder="Name" />
                                <input className="bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none" placeholder="Phone" />
                            </div>
                            <textarea className="w-full bg-black border border-white/10 rounded-xl px-4 py-3 text-white focus:border-primary outline-none mb-4 h-24" placeholder="Your Message" />
                            <button className="w-full btn-primary flex items-center justify-center gap-2">
                                <Send size={18} />
                                SEND MESSAGE
                            </button>
                        </div>
                    </div>

                    {/* Map */}
                    <div className="h-full min-h-[500px] rounded-3xl overflow-hidden grayscale border-2 border-white/5 hover:grayscale-0 transition-all duration-700">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15211.751381!2d75.9082!3d17.6715!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQwJzE3LjQiTiA3NcKwNTQnMjkuNSJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
