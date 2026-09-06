import { resolve } from "path";

export default {
  root: resolve(__dirname, "src"),
  base: "/dental-1/",
  build: {
    outDir: "../dist",
  },
  server: {
    port: 8080,
  },
  // Optional: Silence Sass deprecation warnings. See note below.
  css: {
    preprocessorOptions: {
      scss: {
        silenceDeprecations: [
          "import",
          "mixed-decls",
          "color-functions",
          "global-builtin",
        ],
      },
    },
  },
};
