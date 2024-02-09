import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
    kit: {
        adapter: adapter(),

		alias: {
			// Define your aliases here
			$components: resolve('./src/lib/components'),
			$utils: resolve('./src/lib/utils')
		}
    },

    preprocess: vitePreprocess()
};

export default config;
