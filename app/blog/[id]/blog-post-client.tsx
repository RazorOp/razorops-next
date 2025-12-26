"use client";

import { useEffect, useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  published: string;
  content: string;
}

export default function BlogPostClient({ id }: { id: string }) {
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function fetchPost() {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.googleapis.com/blogger/v3/blogs/4505914727176930119/posts/${id}?key=AIzaSyCM_6zpt76Saf2slTWV1EKoFQBMOFfdeFw`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch post");
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching blog post:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchPost();
  }, [id]);

  if (loading) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }

  if (!post) {
    return <p className="text-center text-gray-500">Post not found</p>;
  }

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans mt-20">
      <header className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="mt-4 text-lg">
          Published on{" "}
          {new Date(post.published).toLocaleDateString()}
        </p>
      </header>

      <main className="container mx-auto px-6 py-12">
        <article className="prose lg:prose-xl mx-auto">
          <div
            className="overflow-x-auto"
            dangerouslySetInnerHTML={{
              __html: post.content
                .replace(
                  /<table>/g,
                  '<table class="border border-gray-300 my-6 w-full">'
                )
                .replace(
                  /<th>/g,
                  '<th class="border border-gray-300 px-4 py-2 text-left">'
                )
                .replace(
                  /<td>/g,
                  '<td class="border border-gray-300 px-4 py-2">'
                )
                .replace(
                  /<a /g,
                  '<a class="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer" '
                )
                .replace(
                  /<pre>/g,
                  '<pre class="bg-gray-900 text-gray-100 p-4 rounded-md overflow-x-auto my-4">'
                )
                .replace(
                  /<code>/g,
                  '<code class="bg-gray-800 text-green-400 px-1 py-0.5 rounded">'
                )
                .replace(
                  /<h1>/g,
                  '<h1 class="text-4xl font-extrabold my-4">'
                )
                .replace(
                  /<h2>/g,
                  '<h2 class="text-3xl font-bold my-3">'
                )
                .replace(
                  /<h3>/g,
                  '<h3 class="text-2xl font-semibold my-2">'
                )
                .replace(
                  /<h4>/g,
                  '<h4 class="text-xl font-medium my-2">'
                )
                .replace(
                  /<h5>/g,
                  '<h5 class="text-lg font-medium my-1">'
                ),
            }}
          />
        </article>
      </main>
    </div>
  );
}
