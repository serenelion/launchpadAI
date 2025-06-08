/** @type {import('next').NextConfig} */
const nextConfig = {
    /* config options here */
    output: 'standalone',
    reactStrictMode: true,
    swcMinify: true,
    distDir: "_static",
    images: {
        unoptimized: true
    },
}

module.exports = nextConfig
