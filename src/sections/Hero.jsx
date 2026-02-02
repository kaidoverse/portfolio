import React from 'react'

import { motion } from "framer-motion";

const Hero = () => {
    return (

        <section className="mx-auto max-w-4xl mt-2 space-y-10">


            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="pt-12 space-y-3"
            >
                <h1 className="font-medium leading-tight">
                    Hello! Welcome to kaidoverse.
                </h1>

                <p className="text-neutral-700 max-w-2xl">
                    I’m a UI/UX-focused frontend developer, with experience designing user-centered interfaces, prototyping in Figma, and building responsive web applications in React.

                </p>

                <p className="text-neutral-600">
                    My current tech stack includes JavaScript and React, which I constantly strive to master.
                </p>
            </motion.section>
        </section>
    );
}

export default Hero
