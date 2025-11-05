

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.3535dd25.js","_app/immutable/chunks/index.116c98fe.js","_app/immutable/chunks/stores.6fddf5b2.js","_app/immutable/chunks/singletons.ac9c6a2e.js","_app/immutable/chunks/Icon.6c8db450.js"];
export const stylesheets = [];
export const fonts = [];
