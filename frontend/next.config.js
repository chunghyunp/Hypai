/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    let backendUrl = process.env.BACKEND_URL ?? 'http://localhost:4000';
    if (backendUrl && !backendUrl.startsWith('http://') && !backendUrl.startsWith('https://')) {
      backendUrl = `https://${backendUrl}`;
    }
    return [
      {
        source: '/api/:path*',
        destination: `${backendUrl}/api/:path*`,
      },
    ];
  },
};

module.exports = nextConfig;
