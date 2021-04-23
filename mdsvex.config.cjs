module.exports = {
	extensions: ['.svx', '.md'],
	smartypants: {
		dashes: 'oldschool',
	},
	layout: {
		// blog: './src/routes/blog/_mdlayout.svelte',
	},
	remarkPlugins: [
		[
			require('remark-github'),
			{
				// Use your own repository
				repository: 'https://github.com/svelte-add/mdsvex.git',
			},
		],
		require('remark-abbr'),
	],
	rehypePlugins: [
		require('rehype-slug'),
		[
			require('rehype-autolink-headings'),
			{
				behavior: 'wrap',
			},
		],
	],
};
