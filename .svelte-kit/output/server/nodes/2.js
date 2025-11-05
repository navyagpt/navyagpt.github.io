

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.6a31c179.js","_app/immutable/chunks/index.116c98fe.js","_app/immutable/chunks/Seo.d2354f56.js"];
export const stylesheets = ["_app/immutable/assets/2.5dbfbb36.css"];
export const fonts = [];
