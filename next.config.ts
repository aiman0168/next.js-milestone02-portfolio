import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/cv.pdf",
        destination: "/public/cv.pdf",  // Just an example of a rewrite rule
      },
    ];
  },
};

export default nextConfig;
