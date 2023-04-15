/** @type {import('next').NextConfig} */

require("dotenv").config();
const nextConfig = {
  reactStrictMode: true,

  env: {
    MONGO_URI: process.env.MONGO_URI,
  },
};

module.exports = nextConfig;
