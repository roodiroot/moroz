import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      new URL("http://localhost:1337/uploads/**"),
      new URL("https://api.mordovklimat.ru/uploads/**"),
    ],
  },
};

export default nextConfig;
