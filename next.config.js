/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'background_img': "url('/images/background/pexels-chris-9407829.jpg')",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    }
  },
  images: {
    domains: ['res.cloudinary.com'],
  },
};
