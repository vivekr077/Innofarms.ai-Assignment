/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  async redirects() {
    return [
      {
        source: '/About',
        destination: '/about',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
