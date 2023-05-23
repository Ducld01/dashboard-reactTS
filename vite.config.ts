import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import relay from "vite-plugin-relay";
import dynamicImport from "vite-plugin-dynamic-import";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  console.log(env);
  
  return {
    base: env.REACT_APP_MYDASHBOARD_ORIGIN,
    plugins: [react(), relay, dynamicImport()],
    resolve: {
      alias: [
        {
          find: "@",
          replacement: path.resolve(__dirname, "src"),
        },
        {
          find: "~",
          replacement: path.resolve(__dirname),
        },
      ],
    },
    server: {
      open: true,
      port: 3000,
    },
  };
});
