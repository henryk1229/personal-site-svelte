

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.730b8e88.js","_app/immutable/chunks/scheduler.89b69e6b.js","_app/immutable/chunks/index.86b91312.js"];
export const stylesheets = ["_app/immutable/assets/2.f10cb430.css"];
export const fonts = [];
