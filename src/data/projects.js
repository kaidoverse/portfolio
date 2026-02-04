import whiteopal1 from "../assets/whiteopal1.webp";
import nubian1 from "../assets/nubian1.webp";
import swa2 from "../assets/swa2.webp";

const projects = [
    {
        title: "White Opal Ltd",
        slug: "whiteopal",
        featured: true,
        hasCaseStudy: true,
        caseStudyPath: "/projects/whiteopal",
        description:
            "Corporate website with modern UI, responsive layout, and clean information architecture.",
        tech: ["React", "Tailwind", "Vite"],
        year: "2025",
        link: "https://whiteopalltd.com",
        image: whiteopal1,
        bgGradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",

    },
    {
        title: "NUBIAN",
        slug: "nubian",
        featured: true,
        hasCaseStudy: true,
        caseStudyPath: "/projects/nubian",
        description:
            "Mobile-first e-commerce UI with reusable React components and Tailwind CSS design system.",
        tech: ["React", "Tailwind", "Vite"],
        year: "2024",
        link: "https://nubiann.vercel.app",
        image: nubian1,
        bgGradient: "linear-gradient(135deg, #0891b2 0%, #06b6d4 100%)", // Teal gradient
    },
    {
        title: "SWA",
        slug: "swa",
        featured: true,
        hasCaseStudy: false,
        description:
            "A swim school offering structured swimming programs for diverse learners.",
        tech: ["React", "Tailwind"],
        year: "2024",
        link: "https://swa-ruby.vercel.app/",
        image: swa2,
        bgGradient: "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)", // Blue/Cyan gradient
    },
];

export default projects;