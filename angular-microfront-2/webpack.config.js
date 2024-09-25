const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(path.join(__dirname, "tsconfig.json"), [
  /* mapped paths to share */
]);

module.exports = {
  output: {
    uniqueName: "angularMicrofront2",
    publicPath: "auto",
  },
  optimization: {
    runtimeChunk: false,
  },
  resolve: {
    alias: {
      ...sharedMappings.getAliases(),
    },
  },
  experiments: {
    outputModule: true,
  },
  plugins: [
    new ModuleFederationPlugin({
      library: { type: "module" },

      // For remotes (please adjust)
      name: "angular_microfront_2",
      filename: "remoteEntry.js",
      exposes: {
        GalleryPhotoModule: "./src/app/gallery-photo/gallery-photo.module.ts",
        GalleryReelsModule: "./src/app/gallery-reels/gallery-reels.module.ts",
        GallerySavedModule: "./src/app/gallery-saved/gallery-saved.module.ts",
        GalleryTaggedModule:
          "./src/app/gallery-tagged/gallery-tagged.module.ts",
      },

      // For hosts (please adjust)
      // remotes: {
      //     "mfe1": "http://localhost:3000/remoteEntry.js",

      // },

      shared: share({
        "@angular/core": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/common/http": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        "@angular/router": {
          singleton: true,
          strictVersion: true,
          requiredVersion: "auto",
        },
        react: {
          singleton: true, // Usar una sola instancia de React
          eager: true, // Cargar la dependencia temprano
          requiredVersion: "^18.2.0", // La misma versión de React en ambos lugares
        },
        "react-dom": {
          singleton: true,
          eager: true,
          requiredVersion: "^18.2.0", // La misma versión de React DOM
        },

        ...sharedMappings.getDescriptors(),
      }),
    }),
    sharedMappings.getPlugin(),
  ],
};
