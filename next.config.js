/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	productionBrowserSourceMaps: true,
};

module.exports = 
{
	images: {
		loader: 'cloudinary',
		path: '',
	}, 
	nextConfig
  }
  