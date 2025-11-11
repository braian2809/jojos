
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://braian2809.github.io/jojos/',
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
    'index.csr.html': {size: 930, hash: '596c1d12cde5e3d3f4cbed6ae1d7ffa036cded8dba921f20c0a9a16dccbfb2be', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1204, hash: 'fd64cbe607cb63698939f251c877460d5e33feea2b4d6c423e81220ba9450734', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'nosotros/index.html': {size: 3869, hash: '8f21c7601751f1e94eec357771cb4f95d11396a3fe7eaaae8b3565cdb379469d', text: () => import('./assets-chunks/nosotros_index_html.mjs').then(m => m.default)},
    'index.html': {size: 3492, hash: '4b16b5baf7680e68ec48e28ba66364cb56e8f7ca73bbfcb4b70c1be724982df6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'productos/index.html': {size: 8560, hash: '8f1525d993ff1e85c9a978e01739634c63218c136d21399742f7d8b5ecc916a2', text: () => import('./assets-chunks/productos_index_html.mjs').then(m => m.default)},
    'contacto/index.html': {size: 4782, hash: 'eb7a18a6765a60013334d81b129da5350d37b76f1b3e97c14c17b80758c4fac2', text: () => import('./assets-chunks/contacto_index_html.mjs').then(m => m.default)},
    'styles-DM6ATT6S.css': {size: 129, hash: 'vtbPjCoCFFw', text: () => import('./assets-chunks/styles-DM6ATT6S_css.mjs').then(m => m.default)}
  },
};
