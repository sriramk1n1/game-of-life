export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set([]),
	mimeTypes: {},
	_: {
		client: {"start":"_app/immutable/entry/start.5ed80920.js","app":"_app/immutable/entry/app.e1679bb5.js","imports":["_app/immutable/entry/start.5ed80920.js","_app/immutable/chunks/scheduler.9fa682d6.js","_app/immutable/chunks/singletons.85db7d1d.js","_app/immutable/entry/app.e1679bb5.js","_app/immutable/chunks/scheduler.9fa682d6.js","_app/immutable/chunks/index.42ddef74.js"],"stylesheets":[],"fonts":[]},
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
