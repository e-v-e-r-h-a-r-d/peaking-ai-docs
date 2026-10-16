// Rehype plugin: turns a standalone paragraph "[CAPTURA PENDIENTE: descripción]"
// into a visible placeholder box (<div class="pending-shot">), so draft pages
// show clearly where a real screenshot still has to go.
// Published articles don't contain this marker, so it is a no-op there.

const MARKER = /^\[\s*CAPTURA PENDIENTE\s*:\s*([\s\S]*?)\s*\]$/i;

function textOf(node) {
	if (node.type === 'text') return node.value;
	return (node.children ?? []).map(textOf).join('');
}

function transform(node) {
	if (!node.children) return;
	for (const child of node.children) {
		if (child.type === 'element' && child.tagName === 'p') {
			const match = textOf(child).trim().match(MARKER);
			if (match) {
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
