/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for development
  reactStrictMode: true,

  // Image optimization configuration
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*.hf.space',
        pathname: '/**',
      },
    ],
  },

  // Security headers
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=()',
          },
        ],
      },
      // Special CSP for product page to allow MetaOptics iframe
      {
        source: '/product',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline'",
              "img-src 'self' data: https: blob:",
              "font-src 'self' data:",
              "connect-src 'self' https://*.hf.space " + (process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'),
              "frame-src 'self' https://*.hf.space https://dghfngbdfvxc-metaopticsai-license-server.hf.space",
              "frame-ancestors 'self'",
            ].join('; '),
          },
        ],
      },
    ];
  },

  // Environment variables that should be available client-side
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
    NEXT_PUBLIC_METAOPTICS_URL: process.env.NEXT_PUBLIC_METAOPTICS_URL || 'https://dghfngbdfvxc-metaopticsai-license-server.hf.space/',
  },

  // Redirect configuration
  async redirects() {
    return [
      // Redirect /products to /product
      {
        source: '/products',
        destination: '/product',
        permanent: true,
      },
    ];
  },

  // Enable experimental features if needed
  experimental: {
    // Enable server actions
    serverActions: {
      allowedOrigins: ['localhost:3000', 'nskailabs.com', 'www.nskailabs.com'],
    },
  },
};

export default nextConfig;
