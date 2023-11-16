// @ts-check

const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	rewrites: async () => [
		{
			source: "/blogs/test",
			destination: "/blogs/get-started",
		},
	],
};

module.exports = withContentlayer(nextConfig);
