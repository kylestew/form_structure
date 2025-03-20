/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    pageExtensions: ['ts', 'tsx', 'js', 'jsx'],
    webpack: (config) => {
        // Add loader for shader files
        config.module.rules.push({
            test: /\.(glsl|vs|fs|vert|frag)$/,
            use: ['raw-loader'],
        })

        return config
    },
}

module.exports = nextConfig
