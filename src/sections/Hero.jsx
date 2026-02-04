import React from 'react';
import { motion } from "framer-motion";
import { HiArrowRight, HiDocument, HiEnvelope } from "react-icons/hi2";
import { FaGithub, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

const socials = [
    {
        icon: FaGithub,
        href: "https://github.com/kaidoverse",
        label: "GitHub",
    },
    {
        icon: FaLinkedin,
        href: "https://linkedin.com/in/kwekuquaye",
        label: "LinkedIn",
    },
    ,
    {
        icon: HiEnvelope,
        href: "mailto:you@email.com",
        label: "Email",
    },
];

const Hero = () => {
    return (
        <section className="mx-auto max-w-4xl space-y-10">
            <div

                className="pt-12 md:pt-6 sm:pt-6 pb-16 space-y-4"
            >
                {/* Headline */}
                <div className="space-y-4">
                    <h1 className="font-semibold leading-tight">
                        Frontend Engineer | UI/UX Designer<br />
                        {/* <span className="text-neutral-700 dark:text-neutral-400">
                            UI/UX Designer
                        </span> */}
                    </h1>

                    <p className="font-meduim">
                        I build accessible, user-centered web applications by translating
                        design into production-ready code with attention to detail.
                    </p>
                </div>

                <p className="font-meduim">
                    Specializing in React, modern JavaScript, and design systems
                    that scale across teams and products.
                </p>

                {/* Core technologies */}
                <div className="space-y-3">
                    <p className="text-sm tracking-widest text-muted uppercase">
                        Core Technologies
                    </p>

                    <div className="flex flex-wrap gap-2">
                        {['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Figma'].map((tech) => (
                            <span
                                key={tech}
                                className="
                                    text-xs px-2.5 py-1 rounded-full
                                    bg-neutral-200/80 text-neutral-700
                                    dark:bg-neutral-100 dark:text-neutral-600
                                    border border-neutral-300/50
                                    dark:border-neutral-700/50
                                "
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>

                {/* 👇 Social icons + divider (NEW) */}
                <div className="flex items-center gap-6 pt-6">
                    {/* Social icons */}
                    <div className="flex items-center gap-4">
                        {socials.map(({ icon: Icon, href, label }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={label}
                                className="
                                    text-neutral-500
                                    hover:text-neutral-900
                                    dark:text-neutral-400
                                    dark:hover:text-neutral-100
                                    transition-colors
                                "
                            >
                                <Icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>

                    {/* Divider line */}
                    <div className="flex-1 h-px bg-neutral-200/70 dark:bg-neutral-800/70" />
                </div>
            </div>
        </section>
    );
};

export default Hero;
