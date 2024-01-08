

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.0752bbff.js","_app/immutable/chunks/scheduler.89b69e6b.js","_app/immutable/chunks/index.86b91312.js","_app/immutable/chunks/singletons.9bd0936b.js"];
export const stylesheets = [];
export const fonts = [];
