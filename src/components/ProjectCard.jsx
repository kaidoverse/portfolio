import { motion } from "framer-motion";
import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";



const ProjectCard = ({ project }) => {
    return (
        <div className="group block space-y-4">
            <motion.a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"

            >
                {/* Colored background container with screenshot */}
                <div
                    className="relative overflow-hidden rounded-2xl p-8 md:p-12"
                    style={{
                        background: project.bgGradient || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
                    }}
                >
                    {/* Screenshot with perspective */}
                    <div className="relative">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full rounded-lg shadow-2xl 
                                     transform transition-transform duration-500
                                    //  group-hover:scale-[1.1] "
                            style={{
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)'
                            }}
                        />
                    </div>
                </div>
            </motion.a>

            {/* Text content (same as before) */}
            <div className="space-y-2">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <h3 className="text-lg font-medium">
                            {project.title}
                        </h3>
                        <span className="text-sm text-neutral-500">
                            {project.year}
                        </span>
                    </div>
                    <HiArrowUpRight
                        className="w-4 h-4 text-muted opacity-0 translate-y-1
                                 transition-all duration-200
                                 group-hover:opacity-100 group-hover:translate-y-0"
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
                 bg-neutral-200/80 text-neutral-700
                 dark:bg-neutral-100 dark:text-neutral-600 border border-neutral-300/50
                 dark:border-neutral-700/50"
                        >
                            {t}
                        </span>
                    ))}
                </div>
                {project.hasCaseStudy && (
                    <Link
                        to={project.caseStudyPath}
                        className="inline-block text-sm font-semibold px-3 py-1.5 rounded-full
               bg-green-500/10 text-green-600
               dark:bg-green-500/10 dark:text-green-400
               hover:bg-green-500/20 dark:hover:bg-green-500/20
               border border-green-500/20 dark:border-green-500/30
               transition-all duration-200"
                    >
                        UX Case Study →
                    </Link>
                )}
            </div>
        </div>
    );
};

export default ProjectCard;


