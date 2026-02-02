import React, { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Navigation = () => {
    const [navDrawerOpen, setNavDrawerOpen] = useState(false);
    const toggleNavDrawer = () => setNavDrawerOpen(!navDrawerOpen);

    return (
        <>
            {/* Navbar */}
            <header className="sticky top-0 z-50 bg-bg/80 backdrop-blur
      border-b border-border
">
                <nav className="mx-auto max-w-4xl px-6 py-6 flex items-center justify-between">
                    {/* Left — Logo */}
                    <Link to="/" className="flex flex-col leading-tight">
                        <h1 className="text-lg font-semibold text-fg">
                            Kweku Quaye
                        </h1>
                        <h2 className="text-sm text-muted">
                            Software Engineer
                        </h2>
                    </Link>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex gap-6 text-sm">
                        <Link
                            to="/"
                            className="text-muted hover:text-fg transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            to="/projects"
                            className="text-muted hover:text-fg transition-colors"
                        >
                            Projects
                        </Link>
                        <Link
                            to="/blog"
                            className="text-muted hover:text-fg transition-colors"
                        >
                            Blog
                        </Link>
                        <a
                            href="/resume2.pdf"
                            className="text-muted hover:text-fg transition-colors"
                        >
                            Resume
                        </a>
                    </div>

                    {/* Mobile Menu Button */}
                    <button onClick={toggleNavDrawer} className="md:hidden">
                        <HiBars3BottomRight className="h-6 w-6 text-fg" />
                    </button>
                </nav>
            </header>

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 left-0 h-full w-3/4 sm:w-1/2 md:w-1/3 
        bg-bg border-r border-border shadow-xl
        transform transition-transform duration-300 z-50
        ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}
            >
                <div className="flex justify-end p-4">
                    <button onClick={toggleNavDrawer}>
                        <IoMdClose className="h-6 w-6 text-fg" />
                    </button>
                </div>

                <div className="px-6 py-4">
                    <h2 className="text-lg font-semibold mb-6 text-fg">
                        Menu
                    </h2>

                    <nav className="space-y-5 text-sm">
                        <Link
                            to="/"
                            onClick={toggleNavDrawer}
                            className="block text-muted hover:text-fg transition-colors"
                        >
                            Home
                        </Link>
                        <Link
                            to="/projects"
                            onClick={toggleNavDrawer}
                            className="block text-muted hover:text-fg transition-colors"
                        >
                            Projects
                        </Link>
                        <Link
                            to="/blog"
                            onClick={toggleNavDrawer}
                            className="block text-muted hover:text-fg transition-colors"
                        >
                            Blog
                        </Link>
                        <a
                            href="/resume2.pdf"
                            className="block text-muted hover:text-fg transition-colors"
                        >
                            Resume
                        </a>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navigation;
