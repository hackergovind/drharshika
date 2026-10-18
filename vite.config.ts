import { defineConfig } from "vite";
import vinext from "vinext";
import { cloudflare } from "@cloudflare/vite-plugin";
import tailwindcss from "@tailwindcss/vite";

// Tailwind has to run through its dedicated Vite plugin here. Under Vite,
// `@import "tailwindcss"` in globals.css is otherwise treated as a file path
// and the RSC build fails with ENOENT. The Next.js/Vercel build keeps using
// postcss.config.mjs, so this only affects the Cloudflare Workers build.
export default defineConfig({
  plugins: [
    tailwindcss(),
    vinext(),
    cloudflare({
      viteEnvironment: {
        name: "rsc",
        childEnvironments: ["ssr"],
      },
    }),
  ],
});
