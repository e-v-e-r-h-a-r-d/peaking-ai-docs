// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import rehypePendingShot from './src/plugins/pending-shot.mjs';

const GA_MEASUREMENT_ID = 'G-XTN1FD69HK';

export default defineConfig({
	site: 'https://docs.peaking.ai',
	markdown: {
		rehypePlugins: [rehypePendingShot],
	},
	redirects: {
		'/01-primeros-pasos/paquete-de-implementacion/': '/17-soporte/bug-vs-implementacion/#implementaciones',
		'/01-primeros-pasos/onboarding-guiado/': '/01-primeros-pasos/configuracion-inicial/#el-asistente-de-bienvenida',
		'/01-primeros-pasos/activa-tus-modulos/': '/08-configuracion/cuenta/#módulos',
		'/08-configuracion/empresa-y-equipo/organizacion/': '/08-configuracion/empresa-y-equipo/',
		'/08-configuracion/empresa-y-equipo/sucursales/': '/08-configuracion/empresa-y-equipo/#sucursales',
		'/08-configuracion/empresa-y-equipo/equipo-y-roles/': '/08-configuracion/empresa-y-equipo/#equipo-y-roles',
		'/08-configuracion/empresa-y-equipo/turnos-y-horario/': '/08-configuracion/empresa-y-equipo/#turnos-y-horario',
		'/08-configuracion/empresa-y-equipo/mi-perfil/': '/08-configuracion/empresa-y-equipo/#mi-perfil',
		'/08-configuracion/operacion/asignacion/': '/08-configuracion/operacion/',
		'/08-configuracion/operacion/organizacion-interna/': '/08-configuracion/operacion/#organización-interna',
		'/08-configuracion/operacion/extraccion-de-datos/': '/08-configuracion/operacion/#extracción-de-datos',
		'/08-configuracion/operacion/campos-del-crm/': '/08-configuracion/operacion/#campos-del-crm',
		'/08-configuracion/cuenta/modulos/': '/08-configuracion/cuenta/',
		'/08-configuracion/cuenta/plan/': '/08-configuracion/cuenta/#plan',
		'/08-configuracion/cuenta/seguridad-y-privacidad/': '/08-configuracion/cuenta/#seguridad-y-privacidad',
		'/08-configuracion/canales-e-integraciones/herramientas/': '/08-configuracion/canales-e-integraciones/integraciones/#herramientas-y-odoo',
		'/08-configuracion/canales-e-integraciones/google-calendar/': '/08-configuracion/canales-e-integraciones/calendario-y-crm/',
		'/08-configuracion/canales-e-integraciones/gohighlevel/': '/08-configuracion/canales-e-integraciones/calendario-y-crm/#gohighlevel',
		'/08-configuracion/canales-e-integraciones/formularios-de-leads/': '/08-configuracion/canales-e-integraciones/formularios-webhooks-y-api/',
		'/08-configuracion/canales-e-integraciones/webhooks-y-catalogos/': '/08-configuracion/canales-e-integraciones/formularios-webhooks-y-api/#webhooks-y-catálogos-de-datos',
		'/08-configuracion/canales-e-integraciones/claves-de-api/': '/08-configuracion/canales-e-integraciones/formularios-webhooks-y-api/#claves-de-api-y-peaking-mcp',
		'/05-agente-ia/estudio-de-prompts/crear-y-editar-un-prompt/': '/05-agente-ia/estudio-de-prompts/#crear-y-editar-un-prompt',
		'/05-agente-ia/estudio-de-prompts/plantillas-de-prompt/': '/05-agente-ia/estudio-de-prompts/#plantillas-de-prompt',
		'/05-agente-ia/workflows/publicar-probar-y-ejecuciones/': '/05-agente-ia/workflows/#publicar-probar-y-revisar-ejecuciones',
		'/04-base-conocimientos/adjuntos-y-fichas-tecnicas/': '/04-base-conocimientos/#adjuntos-y-fichas-técnicas',
		'/04-base-conocimientos/conectar-knowledge-base-al-agente/': '/04-base-conocimientos/como-lo-usa-el-agente/',
		'/04-base-conocimientos/mejores-practicas-de-contenido/': '/04-base-conocimientos/como-lo-usa-el-agente/#mejores-prácticas-para-tu-base-de-conocimientos',
		'/06-crm-audiencias/ajustes-del-pipeline/': '/06-crm-audiencias/#ajustes-del-pipeline',
		'/02-canales/': '/08-configuracion/canales-e-integraciones/canales/',
		'/02-canales/conexion-instagram/': '/08-configuracion/canales-e-integraciones/canales/#instagram-y-messenger',
		'/02-canales/conexion-messenger/': '/08-configuracion/canales-e-integraciones/canales/#instagram-y-messenger',
		'/02-canales/widget-sitio-web/': '/08-configuracion/canales-e-integraciones/canales/#sitio-web-chat-widget',
		'/02-canales/prueba-verificacion-canales/': '/08-configuracion/canales-e-integraciones/canales/#verifica-que-un-canal-funciona',
		'/02-canales/reconexion-tokens/': '/08-configuracion/canales-e-integraciones/canales/#token-expirado-instagram-y-messenger',
		'/02-canales/conexion-whatsapp/': '/08-configuracion/canales-e-integraciones/canales/#whatsapp',
		'/02-canales/plantillas-whatsapp/': '/14-audiencias/plantillas/',
		'/15-whatsapp/': '/08-configuracion/canales-e-integraciones/canales/#whatsapp',
		'/15-whatsapp/conexion-whatsapp/': '/08-configuracion/canales-e-integraciones/canales/#whatsapp',
		'/15-whatsapp/plantillas-whatsapp/': '/14-audiencias/plantillas/',
		'/15-whatsapp/envios-whatsapp/': '/14-audiencias/envios-masivos/',
		'/15-envios-whatsapp/envios-whatsapp/': '/14-audiencias/envios-masivos/',
		'/03-prompt-studio/': '/05-agente-ia/estudio-de-prompts/',
		'/03-prompt-studio/crea-tu-primer-prompt/': '/05-agente-ia/estudio-de-prompts/#crear-y-editar-un-prompt',
		'/03-prompt-studio/declarar-herramientas/': '/05-agente-ia/instrucciones-del-agente/',
		'/03-prompt-studio/como-testear-tu-agente/': '/05-agente-ia/estudio-de-prompts/probar-publicar-y-versiones/',
		'/03-prompt-studio/mejores-practicas-y-ejemplos/': '/05-agente-ia/estudio-de-prompts/mejores-practicas-y-ejemplos/',
		'/03-prompt-studio/variables-y-funciones-avanzadas/': '/05-agente-ia/estudio-de-prompts/#plantillas-de-prompt',
		'/04-base-conocimientos/que-es-y-como-funciona/': '/04-base-conocimientos/',
		'/04-base-conocimientos/subir-documentos-y-urls/': '/04-base-conocimientos/',
		'/05-conversaciones/bandeja-de-mensajes/': '/05-conversaciones/',
		'/05-conversaciones/panel-de-conversaciones/': '/05-conversaciones/',
		'/05-conversaciones/escalamiento-a-humano/': '/05-conversaciones/etiquetas-y-escalamiento/',
		'/05-conversaciones/tags-y-etiquetas/': '/05-conversaciones/etiquetas-y-escalamiento/',
		'/06-crm-audiencias/crm-vista-general/': '/06-crm-audiencias/',
		'/07-productos-pagos/catalogo-de-productos/': '/07-productos-pagos/',
		'/08-analytics/dashboard-overview/': '/08-analytics/',
		'/08-analytics/metricas-clave-y-kpis/': '/08-analytics/',
		'/08-analytics/peaking-insights/': '/08-analytics/',
		'/08-analytics/reportes-y-analisis/': '/08-analytics/',
		'/09-integraciones-partner/': '/08-configuracion/canales-e-integraciones/integraciones/#herramientas-y-odoo',
		'/09-integraciones-partner/odoo-hubspot-zoho/': '/08-configuracion/canales-e-integraciones/odoo/',
		'/09-integraciones-partner/google-calendar/': '/08-configuracion/canales-e-integraciones/calendario-y-crm/',
		'/09-integraciones-partner/catalogos-de-datos/': '/08-configuracion/canales-e-integraciones/formularios-webhooks-y-api/#webhooks-y-catálogos-de-datos',
		'/09-integraciones-partner/correo-electronico/': '/05-conversaciones/correo/',
		'/09-integraciones-partner/agentes-de-voz/': '/05-agente-ia/agente-de-voz/',
		'/09-integraciones-partner/meta-ads/': '/08-configuracion/canales-e-integraciones/meta-ads-y-capi/',
		'/09-integraciones-partner/meta-conversions-api/': '/08-configuracion/canales-e-integraciones/meta-ads-y-capi/',
		'/09-integraciones-partner/reconexion-tokens/': '/08-configuracion/canales-e-integraciones/canales/#token-expirado-instagram-y-messenger',
		'/10-tareas/tareas-y-todos/': '/10-tareas/',
		'/11-workflows/': '/05-agente-ia/workflows/',
		'/11-workflows/como-funcionan-los-workflows/': '/05-agente-ia/workflows/',
		'/12-pedidos-carritos/flujo-de-compra-con-ia/': '/12-pedidos-carritos/',
		'/12-pedidos-carritos/pedidos-y-carritos/': '/12-pedidos-carritos/',
		'/12-pedidos-carritos/stripe-configuracion/': '/08-configuracion/canales-e-integraciones/pagos/',
		'/12-pedidos-carritos/mercado-pago-configuracion/': '/08-configuracion/canales-e-integraciones/pagos/',
		'/13-contactos/gestion-de-contactos/': '/13-contactos/',
		'/14-audiencias/audiencias-y-segmentos/': '/14-audiencias/',
		'/14-audiencias/campanas-y-broadcasts/': '/14-audiencias/envios-masivos/',
		'/01-primeros-pasos/configuraciones-iniciales/': '/08-configuracion/empresa-y-equipo/',
		'/16-guia-devs/peaking-mcp/': '/08-configuracion/canales-e-integraciones/formularios-webhooks-y-api/#claves-de-api-y-peaking-mcp',
		'/18-how-to/configuraciones-frecuentes/': '/17-soporte/configuraciones-frecuentes/',
		'/00-novedades/septiembre-2026/': '/00-novedades/#septiembre-2026',
		'/00-novedades/agosto-2026/': '/00-novedades/#agosto-2026',
		'/00-novedades/julio-2026/': '/00-novedades/#julio-2026',
		'/00-novedades/junio-2026/': '/00-novedades/#junio-2026',
	},
	integrations: [
		starlight({
			title: 'Peaking AI',
			// Interfaz de Starlight (buscador, "En esta página", paginación) en español
			defaultLocale: 'root',
			locales: { root: { label: 'Español', lang: 'es' } },
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
						href: 'https://fonts.googleapis.com/css2?family=Manrope:wght@300..800&family=JetBrains+Mono:wght@400;500;600;700&display=swap',
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
				{ label: 'Novedades', autogenerate: { directory: '00-novedades' } },
				{
					label: 'Primeros pasos',
					items: [
						{ label: 'Empieza aquí', autogenerate: { directory: '01-primeros-pasos' } },
						{
							label: 'Configuración',
							items: [
								{ label: 'Empresa y equipo', slug: '08-configuracion/empresa-y-equipo' },
								{ label: 'Operación', slug: '08-configuracion/operacion' },
								{ label: 'Cuenta', slug: '08-configuracion/cuenta' },
							],
						},
					],
				},
				{ label: 'Integraciones', autogenerate: { directory: '08-configuracion/canales-e-integraciones' } },
				{
					label: 'Agente de IA',
					items: [
						{ label: 'Estudio de Prompts', autogenerate: { directory: '05-agente-ia/estudio-de-prompts' } },
						{ label: 'Instrucciones del agente', slug: '05-agente-ia/instrucciones-del-agente' },
						{ label: 'Agente de voz', slug: '05-agente-ia/agente-de-voz' },
						{ label: 'Workflows', autogenerate: { directory: '05-agente-ia/workflows' } },
					],
				},
				{ label: 'Base de Conocimientos', autogenerate: { directory: '04-base-conocimientos' } },
				{ label: 'Mensajes', autogenerate: { directory: '05-conversaciones' } },
				{
					label: 'CRM y Gestión',
					items: [
						{ label: 'CRM', autogenerate: { directory: '06-crm-audiencias' } },
						{ label: 'Contactos', autogenerate: { directory: '13-contactos' } },
						{ label: 'Tareas', autogenerate: { directory: '10-tareas' } },
					],
				},
				{ label: 'Productos', autogenerate: { directory: '07-productos-pagos' } },
				{ label: 'Pedidos y Carritos', autogenerate: { directory: '12-pedidos-carritos' } },
				{ label: 'Campañas', autogenerate: { directory: '14-audiencias' } },
				{ label: 'Insights', autogenerate: { directory: '08-analytics' } },
				{ label: 'Mejores Prácticas', autogenerate: { directory: '19-mejores-practicas' } },
				{ label: 'Soporte y Soluciones', autogenerate: { directory: '17-soporte' } },
				// admin-interno: NO incluido aquí — oculto con sidebar.hidden: true en cada página
			],
		}),
	],
});
