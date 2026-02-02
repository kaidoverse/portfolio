import swa2 from "../assets/swa2.webp";
import nubian1 from "../assets/nubian1.webp";
import whiteopal1 from "../assets/whiteopal1.webp";

const projects = [
    {
        title: "White Opal Ltd",
        featured: true,
        description:
            "Corporate website with modern UI, responsive layout, and clean information architecture.",
        tech: ["React", "Tailwind", "Vite"],
        year: "2025",
        link: "https://whiteopalltd.com",
        image: whiteopal1,
        bg: "bg-green-100 dark:bg-green-900/30",
    },
    {
        title: "NUBIAN",
        featured: true,
        description:
            "Mobile-first e-commerce UI with reusable React components and Tailwind CSS design system.",
        tech: ["React", "Tailwind", "Vite"],
        year: "2024",
        link: "#",
        image: nubian1,
        bg: "bg-green-100 dark:bg-green-900/30",
    },
    {
        title: "SWA",
        featured: true,
        description:
            "a swim school that offers structured swimming programs for children, adults, and individuals with special needs.",
        tech: ["React", "Tailwind"],
        year: "2024",
        link: "https://swa-ruby.vercel.app/",
        image: swa2,
        bg: "bg-green-100 dark:bg-green-900/30",
    },
];

export default projects;

