import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

{
  "rewrites": [
    {
      "source": "/files/:path*",
      "destination": "/public/files/:path*"
    }
  ]
}

export default nextConfig;
