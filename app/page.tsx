import { getAllPosts } from "@/lib/posts";
import Link from "next/link";

export default function Home() {
    const posts = getAllPosts();

    return (
        <div className="space-y-8">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
                    Engineering Blog
                </h1>
                <p className="text-xl text-gray-500">
                    Deep dives into RAG, Kubernetes, and Vector Search.
                </p>
            </header>

            <div className="grid gap-6">
                {posts.map((post) => (
                    <Link
                        key={post.slug}
                        href={`/blog/${post.slug}`}
                        className="block p-6 bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-50 transition-colors"
                    >
                        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                            {post.title}
                        </h2>
                        <p className="font-normal text-gray-700 mb-4">{post.excerpt}</p>
                        <div className="text-sm text-gray-500">
                            {post.date}
                        </div>
                    </Link>
                ))}
                {posts.length === 0 && (
                    <p className="text-center text-gray-500">No posts found.</p>
                )}
            </div>
        </div>
    );
}
