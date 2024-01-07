

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.32d07307.js","_app/immutable/chunks/scheduler.89b69e6b.js","_app/immutable/chunks/index.86b91312.js","_app/immutable/chunks/singletons.91e20de8.js"];
export const stylesheets = [];
export const fonts = [];
