export const state = () => ({
	projects: [
		{
			name: 'Rare Country Awards',
			slug: 'rare-country-awards',
			tags: [
				{
					name: 'Nuxt/Vue',
					icon: 'vuejs'
				},
				{
					name: 'Firebase',
					icon: 'firebase'
				}
			],
			main: 'rc.jpg',
			label: 'rc',
			desc: 'This was an award site built for the 2017 Rare Country Awards in Nashville. During the voting period, authenticated users submitted up to 10 votes a day and became eligible to win a trip to Nashville. I even got to attend the awards show. Coolest project to date!',
			specs: 'The site was powered by <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>, a Vue SSR Framework. I used Firebase to store the data and used Heroku to deploy my Nuxt/node.js instance.',
			url: 'https://www.rarecountryawards.com/'
		},
		{
			name: 'Be.Rare.Us',
			slug: 'be-rare-us',
			tags: [
				{
					name: 'Canvas',
					icon: 'canvas'
				},
				{
					name: 'Social Authentication',
					icon: 'share'
				}
			],
			main: 'berare.png',
			label: 'br',
			desc: 'This project opened my eyes to the wonderful world of canvas. The photo tool was designed as social media campaign and canvas allowed me to save an image with dynamic text and backgrounds.',
			specs: 'The site was powered by <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>, a Vue SSR Framework. I used Firebase to store the data and used Heroku to deploy my Nuxt/node.js instance.',
			url: 'http://be.rare.us/'
		},
		{
			name: 'MedicareMall.com',
			slug: 'medicaremall',
			tags: [
				{
					name: 'WordPress Theme Development',
					icon: 'wordpress'
				},
				{
					name: 'BitBucket',
					icon: 'bitbucket'
				}
			],
			main: 'medicaremall.png',
			label: 'mm',
			desc: 'This site runs on WordPress and it was my first deep dive into building a theme from scratch; (although, I did use <a href="https://underscores.me/" target="_blank">_underscores</a> as a skeleton). This was built around two years ago at the time of writing.',
			specs: 'The site was powered by <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>, a Vue SSR Framework. I used Firebase to store the data and used Heroku to deploy my Nuxt/node.js instance.',
			url: 'https://www.medicaremall.com/'
		},
		{
			name: 'faves.com',
			slug: 'faves',
			tags: [
				{
					name: 'Heroku',
					icon: 'heroku'
				}
			],
			main: 'faves.png',
			label: 'fv',
			desc: 'This project was designed to aggregate our top performers for Fans 1st Media sites. I needed a way to server-side render content (for SEO) pulled in from a custom build WordPress endpoint so I went with <a href="https://nuxtjs.org/">Nuxt</a> and deployed the Node.js environment using Heroku.',
			specs: 'The site was powered by <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>, a Vue SSR Framework. I used Firebase to store the data and used Heroku to deploy my Nuxt/node.js instance.',
			url: 'http://faves.com/'
		},
		{
			name: 'Taxonomy Inspector',
			slug: 'taxonomy-inspector',
			tags: [
				{
					name: 'WordPress Rest API',
					icon: 'wordpress'
				},
				{
					name: 'Netlify (deployment tool)',
					icon: 'netlify'
				}
			],
			main: 'tax-inspect.png',
			label: 'ti',
			desc: 'This is a simple static site I initially built to get a quick look at internal sites’ taxonomy usage. Since the same logic could be applied to any WordPress site, I thought it’d be neat to see how other media companies organized their tags and categories.',
			specs: 'The site was powered by <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>, a Vue SSR Framework. I used Firebase to store the data and used Heroku to deploy my Nuxt/node.js instance.',
			url: 'https://jolly-pike-f07dc0.netlify.com/'
		},
		{
			name: 'Web Design Class Site',
			slug: 'web-design-class',
			tags: [
				{
					name: 'Markdown',
					icon: 'file'
				}
			],
			main: 'webdesign.png',
			label: 'wd',
			desc: 'Last spring, I taught a Wed Design course and used this site to guide lessons and projects each class period. <a href="https://kind-beaver-78f31b.netlify.com/handouts/intro-to-html" target="_blank">Using markdown to build each lesson</a> allowed me to quickly document and allow printable versions of each topic.',
			specs: 'The site was powered by <a href="https://nuxtjs.org/" target="_blank">Nuxt.js</a>, a Vue SSR Framework. I used Firebase to store the data and used Heroku to deploy my Nuxt/node.js instance.',
			url: 'https://kind-beaver-78f31b.netlify.com/'
		}
	]
})