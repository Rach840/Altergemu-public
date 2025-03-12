import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		unoptimized: true,
	},
	eslint: {
		ignoreDuringBuilds: true
	}
	/* config options here */
};
module.exports = nextConfig;
export default nextConfig;
