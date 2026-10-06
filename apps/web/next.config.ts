import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      {
        source: "/stack/microplex",
        destination: "/microplex",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
