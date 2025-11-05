export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([".nojekyll","CNAME","assets/images/hudson-landscape.jpg","assets/images/prof.jpeg","assets/images/profile.jpg","assets/images/profile2.jpg","assets/images/profile3.jpg","assets/images/profile4.jpg","assets/pdf/Browser_Fingerprinting.pdf","assets/pdf/CS_228_Notes.pdf","assets/pdf/CS_252r_Notes.pdf","assets/pdf/CS_252r_Notes_PL_Studio.pdf","assets/pdf/CV.pdf","assets/pdf/Compression_Based_Generalization_Bounds.pdf","assets/pdf/DeepCoder.pdf","assets/pdf/Generative_Music_Modeling.pdf","assets/pdf/Hydroelastics.pdf","assets/pdf/Jax_Parallelism.pdf","assets/pdf/Learning_Space_Cryptography.pdf","assets/pdf/Lorenz_System_Bifurcations.pdf","assets/pdf/Math_132_Notes.pdf","assets/pdf/Math_55a_Notes.pdf","assets/pdf/Math_55b_Notes.pdf","assets/pdf/Senior_Thesis.pdf","assets/pdf/Single_Bidder_Multi_Item_Auctions.pdf","assets/pdf/Stat_210_Notes.pdf","assets/pdf/Stat_211_Notes.pdf","favicon.svg"]),
	mimeTypes: {".jpg":"image/jpeg",".jpeg":"image/jpeg",".pdf":"application/pdf",".svg":"image/svg+xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.da540c9a.js","app":"_app/immutable/entry/app.7351605f.js","imports":["_app/immutable/entry/start.da540c9a.js","_app/immutable/chunks/index.116c98fe.js","_app/immutable/chunks/singletons.583b00f1.js","_app/immutable/entry/app.7351605f.js","_app/immutable/chunks/index.116c98fe.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
