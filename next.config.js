/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'md', 'mdx'],
    webpack: (config) => {
        // Add loader for shader files
        config.module.rules.push({
            test: /\.(glsl|vs|fs|vert|frag)$/,
            use: ['raw-loader'],
        })

        return config
    },
}

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
})

module.exports = withMDX(nextConfig)
