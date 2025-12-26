import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export", // Enables static exports
  // Set the base path to your repository name, e.g., "/my-blog-repo"
  basePath: "/razorops-next",
  assetPrefix: "/razorops-next/",
  images: {
    unoptimized: true, // GitHub Pages does not support Next.js image optimization by default
  }
};

export default nextConfig;
