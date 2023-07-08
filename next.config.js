/** @type {import('next').NextConfig} */
const nextConfig = {
  /*images: {
    formats: ["image/webp", "image/avif"],
  },*/
  webpack: (config) => {
    // camelCase style i tsx-filer som gjør at camel-case klasser i css/scss fungerer
    // uten denne fungerer det KUN å lage classnames i CSS filene med camelCase
    // convention blir mer rett og, med classnames i styling-filer med camelCase

    config.module.rules
      .find(({ oneOf }) => !!oneOf)
      .oneOf.filter(({ use }) => JSON.stringify(use)?.includes("css-loader"))
      .reduce((acc, { use }) => acc.concat(use), [])
      .forEach(({ options }) => {
        if (options.modules) {
          options.modules.exportLocalsConvention = "camelCase";
        }
      });

    return config;
  },
};

module.exports = nextConfig;
