/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['127.0.0.1']
    },
    experimental: {
        serverActions: true,
    },
}

module.exports = nextConfig
