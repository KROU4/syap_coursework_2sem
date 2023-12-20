/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	productionBrowserSourceMaps: true,
};

module.exports = 
{
	images: {
		loader: 'akamai',
		path: '',
	}, 
	nextConfig
  }