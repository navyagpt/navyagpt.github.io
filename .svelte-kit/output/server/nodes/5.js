

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/writing/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.5b824571.js","_app/immutable/chunks/index.116c98fe.js","_app/immutable/chunks/Seo.d2354f56.js","_app/immutable/chunks/Icon.6c8db450.js","_app/immutable/chunks/utils.c7248e99.js"];
export const stylesheets = [];
export const fonts = [];
