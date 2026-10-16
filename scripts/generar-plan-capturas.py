"""Genera PLAN-CAPTURAS-V2.md a partir de los borradores y de las imágenes viejas.

Uso (desde la raíz del repo):  python scripts/generar-plan-capturas.py

Lee:
  - borradores-v2/**/*.md        → marcadores  [CAPTURA PENDIENTE: ...]   (capturas NUEVAS)
  - src/content/docs/**/*.md(x)  → ![alt](url)                            (capturas VIEJAS a actualizar)
Escribe:
  - PLAN-CAPTURAS-V2.md
Se puede volver a correr cada vez que se agreguen páginas.
"""
import glob
import os
import re
from collections import defaultdict

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
os.chdir(ROOT)

# Prefijo de la carpeta del borrador → ruta de la app (dev1) y rol necesario.
RUTAS = [
    ('08-configuracion/canales-e-integraciones/integraciones', 'Configuración › Integraciones', 'Master'),
    ('08-configuracion/canales-e-integraciones/canales', 'Configuración › Canales', 'Master'),
    ('08-configuracion/canales-e-integraciones/herramientas', 'Configuración › Herramientas (Odoo)', 'Master + Odoo Sync'),
    ('08-configuracion/canales-e-integraciones/meta-ads', 'Configuración › Integraciones › Meta Ads / Meta CAPI', 'Master'),
    ('08-configuracion/canales-e-integraciones', 'Configuración › Integraciones', 'Master'),
    ('08-configuracion/empresa-y-equipo', 'Configuración › Empresa y equipo', 'Master'),
    ('08-configuracion/operacion', 'Configuración › Operación', 'Master'),
    ('08-configuracion/cuenta', 'Configuración › Cuenta', 'Master'),
    ('05-agente-ia/estudio-de-prompts', '/prompt-studio', 'Master o Administrador'),
    ('05-agente-ia/instrucciones-del-agente', 'Varias pantallas (ver página)', 'Master'),
    ('05-agente-ia/workflows', '/workflows', 'Master o Administrador'),
    ('01-primeros-pasos/onboarding', '/onboarding (paso 3)', 'Cuenta nueva'),
    ('05-conversaciones', '/messages  ·  /emails', 'Master o Administrador'),
    ('04-base-conocimientos', '/knowledge-base', 'Master o Administrador'),
]


def ruta_de(path):
    p = path.replace('\\', '/').replace('borradores-v2/', '')
    for pref, ruta, rol in RUTAS:
        if p.startswith(pref):
            return ruta, rol
    return 'Por definir', 'Por definir'


def slug(p):
    return p.replace('\\', '/').replace('borradores-v2/', '').replace('.md', '')


nuevas = []
_drafts = {os.path.relpath(f, 'borradores-v2').replace(os.sep, '/') for f in glob.glob('borradores-v2/**/*.md', recursive=True)}
_fuentes = sorted(glob.glob('borradores-v2/**/*.md', recursive=True))
# páginas viejas que siguen vivas (sin borrador equivalente): sus imágenes ya son marcadores
for _f in sorted(glob.glob('src/content/docs/**/*.md*', recursive=True)):
    _rel = os.path.relpath(_f, 'src/content/docs').replace(os.sep, '/')
    if _rel not in _drafts:
        _fuentes.append(_f)
for f in _fuentes:
    texto = open(f, encoding='utf-8').read()
    for m in re.finditer(r'^\[CAPTURA PENDIENTE:\s*(.+?)\]\s*$', texto, re.M):
        ruta, rol = ruta_de(f)
        nuevas.append((slug(f), ruta, rol, m.group(1).strip()))

viejas = defaultdict(list)
for f in sorted(glob.glob('src/content/docs/**/*.md*', recursive=True)):
    if 'admin-interno' in f.replace('\\', '/'):
        continue
    texto = open(f, encoding='utf-8').read()
    for alt, url in re.findall(r'!\[([^\]]*)\]\(([^)]+)\)', texto):
        viejas[f.replace('\\', '/').replace('src/content/docs/', '')].append((alt.strip(), os.path.basename(url.split('?')[0])))

