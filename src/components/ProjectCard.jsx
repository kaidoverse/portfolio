import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";


const ProjectCard = ({ project }) => {
    return (
        <div className="group block space-y-4"
        >
            <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block space-y-3"
            >
                {/* Image */}
                <div className="overflow-hidden rounded-xl bg-neutral-800">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                </div>

                {/* Text */}
            </motion.a>
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    {/* Title + year */}
                    <div className="flex items-center gap-2">
                        <h3 className="text-lg font-medium">
                            {project.title}
                        </h3>

                        <span className="text-sm text-neutral-500">
                            {project.year}
                        </span>
                    </div>

                    {/* External icon */}
                    <HiArrowUpRight
                        className="
            w-4 h-4 text-muted
            opacity-0 translate-y-1
            transition-all duration-200
            group-hover:opacity-100
            group-hover:translate-y-0
        "
                    />
                </div>


                <p className="text-neutral-500 max-w-md">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-1">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="text-xs px-2.5 py-1 rounded-full
                 bg-neutral-100 text-neutral-700
                 dark:bg-neutral-100 dark:text-neutral-600"
                        >
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
