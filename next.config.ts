import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  "rewrites": [
    {
      "source": "/files/:path*",
      "destination": "/public/files/:path*"
    }
  ]
};

export default nextConfig;
