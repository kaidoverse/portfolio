import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <section className="mx-auto max-w-4xl mt-32 space-y-12">
            <div className="flex items-center justify-between">
                <h2 className="text-sm tracking-widest text-muted uppercase">
                    Featured Projects
                </h2>

                <Link to="/projects" className="text-sm text-muted hover:text-fg transition">
                    View all →
                </Link>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>
        </section>
    );
};

export default Projects;
