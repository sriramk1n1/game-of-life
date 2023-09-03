import * as universal from '../entries/pages/_page.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+page.js";
export const imports = ["_app/immutable/nodes/2.7a2f6c9a.js","_app/immutable/chunks/scheduler.9fa682d6.js","_app/immutable/chunks/index.42ddef74.js"];
export const stylesheets = ["_app/immutable/assets/2.5f8df99b.css"];
export const fonts = [];
