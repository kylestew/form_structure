/** @type {import('next').NextConfig} */

const nextConfig = {
    reactStrictMode: false,
    webpack: (config) => {
        config.module.rules.push({
            test: /\.(glsl|vs|fs|vert|frag|ps)$/,
            exclude: /node_modules/,
            use: ['raw-loader'],
        })
        return config
    },
}

export default nextConfig
