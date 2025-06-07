import { c as createAstro, a as createComponent, b as renderTemplate, f as renderSlot, g as renderHead, d as addAttribute, r as renderComponent } from './astro/server_C4REhOhB.mjs';
import 'kleur/colors';
/* empty css                         */
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { a as $$Font } from './_astro_assets_B28Bv3RN.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("http://www.zerodozedev.com.br");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const {
    title = "zeroDoze Dev",
    description = "Site sobre desenvolvimento de software, tecnologia e programa\xE7\xE3o",
    image = "/social-image.webp",
    canonicalURL = Astro2.url.href
  } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="pt-BR" data-astro-cid-sckkx6r4> <head><!-- Carrega a fonte Fira Code como vari\xE1vel CSS -->', '<!-- Meta tags b\xE1sicas --><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><meta name="generator"', '><!-- Configura\xE7\xE3o de favicons para diferentes dispositivos --><link rel="icon" href="/favicon.ico" sizes="any"><link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"><link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"><link rel="manifest" href="/site.webmanifest"><!-- Meta tags para SEO --><title>', '</title><meta name="title"', '><meta name="description"', '><link rel="canonical"', '><!-- Meta tags para compartilhamento no Facebook --><meta property="og:type" content="website"><meta property="og:url"', '><meta property="og:title"', '><meta property="og:description"', '><meta property="og:image"', '><!-- Meta tags para compartilhamento no Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"', '><meta property="twitter:title"', '><meta property="twitter:description"', '><meta property="twitter:image"', '><!-- Meta tags adicionais --><meta name="robots" content="index,follow"><meta name="author" content="zeroDoze Dev">', "</head> <body data-astro-cid-sckkx6r4> <!-- Slot para inserir o conte\xFAdo da p\xE1gina --> ", ' <!-- Script principal do site --> <script src="/src/scripts/main.ts" type="module"><\/script> </body> </html> '])), renderComponent($$result, "Font", $$Font, { "cssVariable": "--font-fira-code", "preload": true, "data-astro-cid-sckkx6r4": true }), addAttribute(Astro2.generator, "content"), title, addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(canonicalURL, "href"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image, "content"), addAttribute(canonicalURL, "content"), addAttribute(title, "content"), addAttribute(description, "content"), addAttribute(image, "content"), renderHead(), renderSlot($$result, $$slots["default"]));
}, "C:/workspaces/zeroDozeDev/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
//# sourceMappingURL=Layout_DGdp6ioq.mjs.map
