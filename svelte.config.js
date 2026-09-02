import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import rehypeSlug from 'rehype-slug';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [
		vitePreprocess(),
		// rehype-slug gives headings stable ids so long documents can carry a
		// working table of contents. It uses github-slugger, which the thesis
		// route also uses to derive that contents list from the same headings.
		mdsvex({ extensions: ['.md'], rehypePlugins: [rehypeSlug] })
	],
	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: undefined,
			precompress: false,
			strict: true
		})
	}
};

export default config;
