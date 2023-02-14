export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","paper-texture.jpg","websites/azteca_tools/front.png","websites/caradebola/front.png","websites/cxp/front.jpg","websites/ecupay/front.png","websites/mascotas/front.png","websites/nook/front.png","websites/pif/front.png","websites/sholomitos/front.png","websites/stickycovers/front.png","yo.jpg"]),
	mimeTypes: {".png":"image/png",".jpg":"image/jpeg"},
	_: {
		entry: {"file":"_app/immutable/start-6c0eb178.js","imports":["_app/immutable/start-6c0eb178.js","_app/immutable/chunks/index-3b108106.js","_app/immutable/chunks/singletons-a240f036.js","_app/immutable/chunks/index-0c7f0314.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js'),
			() => import('../output/server/nodes/2.js')
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0], errors: [1], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
