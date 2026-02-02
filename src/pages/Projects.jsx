import projects from "../data/projects";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
    return (
        <section className="mx-auto max-w-4xl px-6 mt-12 space-y-8">
            <div className="text-sm tracking-widest text-muted uppercase">
                Projects
            </div>

            <div className="space-y-16">
                {projects.map((project) => (
                    <ProjectCard key={project.title} project={project} />
                ))}
            </div>

        </section>
    );
};

export default Projects;
