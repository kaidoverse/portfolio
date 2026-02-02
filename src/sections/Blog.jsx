import blogs from "../data/blogContent";
import BlogCard from "../components/BlogCard";
import { Link } from "react-router-dom";

const Blog = () => {
    return (
        <section className="mx-auto max-w-4xl mt-32 space-y-10">
            <div className="flex items-center justify-between">
                <h2 className="text-sm tracking-widest text-muted uppercase">
                    Recent Blogs
                </h2>
                <Link
                    to="/blog"
                    className="text-sm text-muted hover:text-fg transition"
                >
                    View all →
                </Link>
            </div>

            <div className="space-y-8">
                {blogs.slice(0, 3).map((post) => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </div>
        </section>
    );
};

export default Blog;
