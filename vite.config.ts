import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import VitePluginRewriteAll from "vite-plugin-rewrite-all";

export default defineConfig({
  plugins: [react(), VitePluginRewriteAll()],
});
