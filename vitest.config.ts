import { join } from "path";
import { loadEnv } from "vite";
import { configDefaults, defineConfig } from "vitest/config";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  // Dirty, because process.env should be read-only
  process.env = Object.assign(process.env, env);
  return {
    test: {
      exclude: [...configDefaults.exclude],
    },
    resolve: {
      alias: {
        "@/": join(__dirname, "./src/"),
      },
    },
  };
});
