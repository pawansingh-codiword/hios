"use client";

import { motion } from "framer-motion";
import {
    Cpu,
    Globe,
    Layers,
    Shield,
    Zap,
    Target,
    Users,
    BookOpen,
    ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen selection:bg-blue-500 selection:text-white mt-[-5rem]">
            {/* Hero Section */}
            <section className="relative z-10 pt-14 pb-10 md:pt-22 lg:pt-40">
                <div className="container px-4 md:px-6 mx-auto text-center">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                        className="max-w-3xl mx-auto space-y-6"
                    >
                        <motion.div variants={fadeInUp} className="hero-badge mx-auto">
                            <Layers className="w-4 h-4 text-blue-400" />
                            <span>System Architecture v4.0.1</span>
                        </motion.div>

                        <motion.h1
                            variants={fadeInUp}
                            className="text-4xl md:text-6xl heading-serif bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-100 to-blue-300"
                        >
                            Defining the Future <br />
                            <span className="text-3xl md:text-5xl font-light text-blue-200">of Occoured Science</span>
                        </motion.h1>

                        <motion.p
                            variants={fadeInUp}
                            className="text-lg text-blue-100/70 leading-relaxed"
                        >
                            Hamsa Institute is a decentralized knowledge network dedicated to the convergence of
                            ancient metaphysical sciences and modern technical infrastructure. We provide the
                            computational framework for mastering the unseen.
                        </motion.p>
                    </motion.div>
                </div>
            </section>

            {/* Core Infrastructure Section */}
            <section className="relative z-10 py-24 bg-slate-950/50 backdrop-blur-md border-y border-blue-500/10">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-8"
                        >
                            <div>
                                <h2 className="text-3xl md:text-4xl heading-serif text-white mb-4">The Infrastructure of Learning</h2>
                                <p className="text-blue-200/60 leading-relaxed">
                                    Our platform isn&apos;t just a website; it&apos;s a high-performance learning environment built
                                    on the principles of progressive disclosure and granular access.
                                </p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { icon: Target, title: "Precision Curriculum", desc: "Every module is engineered for maximum retention and technical accuracy." },
                                    { icon: Shield, title: "Integrity Verification", desc: "Immutable progress tracking ensuring the authenticity of your academic journey." },
                                    { icon: Globe, title: "Distributed Network", desc: "Collaborate with researchers and practitioners across the global node network." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4 p-4 rounded-xl bg-blue-900/10 border border-blue-500/10">
                                        <div className="mt-1">
                                            <item.icon className="w-5 h-5 text-blue-400" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-white">{item.title}</h4>
                                            <p className="text-blue-200/50 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="glass-card p-8 aspect-square flex flex-center flex-col items-center justify-center text-center space-y-6">
                                <div className="absolute inset-0 bg-blue-600/5 rounded-2xl animate-pulse" />
                                <Cpu className="w-20 h-20 text-blue-500 mb-4 animate-bounce" />
                                <h3 className="text-2xl font-bold text-white">System Core</h3>
                                <p className="text-blue-200/60 max-w-xs">
                                    Our proprietary logic engine manages lesson unlocking, partial payments, and dynamic progress metrics in real-time.
                                </p>
                                <div className="flex gap-2">
                                    <div className="px-3 py-1 bg-green-500/20 text-green-400 text-[10px] font-mono rounded-full border border-green-500/30">STATUS: ONLINE</div>
                                    <div className="px-3 py-1 bg-blue-500/20 text-blue-400 text-[10px] font-mono rounded-full border border-blue-500/30">VERSION: 4.0.1</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Philosophy Section */}
            <section className="relative z-10 py-24">
                <div className="container px-4 md:px-6 mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl heading-serif text-white mb-4">Core Principles</h2>
                        <p className="text-blue-200/60 max-w-2xl mx-auto">The fundamental values that drive our technical and academic innovations.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Users,
                                title: "Inclusion",
                                desc: "Removing financial barriers through a modular partial-payment architecture."
                            },
                            {
                                icon: BookOpen,
                                title: "Excellence",
                                desc: "Curating the highest quality content from leading experts in Occurred Sciences."
                            },
                            {
                                icon: Zap,
                                title: "Velocity",
                                desc: "Empowering students to learn at their own pace with instant resource activation."
                            }
                        ].map((principle, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="glass-panel p-8 rounded-2xl border-blue-500/10 hover:border-blue-500/30 transition-all group"
                            >
                                <div className="w-12 h-12 rounded-lg bg-blue-600/20 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                                    <principle.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{principle.title}</h3>
                                <p className="text-blue-200/50 leading-relaxed text-sm">{principle.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative z-10 py-24 bg-gradient-to-t from-blue-900/20 to-transparent">
                <div className="container px-4 md:px-6 mx-auto text-center">
                    <div className="glass-card p-12 max-w-4xl mx-auto border-blue-500/20">
                        <h2 className="text-3xl md:text-5xl heading-serif text-white mb-6">Ready to Initialize?</h2>
                        <p className="text-xl text-blue-200/70 mb-10 max-w-2xl mx-auto">
                            Join thousands of researchers in the most advanced learning network ever deployed.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link href="/register">
                                <Button size="lg" className="btn-vedic-primary w-full sm:w-auto">
                                    Create Account
                                </Button>
                            </Link>
                            <Link href="/courses">
                                <Button variant="outline" size="lg" className="h-14 px-10 rounded-full border-blue-500/30 bg-blue-950/30 hover:bg-blue-900/50 text-blue-100 w-full sm:w-auto">
                                    Browse Network
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
