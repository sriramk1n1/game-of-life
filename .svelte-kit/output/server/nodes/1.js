

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.199a5642.js","_app/immutable/chunks/scheduler.9fa682d6.js","_app/immutable/chunks/index.42ddef74.js","_app/immutable/chunks/singletons.85db7d1d.js"];
export const stylesheets = [];
export const fonts = [];
