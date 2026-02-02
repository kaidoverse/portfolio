import { HiArrowUpRight } from "react-icons/hi2";
import { Link } from "react-router-dom";

const BlogCard = ({ post }) => {
    return (
        <Link
            to={`/blog/${post.slug}`}
            className="group block space-y-2"
        >
            <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                <h3 className="text-lg font-medium truncate">
                    {post.title}
                </h3>

                <div className="flex items-center gap-2 shrink-0">
                    <span className="text-sm text-muted whitespace-nowrap">
                        {post.date}
                    </span>
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
            </div>

            <p className="text-neutral-500 text-sm max-w-md">{post.description}</p>
        </Link>
    );
};

export default BlogCard;
