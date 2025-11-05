

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ea8f5b31.js","_app/immutable/chunks/index.116c98fe.js","_app/immutable/chunks/stores.ed66d988.js","_app/immutable/chunks/singletons.583b00f1.js","_app/immutable/chunks/Icon.6c8db450.js"];
export const stylesheets = [];
export const fonts = [];
