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
					label: 'Primeros pasos',
					autogenerate: { directory: '01-primeros-pasos' },
				},
				{
					label: 'Conecta tus canales',
					autogenerate: { directory: '02-canales' },
				},
				{
					label: 'Tu agente de IA — Prompt Studio',
					autogenerate: { directory: '03-prompt-studio' },
				},
				{
					label: 'Base de Conocimientos',
					autogenerate: { directory: '04-base-conocimientos' },
				},
				{
					label: 'Conversaciones y Mensajes',
					autogenerate: { directory: '05-conversaciones' },
				},
				{
					label: 'CRM, Contactos y Audiencias',
					autogenerate: { directory: '06-crm-audiencias' },
				},
				{
					label: 'Productos, Órdenes y Pagos',
					autogenerate: { directory: '07-productos-pagos' },
				},
				{
					label: 'Analytics e Insights',
					autogenerate: { directory: '08-analytics' },
				},
				{
					label: 'Integraciones y Partner Portal',
					autogenerate: { directory: '09-integraciones-partner' },
				},
				// admin-interno: NO incluido aquí — oculto con sidebar.hidden: true en cada página
			],
		}),
	],
});
