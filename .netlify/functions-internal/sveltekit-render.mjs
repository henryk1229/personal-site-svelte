import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","hk-icon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.f89cb48e.js","app":"_app/immutable/entry/app.c0eb1884.js","imports":["_app/immutable/entry/start.f89cb48e.js","_app/immutable/chunks/scheduler.89b69e6b.js","_app/immutable/chunks/singletons.91e20de8.js","_app/immutable/entry/app.c0eb1884.js","_app/immutable/chunks/scheduler.89b69e6b.js","_app/immutable/chunks/index.86b91312.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			},
			{
				id: "/wordsalad",
				pattern: /^\/wordsalad\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
