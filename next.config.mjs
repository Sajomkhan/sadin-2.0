/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: "https",
            hostname: "shohid.info"
          },
          {
            protocol: "https",
            hostname: "netra.news"
          },

        ]
      }
};

export default nextConfig;
