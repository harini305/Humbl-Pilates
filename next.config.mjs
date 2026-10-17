/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: { unoptimized: true },
  async redirects() {
    // Legacy PHP routes found in docs/source-audit/02-page-inventory.md
    return [
      { source: '/index.php', destination: '/', permanent: true },
      { source: '/classes.php', destination: '/classes/', permanent: true },
      { source: '/pricing.php', destination: '/pricing/', permanent: true },
      { source: '/about_us.php', destination: '/about/', permanent: true },
      { source: '/footer.php', destination: '/', permanent: true },
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.humblpilates.com' }],
        destination: 'https://humblpilates.com/:path*',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
