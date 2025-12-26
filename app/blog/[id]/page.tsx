import { Suspense } from "react";
import BlogPostClient from "./blog-post-client";

interface BlogPost {
  id: string;
  title: string;
  published: string;
  content: string;
}

export async function generateStaticParams() {
  try {
    const response = await fetch(
      `https://www.googleapis.com/blogger/v3/blogs/4505914727176930119/posts?key=AIzaSyCM_6zpt76Saf2slTWV1EKoFQBMOFfdeFw`,
      { next: { revalidate: 3600 } }
    );
    const data = await response.json();
    return (data.items || []).map((post: BlogPost) => ({ id: post.id }));
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return [];
  }
}

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <Suspense fallback={<div className="text-center text-gray-500 mt-20">Loading post...</div>}>
      <BlogPostClient id={id} />
    </Suspense>
  );
}