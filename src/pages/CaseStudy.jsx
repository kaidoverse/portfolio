import { useParams, Link } from "react-router-dom";
import { HiUser } from "react-icons/hi";
import projects from "../data/projects";
import opalwireframe from "../assets/opalwireframe.webp";
import persona from "../assets/persona.webp";

const CaseStudy = () => {
    const { slug } = useParams();
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        return (
            <section className="mx-auto max-w-4xl px-6 mt-12">
                <p className="text-neutral-500">Case study not found.</p>
            </section>
        );
    }

    return (
        <main className="mx-auto max-w-4xl px-6 mt-6 space-y-16">
            {/* Breadcrumb */}
            <nav aria-label="Breadcrumb" className="text-sm text-muted">
                <Link to="/projects" className="hover:underline">
                    Projects
                </Link>{" "}
                / {project.title}
            </nav>

            {/* Header */}
            <header className="space-y-4">
                <h1 className="text-3xl font-bold">{project.title}</h1>

                <span className="inline-block text-sm font-semibold px-3 py-1.5 rounded-full
                      bg-green-500/10 text-green-600
                      dark:bg-green-500/10 dark:text-green-400">
                    UX Case Study
                </span>

                {/* Case Study Summary */}
                <section className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-neutral-500">
                    <div>
                        <p>
                            <strong className="font-meduim">
                                Role:
                            </strong>{" "}
                            Lead UX/UI Designer & Frontend Developer (Freelance)
                        </p>
                        <p>
                            <strong className="font-meduim
">
                                Client:
                            </strong>{" "}
                            WhiteOpal Ltd
                        </p>
                    </div>
                    <div>
                        <p>
                            <strong className="font-meduim">
                                Focus:
                            </strong>{" "}
                            B2B Service Website
                        </p>
                        <p>
                            <strong className="font-meduim">
                                Deliverables:
                            </strong>{" "}
                            UX flows, wireframes, UI design, frontend implementation
                        </p>
                    </div>
                </section>
            </header>

            {/* Overview */}
            <section className="space-y-3">
                <h2 className="text-lg font-medium">Overview</h2>
                <p className="text-neutral-500">
                    WhiteOpal Ltd is a procurement and supply company. The website serves as
                    the primary digital touchpoint for businesses evaluating services,
                    credibility, and whether to initiate contact.
                </p>
            </section>

            {/* Problem */}
            <section className="space-y-3">
                <h2 className="text-lg font-medium">Problem</h2>
                <p className="text-neutral-500">
                    Procurement services are complex and often abstract. Business users
                    needed clear explanations, reassurance of credibility, and a
                    frictionless way to reach out; without being overwhelmed by dense or
                    ambiguous content.
                </p>
            </section>

            {/* Persona */}
            {/* Persona */}
            <section className="space-y-3">
                <h2 className="text-lg font-medium">Persona</h2>
                <div className="flex flex-col sm:flex-row gap-6 items-start bg-neutral-50 dark:bg-neutral-800 p-4 rounded-lg border border-neutral-200 dark:border-neutral-700">

                    {/* Avatar */}
                    <div className="flex-shrink-0">
                        <img src={persona} alt="Grace Mensah, Business Owner"
                            className="w-16 h-16 rounded-full object-cover border border-neutral-300 dark:border-neutral-600"
                        />
                    </div>

                    {/* Persona details */}
                    <div className="flex-1 space-y-1">
                        <p className="text-sm text-neutral-500">
                            <strong className="text-neutral-700 dark:text-neutral-300">Name:</strong> Grace Mensah
                        </p>
                        <p className="text-sm text-neutral-500">
                            <strong className="text-neutral-700 dark:text-neutral-300">Role:</strong> Owner & Procurement Manager of a mid-sized business
                        </p>
                        <p className="text-sm text-neutral-500">
                            <strong className="text-neutral-700 dark:text-neutral-300">Goals:</strong> Quickly understand service offerings, assess credibility, and contact suppliers efficiently.
                        </p>
                        <p className="text-sm text-neutral-500">
                            <strong className="text-neutral-700 dark:text-neutral-300">Frustrations:</strong> Dense content, unclear contact paths, and abstract service descriptions.
                        </p>
                    </div>

                    {/* Persona quote */}
                    <div className="flex-1 text-neutral-500 italic text-sm">
                        “I just want to know if this company can reliably supply what I need without wasting time.”
                    </div>
                </div>
            </section>


            {/* User Journey */}
            <section className="space-y-3">
                <h2 className="text-lg font-medium">User Journey</h2>
                <p className="text-neutral-500">
                    I mapped a simple journey to understand how business users evaluate
                    WhiteOpal’s services and decide whether to make contact:
                </p>
                <p className="text-neutral-500 font-medium">
                    Discover Services → Understand Offerings → Build Trust → Contact
                    Company
                </p>
                <p className="text-neutral-500">
                    The greatest friction occurred during the “Understand Offerings”
                    stage, where service descriptions risked feeling unclear or too
                    abstract.
                </p>
            </section>

            {/* Approach */}
            <section className="space-y-3">
                <h2 className="text-lg font-medium">Approach</h2>
                <ul className="list-disc pl-5 text-neutral-500 space-y-1">
                    <li>Structured content around key user questions</li>
                    <li>Established clear visual hierarchy for fast scanning</li>
                    <li>Used a calm, professional UI to reinforce trust and credibility</li>
                    <li>Implemented responsive frontend layouts with TailwindCSS</li>
                </ul>
            </section>

            {/* Wireframe */}
            <section className="space-y-6">
                <h2 className="text-lg font-medium">Wireframe</h2>
                <img
                    src={opalwireframe}
                    alt="Early WhiteOpal wireframe showing content hierarchy and layout decisions"
                    className="mx-auto w-full max-w-2xl rounded-lg border border-neutral-200 dark:border-neutral-700"
                />
                <p className="text-neutral-500 text-sm">
                    Early wireframe illustrating content hierarchy, layout decisions, and
                    emphasis on service clarity and contact paths.
                </p>
            </section>

            {/* Outcome */}
            <section className="space-y-3">
                <h2 className="text-lg font-medium">Outcome</h2>
                <p className="text-neutral-500">
                    The final design improved clarity of service offerings, reduced
                    cognitive load during scanning, and made primary contact paths more
                    visible. Stakeholders reported increased confidence using the site as a
                    credibility and sales-support tool during early client conversations.
                </p>
            </section>

            {/* Accessibility */}
            <section className="space-y-3">
                <h2 className="text-lg font-medium">Accessibility Considerations</h2>
                <ul className="list-disc pl-5 text-neutral-500 space-y-1">
                    <li>Clear heading hierarchy for screen readers</li>
                    <li>High-contrast text to improve readability</li>
                    <li>Keyboard-accessible navigation and logical focus order</li>
                    <li>Descriptive alt text for visual assets</li>
                </ul>
            </section>

            {/* Reflection */}
            <section className="space-y-3">
                <h2 className="text-lg font-medium">Reflection & Learnings</h2>
                <p className="text-neutral-500">
                    This project reinforced the importance of clarity and trust in B2B UX.
                    Future improvements could include:
                </p>
                <ul className="list-disc pl-5 text-neutral-500 space-y-1">
                    <li>Testing homepage messaging with prospective clients</li>
                    <li>Tracking engagement through a lightweight contact funnel</li>
                    <li>Using interactive prototypes for earlier stakeholder feedback</li>
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
        </main>
    );
};

export default CaseStudy;
