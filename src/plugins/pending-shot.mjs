// Rehype plugin: turns a standalone paragraph "[CAPTURA PENDIENTE: descripción]"
// into a visible placeholder box (<div class="pending-shot">), so draft pages
// show clearly where a real screenshot still has to go.
// In production builds (what gets published) the marker is REMOVED, so the
// placeholders are only visible in local development (`astro dev`).
const IS_PRODUCTION = !process.argv.includes('dev');

const MARKER = /^\[\s*CAPTURA PENDIENTE\s*:\s*([\s\S]*?)\s*\]$/i;

function textOf(node) {
	if (node.type === 'text') return node.value;
	return (node.children ?? []).map(textOf).join('');
}

function transform(node) {
	if (!node.children) return;
	for (let i = 0; i < node.children.length; i++) {
		const child = node.children[i];
		if (IS_PRODUCTION && (child.type === 'comment' || (child.type === 'raw' && /^\s*<!--/.test(child.value ?? '')))) {
			// Notas internas (<!-- VERIFICAR … -->): solo visibles en local
			node.children.splice(i, 1);
			i--;
			continue;
		}
		if (child.type === 'element' && child.tagName === 'p') {
			const match = textOf(child).trim().match(MARKER);
			if (match) {
				if (IS_PRODUCTION) {
					node.children.splice(i, 1);
					i--;
					continue;
				}
				child.tagName = 'div';
				child.properties = { className: ['pending-shot'] };
				child.children = [
					{
						type: 'element',
						tagName: 'span',
						properties: { className: ['pending-shot__label'] },
						children: [{ type: 'text', value: 'Captura pendiente' }],
					},
					{
						type: 'element',
						tagName: 'span',
						properties: { className: ['pending-shot__text'] },
						children: [{ type: 'text', value: match[1] }],
					},
				];
				continue;
			}
		}
		transform(child);
	}
}

export default function rehypePendingShot() {
	return (tree) => transform(tree);
}
