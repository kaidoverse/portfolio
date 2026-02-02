import React from 'react'
import ThemeSwitcher from './ThemeSwitcher';

const Footer = () => {
    return (
        <footer className="mt-24 border-t border-border">
            <div className="mx-auto max-w-4xl px-6 py-8 flex items-center justify-between text-sm text-muted">
                © {new Date().getFullYear()} Kweku Quaye
                <ThemeSwitcher />
            </div>
        </footer>
    );
}

export default Footer;