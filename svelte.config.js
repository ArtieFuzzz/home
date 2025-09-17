import adapter from "@sveltejs/adapter-vercel";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    csrf: {
      trustedOrigins: ["https://coollabs.io", "https://canine.tools"],
    },
    csp: {
      mode: "auto",
      directives: {
        "script-src": ["self", "https://plausible.canine.tools"],
        "font-src": ["self", "https://cdn.fonts.coollabs.io"],
        "style-src": ["self", "https://api.fonts.coollabs.io"],
        "img-src": [
          "self",
          "https://i.scdn.co",
          "https://api.lanyard.rest",
          "data:",
        ],
        "worker-src": ["self"],
      },
    },
  },
};

export default config;
