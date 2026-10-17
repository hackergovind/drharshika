import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    // The site is still reachable on its old *.vercel.app host. Send it to the
    // custom domain permanently so Google treats drharshika.in as the only
    // version and does not split ranking signals between the two.
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "drharshika.vercel.app" }],
        destination: "https://drharshika.in/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "drharshikawellness.vercel.app" }],
        destination: "https://drharshika.in/:path*",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
          {
            key: "Content-Security-Policy",
            value: [
              "default-src 'self'",
              "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
              "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com",
              "font-src 'self' https://fonts.gstatic.com",
              "img-src 'self' data: blob: https:",
              "connect-src 'self' https:",
              "frame-ancestors 'self'",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
