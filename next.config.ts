import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
},
env: {
  PAYPAL_CLIENT_KEY:"AdcDFkGEb4Dsdmf41sWb3sf2MZQXv4GQ6UJvPJYCdv7lyK7mGwTnVhXxwNJrdNm53RMmlwyL4BWcg24H",
  //PAYPAL_MODE:"sandbox",
  //PAYPAL_CLIENT_KEY:"AaE5j_iAGG8h6JeuW6y3khLvftR8OT2qDi2tqlhTaOeC4QxU3feFgMgF1RYMGe7LuYAtd7EyhQZpUhQz",
},
};

export default nextConfig;
