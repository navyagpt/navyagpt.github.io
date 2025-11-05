

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/resume/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.90f52646.js","_app/immutable/chunks/index.116c98fe.js","_app/immutable/chunks/Seo.d2354f56.js","_app/immutable/chunks/index.79ee50c6.js"];
export const stylesheets = ["_app/immutable/assets/4.badbca58.css"];
export const fonts = [];
