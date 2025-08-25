import type { NextConfig } from "next";

const nextConfig: NextConfig = {

};

module.exports = {
  images: {
    remotePatterns: [new URL('https://picsum.photos/id/237/200/300')],
  },
}

export default nextConfig;
