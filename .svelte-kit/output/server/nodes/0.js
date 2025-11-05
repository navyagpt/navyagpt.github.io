import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.549fb957.js","_app/immutable/chunks/index.116c98fe.js","_app/immutable/chunks/index.79ee50c6.js","_app/immutable/chunks/stores.ed66d988.js","_app/immutable/chunks/singletons.583b00f1.js"];
export const stylesheets = ["_app/immutable/assets/0.ea9d7650.css"];
export const fonts = ["_app/immutable/assets/newsreader-vietnamese-400-italic.15c2d816.woff2","_app/immutable/assets/newsreader-all-400-italic.b234bc8e.woff","_app/immutable/assets/newsreader-latin-ext-400-italic.5bf368d2.woff2","_app/immutable/assets/newsreader-latin-400-italic.c935023f.woff2"];
