/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  compiler: {
    styledComponents: true, // ISSO AQUI
  },
  trailingSlash: true,
};

module.exports = nextConfig;
