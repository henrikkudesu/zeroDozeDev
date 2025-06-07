import '@astrojs/internal-helpers/path';
import 'kleur/colors';
import { p as NOOP_MIDDLEWARE_HEADER, q as decodeKey } from './chunks/astro/server_C4REhOhB.mjs';
import 'clsx';
import 'cookie';
import 'es-module-lexer';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from IANA HTTP Status Code Registry
  // https://www.iana.org/assignments/http-status-codes/http-status-codes.xhtml
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  PAYMENT_REQUIRED: 402,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  NOT_ACCEPTABLE: 406,
  PROXY_AUTHENTICATION_REQUIRED: 407,
  REQUEST_TIMEOUT: 408,
  CONFLICT: 409,
  GONE: 410,
  LENGTH_REQUIRED: 411,
  PRECONDITION_FAILED: 412,
  CONTENT_TOO_LARGE: 413,
  URI_TOO_LONG: 414,
  UNSUPPORTED_MEDIA_TYPE: 415,
  RANGE_NOT_SATISFIABLE: 416,
  EXPECTATION_FAILED: 417,
  MISDIRECTED_REQUEST: 421,
  UNPROCESSABLE_CONTENT: 422,
  LOCKED: 423,
  FAILED_DEPENDENCY: 424,
  TOO_EARLY: 425,
  UPGRADE_REQUIRED: 426,
  PRECONDITION_REQUIRED: 428,
  TOO_MANY_REQUESTS: 429,
  REQUEST_HEADER_FIELDS_TOO_LARGE: 431,
  UNAVAILABLE_FOR_LEGAL_REASONS: 451,
  INTERNAL_SERVER_ERROR: 500,
  NOT_IMPLEMENTED: 501,
  BAD_GATEWAY: 502,
  SERVICE_UNAVAILABLE: 503,
  GATEWAY_TIMEOUT: 504,
  HTTP_VERSION_NOT_SUPPORTED: 505,
  VARIANT_ALSO_NEGOTIATES: 506,
  INSUFFICIENT_STORAGE: 507,
  LOOP_DETECTED: 508,
  NETWORK_AUTHENTICATION_REQUIRED: 511
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/workspaces/zeroDozeDev/","cacheDir":"file:///C:/workspaces/zeroDozeDev/node_modules/.astro/","outDir":"file:///C:/workspaces/zeroDozeDev/dist/","srcDir":"file:///C:/workspaces/zeroDozeDev/src/","publicDir":"file:///C:/workspaces/zeroDozeDev/public/","buildClientDir":"file:///C:/workspaces/zeroDozeDev/dist/","buildServerDir":"file:///C:/workspaces/zeroDozeDev/.netlify/build/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Bl4bog--.css"},{"type":"inline","content":"html{scrollbar-gutter:stable}header[data-astro-cid-3ef6ksr2]{transform:translateZ(0);backface-visibility:hidden;perspective:1000px}.nav-link[data-astro-cid-3ef6ksr2],.mobile-link[data-astro-cid-3ef6ksr2]{position:relative;color:#cbd5e1;transition:color .2s}.nav-link[data-astro-cid-3ef6ksr2]:hover,.mobile-link[data-astro-cid-3ef6ksr2]:hover{color:#fff}.nav-link[data-astro-cid-3ef6ksr2]:after{content:\"\";position:absolute;width:0;height:2px;bottom:-2px;left:0;background:#3b82f6;transition:width .3s}.nav-link[data-astro-cid-3ef6ksr2]:hover:after{width:100%}.btn-cta[data-astro-cid-3ef6ksr2]{display:inline-flex;align-items:center;padding:.625rem 1.25rem;background:linear-gradient(to right,#3b82f6,#a855f7);color:#fff;border-radius:.5rem;position:relative;overflow:hidden}.btn-cta[data-astro-cid-3ef6ksr2]:hover{box-shadow:0 0 15px #3b82f680}.btn-cta[data-astro-cid-3ef6ksr2]:before{content:\"\";position:absolute;top:0;left:100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);transition:.3s}#mobile-menu[data-astro-cid-3ef6ksr2]{transition:opacity .1s ease,visibility .1s ease;height:0;overflow:hidden}#mobile-menu[data-astro-cid-3ef6ksr2]:not(.hidden){opacity:1;visibility:visible;height:auto}@media (prefers-reduced-motion: reduce){a[data-astro-cid-sz7xmlte]{transition:none!important}}\n.animate-fadeIn[data-astro-cid-kh7btl4r]{will-change:opacity;animation:fadeIn 1s ease-out forwards}.animate-fadeInLeft[data-astro-cid-kh7btl4r]{animation:fadeInLeft 1s ease-out forwards}.animate-fadeInRight[data-astro-cid-kh7btl4r]{animation:fadeInRight 1s ease-out forwards}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}@keyframes fadeInLeft{0%{opacity:0;transform:translate(-20px)}to{opacity:1;transform:translate(0)}}@keyframes fadeInRight{0%{opacity:0;transform:translate(20px)}to{opacity:1;transform:translate(0)}}@media (prefers-reduced-motion: reduce){.animate-fadeIn[data-astro-cid-kh7btl4r],.animate-fadeInLeft[data-astro-cid-kh7btl4r],.animate-fadeInRight[data-astro-cid-kh7btl4r]{animation:none;opacity:1;transform:none}}.tech-badge[data-astro-cid-kh7btl4r]{display:flex;align-items:center;justify-content:center;background:#0f172ab3;border-radius:6px;padding:6px;width:32px;height:32px;border:1px solid rgba(148,163,184,.2);transition:all .3s ease}.tech-badge[data-astro-cid-kh7btl4r]:hover{transform:translateY(-2px);border-color:#3b82f666;box-shadow:0 2px 8px #3b82f64d}.tech-badge[data-astro-cid-kh7btl4r] img[data-astro-cid-kh7btl4r]{max-width:100%;max-height:100%;object-fit:contain}.tech-badge-large[data-astro-cid-kh7btl4r]{display:flex;align-items:center;justify-content:center;background:#0f172ab3;border-radius:6px;padding:6px;width:40px;height:40px;border:1px solid rgba(148,163,184,.2);transition:all .3s ease}.tech-badge-large[data-astro-cid-kh7btl4r]:hover{transform:translateY(-2px);border-color:#3b82f666;box-shadow:0 2px 8px #3b82f64d}.tech-badge-large[data-astro-cid-kh7btl4r] img[data-astro-cid-kh7btl4r]{max-width:100%;max-height:100%;object-fit:contain}\n"}],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Bl4bog--.css"}],"routeData":{"route":"/success","isIndex":false,"type":"page","pattern":"^\\/success\\/?$","segments":[[{"content":"success","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/success.astro","pathname":"/success","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/about.Bl4bog--.css"},{"type":"inline","content":"html{scrollbar-gutter:stable}header[data-astro-cid-3ef6ksr2]{transform:translateZ(0);backface-visibility:hidden;perspective:1000px}.nav-link[data-astro-cid-3ef6ksr2],.mobile-link[data-astro-cid-3ef6ksr2]{position:relative;color:#cbd5e1;transition:color .2s}.nav-link[data-astro-cid-3ef6ksr2]:hover,.mobile-link[data-astro-cid-3ef6ksr2]:hover{color:#fff}.nav-link[data-astro-cid-3ef6ksr2]:after{content:\"\";position:absolute;width:0;height:2px;bottom:-2px;left:0;background:#3b82f6;transition:width .3s}.nav-link[data-astro-cid-3ef6ksr2]:hover:after{width:100%}.btn-cta[data-astro-cid-3ef6ksr2]{display:inline-flex;align-items:center;padding:.625rem 1.25rem;background:linear-gradient(to right,#3b82f6,#a855f7);color:#fff;border-radius:.5rem;position:relative;overflow:hidden}.btn-cta[data-astro-cid-3ef6ksr2]:hover{box-shadow:0 0 15px #3b82f680}.btn-cta[data-astro-cid-3ef6ksr2]:before{content:\"\";position:absolute;top:0;left:100%;width:100%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);transition:.3s}#mobile-menu[data-astro-cid-3ef6ksr2]{transition:opacity .1s ease,visibility .1s ease;height:0;overflow:hidden}#mobile-menu[data-astro-cid-3ef6ksr2]:not(.hidden){opacity:1;visibility:visible;height:auto}@media (prefers-reduced-motion: reduce){a[data-astro-cid-sz7xmlte]{transition:none!important}}\n"},{"type":"external","src":"/_astro/index.DCE93yTx.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"http://www.zerodozedev.com.br","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/workspaces/zeroDozeDev/src/pages/about.astro",{"propagation":"none","containsHead":true}],["C:/workspaces/zeroDozeDev/src/pages/index.astro",{"propagation":"none","containsHead":true}],["C:/workspaces/zeroDozeDev/src/pages/success.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/success@_@astro":"pages/success.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BM-m9kBZ.mjs","C:/workspaces/zeroDozeDev/node_modules/unstorage/drivers/fs-lite.mjs":"chunks/fs-lite_COtHaKzy.mjs","C:/workspaces/zeroDozeDev/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Sto8vxy-.mjs","C:/workspaces/zeroDozeDev/src/components/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.r0hamZVH.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/workspaces/zeroDozeDev/src/components/Header.astro?astro&type=script&index=0&lang.ts","class t{btn;menu;iconMenu;iconClose;isOpen=!1;constructor(){this.btn=document.getElementById(\"mobile-menu-toggle\"),this.menu=document.getElementById(\"mobile-menu\"),this.iconMenu=document.getElementById(\"icon-menu\"),this.iconClose=document.getElementById(\"icon-close\"),this.init()}init(){this.btn.addEventListener(\"click\",()=>this.toggleMenu()),document.addEventListener(\"click\",e=>{!this.menu.contains(e.target)&&!this.btn.contains(e.target)&&this.isOpen&&this.toggleMenu()}),document.addEventListener(\"keydown\",e=>{e.key===\"Escape\"&&this.isOpen&&this.toggleMenu()})}toggleMenu(){this.isOpen=!this.isOpen,this.isOpen&&this.menu.classList.remove(\"hidden\"),this.menu.classList.toggle(\"opacity-0\",!this.isOpen),this.menu.classList.toggle(\"visibility-hidden\",!this.isOpen),this.iconMenu.classList.toggle(\"hidden\",this.isOpen),this.iconClose.classList.toggle(\"hidden\",!this.isOpen),this.btn.setAttribute(\"aria-expanded\",String(this.isOpen)),this.isOpen||setTimeout(()=>{this.menu.classList.add(\"hidden\")},75)}}document.addEventListener(\"DOMContentLoaded\",()=>{new t});\n//# sourceMappingURL=Header.astro_astro_type_script_index_0_lang.r0hamZVH.js.map"]],"assets":["/_astro/guaratingueta.f2m_0pIo.png","/_astro/social-image-2.BtsfO4bS.png","/_astro/social-image.B7XWfyqr.svg","/_astro/about.CnPts7GR.png","/_astro/about.Bl4bog--.css","/_astro/index.DCE93yTx.css","/chunks/astro_S93rIghj.mjs.map","/chunks/astro/server_C4REhOhB.mjs.map","/chunks/constants_DKkiqYpF.mjs.map","/chunks/Layout_DGdp6ioq.mjs.map","/chunks/_astro_assets_B28Bv3RN.mjs.map","/manifest_BM-m9kBZ.mjs.map","/chunks/_@astrojs-ssr-adapter_CvSoi7hX.mjs.map","/chunks/fs-lite_COtHaKzy.mjs.map","/chunks/sharp_Sto8vxy-.mjs.map","/_noop-middleware.mjs.map","/_noop-actions.mjs.map","/pages/_image.astro.mjs.map","/pages/about.astro.mjs.map","/pages/success.astro.mjs.map","/pages/index.astro.mjs.map","/entry.mjs.map","/renderers.mjs.map","/_@astrojs-ssr-adapter.mjs.map","/android-chrome-192x192.png","/android-chrome-512x512.png","/apple-touch-icon.png","/favicon-16x16.png","/favicon-32x32.png","/favicon.ico","/site.webmanifest","/social-image.png","/assets/about-team.avif","/assets/about.png","/assets/hero-image.avif","/icons/openai.svg","/_astro/Header.astro_astro_type_script_index_0_lang.r0hamZVH.js.map","/_astro/fonts/08c48c613829e8c1.woff2","/_astro/fonts/861f09284467ff7f.woff2","/_astro/fonts/b3f334bd20bda4f4.woff2","/_astro/fonts/ca7503524a94c939.woff2","/_astro/fonts/eac7daee91369e65.woff2","/_astro/fonts/f2d5b98f5db27057.woff2"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"2lLrpA333gpIFUH761YW3/H7xQ9wSh2TyOs7Ht3UedU=","sessionConfig":{"driver":"fs-lite","options":{"base":"C:\\workspaces\\zeroDozeDev\\node_modules\\.astro\\sessions"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/fs-lite_COtHaKzy.mjs');

export { manifest };
//# sourceMappingURL=manifest_BM-m9kBZ.mjs.map
