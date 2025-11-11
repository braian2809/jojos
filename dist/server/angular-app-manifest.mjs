
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/jojos/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/jojos"
  },
  {
    "renderMode": 2,
    "route": "/jojos/nosotros"
  },
  {
    "renderMode": 2,
    "route": "/jojos/productos"
  },
  {
    "renderMode": 2,
    "route": "/jojos/contacto"
  },
  {
    "renderMode": 2,
    "redirectTo": "/jojos",
    "route": "/jojos/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 902, hash: 'ee27d108829efbe7349adc966d2f99da06aed1643a7cf3c5d615322dd9f6ca68', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1176, hash: '4177a67b52c9026b7d31f55e3b27894aed5a7308988fdd71c5a3c0e4da428cda', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 3352, hash: '7b267812383ba6e7380adf55f23ef567786684239658376852358a18efb7d13a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 8420, hash: 'ef240e05511e8184f9771d206a4d7dd0167c76d23df6ea600d2277c865ed6e51', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 3729, hash: '477c4666ee23f7f997d59d8c0125f6552138ddb49df5c4361d2e0b4fd9d2a1da', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 4642, hash: 'f4ca2732543f4f8e969f90493a371620624808e1f68dde0c3243d63364992cc0', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'styles-DM6ATT6S.css': {size: 129, hash: 'vtbPjCoCFFw', text: () => import('./assets-chunks/styles-DM6ATT6S_css.mjs').then(m => m.default)}
  },
};
