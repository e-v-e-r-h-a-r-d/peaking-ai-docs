// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

export default defineConfig({
	integrations: [
		starlight({
			title: 'Peaking AI',
			favicon: '/favicon.svg',
			head: [
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.googleapis.com',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'preconnect',
						href: 'https://fonts.gstatic.com',
						crossorigin: '',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						href: 'https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=JetBrains+Mono:wght@400;500;600;700&display=swap',
					},
				},
			],
			customCss: ['./src/styles/custom.css'],
			components: {
				ThemeSelect: './src/components/ThemeSelect.astro',
			},
			expressiveCode: {
				themes: ['github-dark-dimmed'],
			},
			sidebar: [
				{
					label: 'Get Started',
					items: [
						{ label: 'Introduction', slug: 'get-started' },
						{ label: 'Quickstart', slug: 'get-started/quickstart' },
						{ label: 'Authentication', slug: 'get-started/authentication' },
					],
				},
				{
					label: 'Core Concepts',
					items: [
						{ label: 'Models', slug: 'core-concepts/models' },
						{ label: 'Agents', slug: 'core-concepts/agents' },
						{ label: 'Workflows', slug: 'core-concepts/workflows' },
					],
				},
				{
					label: 'Build with Peaking',
					items: [
						{ label: 'Text Generation', slug: 'build/text-generation' },
						{ label: 'Vision & Multimodal', slug: 'build/vision' },
						{ label: 'Code Generation', slug: 'build/code-generation' },
					],
				},
				{
					label: 'API Reference',
					items: [
						{ label: 'Overview', slug: 'api-reference/overview' },
						{ label: 'Endpoints', slug: 'api-reference/endpoints' },
						{ label: 'Error Codes', slug: 'api-reference/errors' },
					],
				},
				{
					label: 'Guides',
					items: [
						{ label: 'Best Practices', slug: 'guides/best-practices' },
						{ label: 'Prompt Engineering', slug: 'guides/prompt-engineering' },
					],
				},
			],
		}),
	],
});
