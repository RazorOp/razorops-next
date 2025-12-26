"use client";

import { useEffect, useState } from "react";

interface BlogPost {
  id: string;
  title: string;
  published: string;
  content: string;
}

export default function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [pageToken, setPageToken] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch initial 10 posts on page load
    const fetchInitialPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://www.googleapis.com/blogger/v3/blogs/4505914727176930119/posts?key=AIzaSyCM_6zpt76Saf2slTWV1EKoFQBMOFfdeFw`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch posts");
        }
        const data = await response.json();
        setPosts(data.items || []);
        setPageToken(data.nextPageToken || null);
      } catch (error) {
        console.error("Error fetching initial blog posts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialPosts();
  }, []);

  const loadMorePosts = async () => {
    // Fetch next 10 posts when the button is clicked
    try {
      setLoading(true);
      const response = await fetch(
        `https://www.googleapis.com/blogger/v3/blogs/4505914727176930119/posts?key=AIzaSyCM_6zpt76Saf2slTWV1EKoFQBMOFfdeFw${
          pageToken ? `&pageToken=${pageToken}` : ""
        }`
      );
      if (!response.ok) {
        throw new Error("Failed to fetch more posts");
      }
      const data = await response.json();
      setPosts((prevPosts) => [...prevPosts, ...(data.items || [])]);
      setPageToken(data.nextPageToken || null);
    } catch (error) {
      console.error("Error fetching more blog posts:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans mt-20">
      <header className="bg-gradient-to-r from-purple-500 to-blue-500 text-white py-12 text-center">
        <h1 className="text-4xl font-bold">Razorops Blog</h1>
        <p className="mt-4 text-lg">Learn more about our mission to optimize Kubernetes performance and reduce costs.</p>
      </header>

      <main className="container mx-auto px-6 py-12">
        {posts.length > 0 ? (
          <>
            <ul className="space-y-6">
              {posts.map((post) => (
                <li key={post.id} className="p-6 bg-white rounded-lg shadow-md">
                  <h2 className="text-2xl font-bold mb-2">
                    <a href={`/blog/${post.id}`} className="text-blue-500 hover:underline">
                      {post.title}
                    </a>
                  </h2>
                  <p className="text-gray-600 text-sm">Published on {new Date(post.published).toLocaleDateString()}</p>
                  <p
                    className="mt-4 text-gray-700"
                    dangerouslySetInnerHTML={{
                      __html: post.content.substring(1, 1000) || "No content available.",
                    }}
                  ></p>
                </li>
              ))}
            </ul>

            {pageToken && (
              <div className="text-center mt-8">
                <button
                  onClick={loadMorePosts}
                  className="bg-gradient-to-r from-[#8E2DE2] to-[#4A00E0] hover:scale-105 active:scale-95 transition-all text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-purple-500/25"
                  disabled={loading}
                >
                  {loading ? "Loading..." : "Load More"}
                </button>
              </div>
            )}
          </>
        ) : (
          <p className="text-center text-gray-500">Loading posts...</p>
        )}
      </main>
    </div>
  );
}