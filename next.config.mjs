/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["fws-store.s3.sa-east-1.amazonaws.com", "utfs.io"],
  },
  // experimental: {
  //   serverActions: true,
  // },
};

export default nextConfig;
