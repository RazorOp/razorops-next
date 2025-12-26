import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // output: "export", // Uncomment for static exports (GitHub Pages)
  // basePath: "/razorops-next",
  // assetPrefix: "/razorops-next/",
  images: {
    unoptimized: true,
  }
};

export default nextConfig;
