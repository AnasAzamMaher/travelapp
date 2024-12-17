import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: false, // Disable TurboPack
  },
};

export default nextConfig;
