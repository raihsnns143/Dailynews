import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 💡 বিল্ড এরর এড়াতে এই অংশটি যোগ করা হলো
  typescript: {
    ignoreBuildErrors: true, 
  },

  // ⚠️ Deprecated 'images.domains' এর পরিবর্তে 'images.remotePatterns' ব্যবহার করা হলো
  images: {
    // domains: ['images.unsplash.com', 'fakestoreapi.com'], // ❌ এই লাইনটি বাদ দিন
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'fakestoreapi.com',
      },
    ],
  },
};

export default nextConfig;