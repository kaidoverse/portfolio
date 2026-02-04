import { useParams, useNavigate } from "react-router-dom";
import blogs from "../data/blogContent";

const SingleBlog = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const post = blogs.find((b) => b.slug === slug);

    if (!post) return <p>Blog not found.</p>;

    return (
        <section className="mx-auto max-w-4xl px-6 mt-8 space-y-8">

            <button
                onClick={() => navigate("/blog")}
                className="text-sm text-muted hover:text-fg transition"
            >
                ← Blogs
            </button>

            <div className="space-y-2">
                <h1 className="text-3xl font-bold">{post.title}</h1>
                <span className="text-sm text-muted">{post.date}</span>
            </div>


            <div>
                <article className="blog-content space-y-6">
                    {post.content}
                </article>
            </div>




        </section>
    );
};

export default SingleBlog;