out = []
w = out.append
w('# Plan de capturas v2 — para el lunes\n')
w('> Generado con `python scripts/generar-plan-capturas.py`. Se puede regenerar al agregar páginas.\n')
w('**Objetivo:** tomar todas las capturas del rediseño Fusión. Las imágenes viejas ya se quitaron de las páginas. **Nada se despliega hasta terminar.**\n')
w(f'**Volumen:** {len(nuevas)} capturas por tomar. Las imágenes viejas ya se retiraron: cada una quedó como marcador `[CAPTURA PENDIENTE]`.\n')

w('## 0. Antes de empezar (preparación del entorno)\n')
w('| Paso | Detalle |')
w('|---|---|')
w('| Entorno | New_UI (dev1) en local con una organización **de demostración** (nunca datos de clientes reales) |')
w('| Usuarios | Una cuenta **Master**, una **Administrador** y una **Usuario** (para mostrar permisos) |')
w('| Datos de prueba | Contactos y conversaciones ficticias; teléfonos `+52 55 0000 xxxx`; correos `@ejemplo.com`; marcas genéricas |')
w('| Interruptores de organización | Activar para la sesión: **Auto-tagging**, **Copilot de cotización**, **Formularios de leads**, **Agentes de voz**, **Canal de correo**, **Odoo Sync**, **Plantillas de WhatsApp**, **Introducción guiada** |')
w('| Integraciones a tener conectadas | WhatsApp (2 números), Instagram, Messenger, Sitio web, Odoo (demo), Google Calendar (2 calendarios), Meta Ads/CAPI (sandbox) |')
w('| Navegador | Ventana de **1440 × 900**, zoom 100 %, sin extensiones visibles, sin barras de marcadores |')
w('| Tema | Tomar **claro** como principal. Repetir en **oscuro** solo las pantallas marcadas «🌓» |')
w('')

w('## 1. Reglas de captura\n')
w('- **Formato:** PNG, ancho 1440 px (se recorta a la zona útil; sin barra del navegador).')
w('- **Nombre de archivo:** `<seccion>-<pantalla>-<estado>.png`, minúsculas con guiones. Ej.: `canales-estado-conexion-whatsapp.png`.')
w('- **Carpeta:** `screenshots_peaking/v2/<NN-seccion>/` (las viejas no se borran hasta que el usuario haga QA).')
w('- **Privacidad:** ocultar correos del equipo, teléfonos y nombres reales; ningún token, clave de API ni ID de dataset visible. Si no se puede, difuminar el campo.')
w('- **Encuadre:** mostrar el menú lateral cuando ayude a ubicar la pantalla; si no, recortar. Resaltar con un óvalo naranja `#F05A28` solo lo que la página menciona.')
w('- **Estados:** cuando la página describa un estado (conectado / no conectado, activo / pausado), capturar **ambos**.')
w('- **Verificación:** al subir cada imagen, marcar la casilla de la tabla y borrar el marcador `[CAPTURA PENDIENTE: …]` de la página.')
w('')

w('## 2. Capturas NUEVAS (desde los marcadores de los borradores)\n')
w('| ✔ | ID | Página | Ruta en la app | Rol | Qué capturar |')
w('|---|---|---|---|---|---|')
for i, (pag, ruta, rol, desc) in enumerate(nuevas, 1):
    w(f'| ☐ | N{i:02d} | `{pag}` | {ruta} | {rol} | {desc} |')
w('')
w('> Una captura por página es el mínimo. Donde la página describe **varios estados o pestañas** (Canales, Editor de prompts, Mensajes, Correo), se toman capturas adicionales; se listan en la sección 4.\n')

w('## 3. Capturas VIEJAS por actualizar (UI anterior)\n')
w('Cada imagen de los artículos actuales muestra la interfaz **antes** del rediseño Fusión. Hay que **rehacerlas todas**; la tabla indica el artículo y qué imagen sustituir.\n')
w('| ✔ | Artículo actual | Imagen vieja | Descripción (alt) |')
w('|---|---|---|---|')
for art, lst in viejas.items():
    for alt, nombre in lst:
        w(f'| ☐ | `{art}` | `{nombre}` | {alt or "—"} |')
w('')

