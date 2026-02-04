import { getPostBySlug } from "@/lib/posts";
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function BlogPost({ params }: { params: { slug: string } }) {
    const post = getPostBySlug(params.slug);

    if (!post) {
        return <div className="text-center py-20">Post not found</div>;
    }

    return (
        <article className="prose prose-lg prose-slate mx-auto">
            <header className="mb-8 not-prose">
                <h1 className="text-4xl font-extrabold mb-2">{post.title}</h1>
                <time className="text-gray-500">{post.date}</time>
            </header>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {post.content}
            </ReactMarkdown>
        </article>
    );
}
