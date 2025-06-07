import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_C4REhOhB.mjs';
import 'kleur/colors';
/* empty css                                 */
import { $ as $$Layout } from '../chunks/Layout_DGdp6ioq.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("http://www.zerodozedev.com.br");
const prerender = false;
const $$Success = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Success;
  const url = new URL(Astro2.request.url);
  const isFormSubmission = url.searchParams.get("submitted") === "true";
  if (!isFormSubmission) {
    return Astro2.redirect("/");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Mensagem Enviada - ZeroDoze" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="py-20 bg-[#0f172a] min-h-screen flex items-center justify-center"> <div class="container mx-auto px-6 text-center"> <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-8 font-fira-code">
Mensagem Enviada com Sucesso!
</h1> <p class="text-slate-400 text-lg mb-8 font-fira-code">
Obrigado pelo contato. Retornaremos em breve!
</p> <a href="/" class="inline-block px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 font-fira-code">
Voltar para a Página Inicial
</a> </div> </section> ` })}`;
}, "C:/workspaces/zeroDozeDev/src/pages/success.astro", void 0);

const $$file = "C:/workspaces/zeroDozeDev/src/pages/success.astro";
const $$url = "/success";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Success,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=success.astro.mjs.map
