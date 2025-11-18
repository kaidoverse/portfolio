import React, { useState } from "react";
import { HiBars3BottomRight } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";

const Navigation = () => {
    const [navDrawerOpen, setNavDrawerOpen] = useState(false);
    const toggleNavDrawer = () => setNavDrawerOpen(!navDrawerOpen);

    return (
        <>
            {/* Desktop Navbar */}
            <nav className="container mx-auto flex items-center justify-between py-5 px-9">
                {/* Left — Logo */}
                <div className="flex items-center">
                    <Link to="/" className="flex items-center">
                        <div className="flex flex-col text-left leading-tight">
                            <h1 className="font-semibold text-base">Kweku Quaye</h1>
                            <h2 className="text-[16px] text-gray-500">Software Engineer</h2>
                        </div>

                    </Link>
                </div>

                {/* Right — Nav Links */}
                <div className="hidden md:flex space-x-5 text-gray-700 font-medium">
                    <Link to="/" className="hover:text-[#374552] transition-colors">
                        Home
                    </Link>
                    <Link to="/projects" className="hover:text-[#374552] transition-colors">
                        Projects
                    </Link>
                    <Link to="/blog" className="hover:text-[#374552] transition-colors">
                        Blog
                    </Link>
                    <Link to="/resume" className="hover:text-[#374552] transition-colors">
                        Resume
                    </Link>
                </div>


                {/* Mobile Menu Button */}
                <button onClick={toggleNavDrawer} className="md:hidden">
                    <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
                </button>
            </nav>

            {/* Mobile Drawer */}
            <div
                className={`fixed top-0 left-0 w-3/4 sm:w-1/2 md:w-1/3 h-full bg-white shadow-lg transform transition-transform duration-300 z-50 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                <div className="flex justify-end p-4">
                    <button onClick={toggleNavDrawer}>
                        <IoMdClose className="h-6 w-6 text-gray-600" />
                    </button>
                </div>

                <div className="p-4">
                    <h2 className="text-xl font-semibold mb-4">Menu</h2>
                    <nav className="space-y-4">
                        <Link
                            to="/"
                            onClick={toggleNavDrawer}
                            className="block text-gray-600 hover:text-indigo-600"
                        >
                            Home
                        </Link>
                        <Link
                            to="/projects"
                            onClick={toggleNavDrawer}
                            className="block text-gray-600 hover:text-indigo-600"
                        >
                            Projects
                        </Link>
                        <Link
                            to="/blog"
                            onClick={toggleNavDrawer}
                            className="block text-gray-600 hover:text-indigo-600"
                        >
                            Blog
                        </Link>
                        <Link
                            to="/resume"
                            onClick={toggleNavDrawer}
                            className="block text-gray-600 hover:text-indigo-600"
                        >
                            Resume
                        </Link>
                    </nav>
                </div>
            </div>
        </>
    );
};

export default Navigation;
