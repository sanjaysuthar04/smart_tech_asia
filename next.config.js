/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/blog",
        destination: "https://astro-paper-4qz.pages.dev/posts", //-> Replace https://starter-kit-rose-seven.vercel.app with your own Vercel deployment URL from step 1
      },
      {
        source: "/blog/:path*",
        destination: "https://astro-paper-4qz.pages.dev/posts/:path*",// -> Replace https://starter-kit-rose-seven.vercel.app with your own Vercel deployment URL from step 1
      },
    ]
  },
}

module.exports = nextConfig
