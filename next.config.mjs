/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['images.pexels.com', 'media.istockphoto.com', 'thumbs.dreamstime.com','i.pinimg.com','www.symbols.com','st3.depositphotos.com'],
    // Add all the necessary domains here
  },
};

export default nextConfig;
