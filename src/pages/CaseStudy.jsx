import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";
import wireframe from "../assets/wireframe.webp";

const CaseStudy = () => {
    const { slug } = useParams();
    const project = projects.find(p => p.slug === slug);

    if (!project) return <p>Case study not found.</p>;

    return (
        <section className="mx-auto max-w-4xl px-6 mt-12 space-y-12">

            {/* Breadcrumb */}
            <nav className="text-sm text-muted">
                <Link to="/projects" className="hover:underline">Projects</Link> / {project.title}
            </nav>

            {/* Header */}
            <header className="space-y-3">
                <h1 className="text-3xl font-bold">{project.title}</h1>

                {/* UX Case Study Badge */}
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full dark:bg-green-900/30 dark:text-green-400">
                    UX Case Study
                </span>
            </header>

            {/* Overview */}
            <section className="space-y-3">
                <h2 className="text-lg font-medium">Overview</h2>
                <p className="text-neutral-500">
                    Whiteopal Ltd is a procurement and supply company. The website serves as
                    the primary digital touchpoint for businesses evaluating services and credibility.
                </p>
            </section>

            {/* Problem */}
            <section className="space-y-3">
                <h2 className="text-lg font-medium">Problem</h2>
                <p className="text-neutral-500">
                    Procurement services are complex and abstract. Users needed clarity,
                    trust, and a clear path to contact without being overwhelmed.
                </p>
            </section>

            {/* Approach */}
            <section className="space-y-3">
                <h2 className="text-lg font-medium">Approach</h2>
                <ul className="list-disc pl-5 text-neutral-500 space-y-1">
                    <li>Structured content around user questions</li>
                    <li>Clear visual hierarchy for fast scanning</li>
                    <li>Calm, professional UI to reinforce trust</li>
                </ul>
            </section>

            {/* Wireframe / Prototype */}
            <section className="space-y-6">
                <h2 className="text-lg font-medium">Wireframe / Prototype</h2>
                <img
                    src={wireframe}
                    alt="Whiteopal Wireframe"
                    className="w-full rounded-lg border border-neutral-200 dark:border-neutral-700"
                />
                <p className="text-neutral-500 text-sm">
                    Early wireframe showing content hierarchy and layout decisions.
                </p>
            </section>

            {/* Outcome */}
            <section className="space-y-3">
                <h2 className="text-lg font-medium">Outcome</h2>
                <p className="text-neutral-500">
                    Improved clarity of services, easier navigation, and stronger first-impression credibility.
                </p>
            </section>

            {/* Reflection / Learnings */}
            <section className="space-y-3">
                <h2 className="text-lg font-medium">Reflection & Learnings</h2>
                <p className="text-neutral-500">
                    This project reinforced the importance of clarity and trust in B2B UX. Future improvements could include:
                </p>
                <ul className="list-disc pl-5 text-neutral-500 space-y-1">
                    <li>Testing homepage messaging with users</li>
                    <li>Tracking engagement through a lightweight contact funnel</li>
                    <li>Interactive prototypes for stakeholder feedback</li>
                </ul>
            </section>

            {/* CTA */}
            <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm font-medium hover:underline"
            >
                View live site →
            </a>

        </section>
    );
};

export default CaseStudy;
