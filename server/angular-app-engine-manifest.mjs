
export default {
  basePath: 'https://braian2809.github.io/jojos',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
