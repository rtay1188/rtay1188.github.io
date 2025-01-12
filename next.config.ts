import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    unoptimized: true,
  },
  output: "export",
  reactStrictMode: true,
};

module.exports = nextConfig;
