

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.2bda41ed.js","_app/immutable/chunks/scheduler.9fa682d6.js","_app/immutable/chunks/index.42ddef74.js"];
export const stylesheets = [];
export const fonts = [];