w('## 4. Capturas adicionales recomendadas (estados y pestañas)\n')
extra = [
    ('Canales', 'Fila de WhatsApp con insignias de calidad y límite; fila de Instagram con «N días restantes»; fila con «Token expirado – Reconectar»; bloque de coexistencia con «Sincronizar historial»'),
    ('Canales', 'Diálogo «Personaliza tu Widget de Chat» con vista previa y los dos fragmentos de código'),
    ('Canales › Correo', 'Estado conectado con «¿Quién más puede ver y responder este buzón?» y diálogo «Conectar correo por IMAP»'),
    ('Herramientas', 'Guía de Odoo con los 4 datos; formulario «Conectar Odoo»; edición con los interruptores de sincronización y «Campos del contacto en Odoo»'),
    ('Estudio de Prompts', 'Una captura por pestaña del editor: General, Instrucciones (con Flujo), Ejemplos, Canales y herramientas; panel «Para publicar»; Ver Markdown'),
    ('Estudio de Prompts', 'Constructor de Prompts con IA, buscador de plantillas, Mejorar con IA'),
    ('Instrucciones del agente', 'Cinco recortes de campos «cuándo»: herramienta, documento del prompt, adjunto, «Cuándo aplicar», criterio de escalación'),
    ('Base de Conocimientos', 'Pestañas Documentos, Adjuntos y Fichas técnicas; diálogo «Agregar adjunto»; barra de selección en lote; papelera'),
    ('Mensajes', 'Lista con filtros rápidos y panel Filtros abierto; encabezado con Tomar / Devolver a IA; aviso de agente silenciado; Nueva conversación con plantilla'),
    ('Etiquetas', 'Ventana completa con Auto-tagging y la sección Enviar conversión a Meta'),
    ('Correo', 'Borrador de la IA pendiente de aprobación; diálogos Firmas y Estilo de respuestas'),
    ('Copilot', 'Panel completo con carrito y total; estado «Cotización creada» con botones de envío; opciones de soltar el control'),
    ('Meta Ads / CAPI', 'Tarjetas conectadas; lista de «Datasets vinculados»; evento de prueba enviado'),
]
w('| ✔ | Sección | Qué capturar |')
w('|---|---|---|')
for s, d in extra:
    w(f'| ☐ | {s} | {d} |')
w('')

w('## 5. Orden de la sesión (para no cambiar datos a cada rato)\n')
w('1. **Configuración** (Master): Organización → Sucursales → Equipo → Turnos → Mi perfil → Asignación → Org. interna → Extracción → Campos CRM → Módulos → Plan → Seguridad.')
w('2. **Canales e Integraciones**: Integraciones (filtros y estados) → Canales → Herramientas → Meta → resto de integraciones.')
w('3. **Agente de IA**: Estudio de Prompts → Instrucciones del agente → Workflows.')
w('4. **Base de Conocimientos** (adjuntos y fichas con archivos de ejemplo).')
w('5. **Mensajes, Correo, Etiquetas y Copilot** (dejar conversaciones de ejemplo ya preparadas).')
w('6. **CRM, Contactos, Tareas, Campañas, Productos, Insights** (cuando sus borradores estén escritos).')
w('7. **Tema oscuro**: solo pantallas marcadas «🌓».')
w('8. **Rol Usuario**: capturar el aviso de permisos de Estudio de Prompts y la ausencia de menús de Configuración.')
w('')

w('## 5b. Páginas que aún faltan por redactar (sus capturas se agregarán al regenerar)\n')
w('Soporte y Soluciones · Novedades de octubre. **Time Blocks no se documenta ni se captura.**')
w('')

w('## 6. Al terminar\n')
w('- Reemplazar marcadores `[CAPTURA PENDIENTE]` por `![alt](ruta)` en cada borrador.')
w('- Mantener `screenshots_peaking/` viejo hasta que el usuario haga QA.')
w('- Volver a correr este script: la sección 2 debe quedar vacía.')
w('')

open('PLAN-CAPTURAS-V2.md', 'w', encoding='utf-8', newline='\n').write('\n'.join(out))
print(f'OK: {len(nuevas)} nuevas, {sum(len(v) for v in viejas.values())} viejas, {len(viejas)} artículos')
