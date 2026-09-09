// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const GA_MEASUREMENT_ID = 'G-XTN1FD69HK';

export default defineConfig({
	site: 'https://docs.peaking.ai',
	redirects: {
		'/02-canales/conexion-whatsapp/': '/15-whatsapp/conexion-whatsapp/',
		'/02-canales/plantillas-whatsapp/': '/15-whatsapp/plantillas-whatsapp/',
		'/15-envios-whatsapp/envios-whatsapp/': '/15-whatsapp/envios-whatsapp/',
		'/09-integraciones-partner/reconexion-tokens/': '/02-canales/reconexion-tokens/',
		'/18-how-to/configuraciones-frecuentes/': '/17-soporte/configuraciones-frecuentes/',
		'/16-guia-devs/peaking-mcp/': '/01-primeros-pasos/configuraciones-iniciales/',
	},
	integrations: [
		starlight({
			title: 'Peaking AI',
			favicon: '/favicon.png',
			logo: {
				light: './src/assets/logo-light.png',
				dark: './src/assets/logo-dark.png',
				replacesTitle: true,
			},
			head: [
				// Google Analytics 4
				{
					tag: 'script',
					attrs: {
						src: `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`,
						async: true,
					},
				},
				{
					tag: 'script',
					content: `
						window.dataLayer = window.dataLayer || [];
						function gtag(){dataLayer.push(arguments);}
						gtag('js', new Date());
						gtag('config', '${GA_MEASUREMENT_ID}', {
							page_title: document.title,
							page_location: window.location.href,
						});
					`,
				},
				// Google Fonts
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
				MarkdownContent: './src/components/MarkdownContent.astro',
				SocialIcons: './src/components/SocialIcons.astro',
			},
			expressiveCode: {
				themes: ['github-dark-dimmed'],
			},
			sidebar: [
				{
					label: 'Novedades',
					autogenerate: { directory: '00-novedades' },
				},
				{
					label: 'Primeros pasos',
					autogenerate: { directory: '01-primeros-pasos' },
				},
				{
					label: 'Integraciones',
					items: [
						{
							label: 'WhatsApp',
							badge: { text: 'Más usado', variant: 'success' },
							autogenerate: { directory: '15-whatsapp' },
						},
						{
							label: 'Audiencias y Campañas',
							autogenerate: { directory: '14-audiencias' },
						},
						{
							label: 'Otros canales',
							badge: { text: 'Secundario', variant: 'note' },
							autogenerate: { directory: '02-canales' },
						},
						{
							label: 'Catálogos y Herramientas',
							autogenerate: { directory: '09-integraciones-partner' },
						},
					],
				},
				{
					label: 'Estudio de Prompts',
					autogenerate: { directory: '03-prompt-studio' },
				},
				{
					label: 'Base de Conocimientos',
					autogenerate: { directory: '04-base-conocimientos' },
				},
				{
					label: 'Mensajes',
					autogenerate: { directory: '05-conversaciones' },
				},
				{
					label: 'CRM y Gestión',
					items: [
						{
							label: 'CRM',
							autogenerate: { directory: '06-crm-audiencias' },
						},
						{
							label: 'Contactos',
							autogenerate: { directory: '13-contactos' },
						},
						{
							label: 'Tareas',
							autogenerate: { directory: '10-tareas' },
						},
					],
				},
				{
					label: 'Productos',
					autogenerate: { directory: '07-productos-pagos' },
				},
				{
					label: 'Pedidos y Carritos',
					autogenerate: { directory: '12-pedidos-carritos' },
				},
				{
					label: 'Insights',
					autogenerate: { directory: '08-analytics' },
				},
				{
					label: 'Workflows',
					autogenerate: { directory: '11-workflows' },
				},
				{
					label: 'Mejores Prácticas',
					autogenerate: { directory: '19-mejores-practicas' },
				},
				{
					label: 'Soporte y Soluciones',
					autogenerate: { directory: '17-soporte' },
				},
				// admin-interno: NO incluido aquí — oculto con sidebar.hidden: true en cada página
			],
		}),
	],
});
