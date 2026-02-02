import React, { useEffect, useState } from 'react';
import { HiDesktopComputer } from 'react-icons/hi';
import { HiOutlineMoon, HiOutlineSun } from 'react-icons/hi2';

const ThemeSwitcher = () => {
    const root = document.documentElement;
    const [activeTheme, setActiveTheme] = useState("system");

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "system";
        setActiveTheme(savedTheme);
    }, []);

    const setTheme = (theme) => {
        localStorage.setItem("theme", theme);
        setActiveTheme(theme);

        theme === "dark"
            ? root.setAttribute("data-theme", "dark")
            : theme === "light"
                ? root.removeAttribute("data-theme")
                : window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? root.setAttribute("data-theme", "dark")
                    : root.removeAttribute("data-theme");
    };

    const baseBtn =
        "p-2 rounded-full transition-all duration-200 hover:text-fg";

    const activeBtn =
        "bg-[color:var(--border)]/40";

    return (
        <div className="flex items-center gap-1 text-sm text-[var(--muted)]">
            <button
                onClick={() => setTheme("light")}
                aria-label="light mode"
                className={`${baseBtn} ${activeTheme === "light" ? activeBtn : ""}`}
            >
                <HiOutlineSun size={18} />
            </button>

            <button
                onClick={() => setTheme("dark")}
                aria-label="dark mode"
                className={`${baseBtn} ${activeTheme === "dark" ? activeBtn : ""}`}
            >
                <HiOutlineMoon size={18} />
            </button>

            <button
                onClick={() => setTheme("system")}
                aria-label="system mode"
                className={`${baseBtn} ${activeTheme === "system" ? activeBtn : ""}`}
            >
                <HiDesktopComputer size={18} />
            </button>
        </div>
    );
};

export default ThemeSwitcher;
