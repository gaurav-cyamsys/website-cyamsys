/** @type {import('next').NextConfig} */



const nextConfig = {
  
    webpack(config) {
    config.module.rules.push({
      test: /\.(glb|gltf)$/,
      type: "asset/resource",
      generator: {
        filename: "static/chunks/[name].[hash][ext]",
      },
    });
    return config;
  },
    output: "export",
    images: {
    unoptimized: true, 
  },
};

export default nextConfig;


