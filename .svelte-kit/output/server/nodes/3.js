

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.f833b42a.js","_app/immutable/chunks/index.116c98fe.js","_app/immutable/chunks/stores.ed66d988.js","_app/immutable/chunks/singletons.583b00f1.js","_app/immutable/chunks/Icon.6c8db450.js","_app/immutable/chunks/Seo.d2354f56.js","_app/immutable/chunks/utils.c7248e99.js"];
export const stylesheets = ["_app/immutable/assets/3.ae31a64c.css"];
export const fonts = [];
