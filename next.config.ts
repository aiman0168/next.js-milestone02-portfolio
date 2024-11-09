import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/cv.pdf",
        destination: "/Public/cv.pdf",
      },
    ];
  },
};

export default nextConfig;
