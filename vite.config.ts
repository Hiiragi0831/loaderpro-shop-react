import preact from "@preact/preset-vite";
import VitePluginSvgSpritemap from "@spiriit/vite-plugin-svg-spritemap";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [preact(), VitePluginSvgSpritemap("./src/icons/*.svg")],
  server: {
    watch: {
      usePolling: true,
    },
  },
});
