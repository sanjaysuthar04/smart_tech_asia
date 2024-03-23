/** @type {import('next').NextConfig} */

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;


const getBasePath = () => {
	if (BASE_URL && BASE_URL.indexOf('/') !== -1) {
		return BASE_URL.substring(BASE_URL.indexOf('/'));
	}
	return undefined;
};

const nextConfig = {
  reactStrictMode: true,
  basePath: getBasePath(),
  async rewrites() {
    return [
      {
        source: '/changelog',
        destination: 'https://1linksapp.canny.io/changelog',
      },
      {
        source: "/posts",
        destination: "https://astro-paper-seven-roan.vercel.app", //-> Replace https://starter-kit-rose-seven.vercel.app with your own Vercel deployment URL from step 1
      },
      {
        source: "/posts/:path*",
        destination: "https://astro-paper-seven-roan.vercel.app/posts/:path*",// -> Replace https://starter-kit-rose-seven.vercel.app with your own Vercel deployment URL from step 1
      },
    ]
  },
}

module.exports = nextConfig
