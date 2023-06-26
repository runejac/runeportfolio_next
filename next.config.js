/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/webp", "image/avif"],
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(pdf)$/i,
      use: [
        {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            publicPath: "/_next/static/files",
            outputPath: "static/files",
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;
