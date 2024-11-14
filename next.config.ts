import type { NextConfig } from "next";
import { withContentCollections } from "@content-collections/next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: '@content-collections/next/loader'
    });
    return config;
  }
};

export default withContentCollections(nextConfig);