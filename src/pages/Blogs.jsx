import blogs from "../data/blogContent";
import BlogCard from "../components/BlogCard";

const Blogs = () => {
    return (
        <section className="mx-auto max-w-6xl px-4 mt-12 space-y-10">
            <h2 className="text-sm tracking-widest text-muted uppercase">
                All Blogs
            </h2>
            <div className="space-y-8">
                {blogs.map((post) => (
                    <BlogCard key={post.slug} post={post} />
                ))}
            </div>
        </section>
    );
};

export default Blogs;
