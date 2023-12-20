/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	productionBrowserSourceMaps: true,
};

module.exports = {
	nextConfig,

	experimental: {
        images: {
            unoptimized: true
        }
    }
}
