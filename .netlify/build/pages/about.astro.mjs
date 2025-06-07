import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_C4REhOhB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DGdp6ioq.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../chunks/_astro_assets_B28Bv3RN.mjs';
import { T as TECHNOLOGIES, $ as $$Header, h as heroImage, a as $$Footer } from '../chunks/constants_DKkiqYpF.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const cityImage = new Proxy({"src":"/_astro/guaratingueta.f2m_0pIo.png","width":874,"height":576,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/workspaces/zeroDozeDev/src/assets/guaratingueta.png";
							}
							
							return target[name];
						}
					});

const $$Astro = createAstro("http://www.zerodozedev.com.br");
const $$About = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$About;
  const webTechs = TECHNOLOGIES.filter(
    (tech) => ["Astro", "React", "Wordpress", "Tailwind CSS"].includes(tech.name)
  );
  const ecommerceTechs = TECHNOLOGIES.filter(
    (tech) => ["React", "Python", "Flask", "Node.js"].includes(tech.name)
  );
  const automationTechs = TECHNOLOGIES.filter(
    (tech) => [
      "PostgreSQL + Supabase",
      "IA",
      "Python",
      "TypeScript",
      "JavaScript"
    ].includes(tech.name)
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Sobre N\xF3s | zeroDozeDev", "data-astro-cid-kh7btl4r": true }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "currentPage": "about", "data-astro-cid-kh7btl4r": true })} ${maybeRenderHead()}<main class="pt-24 bg-[#0f172a]" data-astro-cid-kh7btl4r> <!-- Hero Section --> <section class="py-20" data-astro-cid-kh7btl4r> <div class="container mx-auto px-6 text-center" data-astro-cid-kh7btl4r> <span class="text-sm font-semibold tracking-wider uppercase text-blue-400 animate-fadeIn" data-astro-cid-kh7btl4r>
Nossa História
</span> <h1 class="mt-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white animate-fadeIn" data-astro-cid-kh7btl4r>
Sobre a <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500" data-astro-cid-kh7btl4r>zeroDozeDev</span> </h1> </div> </section> <!-- Founder Section --> <section class="py-16 bg-slate-900/50" data-astro-cid-kh7btl4r> <div class="container mx-auto px-6" data-astro-cid-kh7btl4r> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" data-astro-cid-kh7btl4r> <!-- Imagem do Fundador --> <div class="relative group animate-fadeInLeft order-2 lg:order-1" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Image", $$Image, { "src": cityImage, "alt": "Guaratinguet\xE1 - SP, cidade natal da zeroDozeDev", "width": 500, "height": 500, "class": "w-full h-[400px] rounded-xl shadow-2xl border border-slate-700 object-cover transition-transform duration-500 group-hover:scale-105", "format": "webp", "loading": "lazy", "data-astro-cid-kh7btl4r": true })} <!-- Elementos decorativos --> <div class="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl" aria-hidden="true" data-astro-cid-kh7btl4r></div> <div class="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl" aria-hidden="true" data-astro-cid-kh7btl4r></div> </div> <!-- Texto do Fundador --> <div class="lg:order-2 order-1 animate-fadeInRight" data-astro-cid-kh7btl4r> <span class="text-sm font-semibold tracking-wider uppercase text-blue-400" data-astro-cid-kh7btl4r>Fundador</span> <h2 class="mt-4 text-3xl md:text-4xl font-bold text-white" data-astro-cid-kh7btl4r>
Leonardo Henrique
</h2> <div class="mt-6 space-y-4 text-lg text-slate-400" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
A <strong class="text-blue-300" data-astro-cid-kh7btl4r>zeroDozeDev</strong> nasceu da minha
                paixão pela programação, que começou como um hobby e evoluiu para
                uma missão: democratizar o acesso ao desenvolvimento digital para
                pequenas empresas e microempreendedores.
</p> <p data-astro-cid-kh7btl4r>
Nascido e criado em Guaratinguetá-SP, sempre observei a
                dificuldade em encontrar soluções digitais acessíveis na minha
                região. Enquanto as empresas existentes cobram valores elevados,
                meu foco é oferecer qualidade a preços justos.
</p> </div> </div> </div> </div> </section> <!-- Nossa Missão Section --> <section class="py-16" data-astro-cid-kh7btl4r> <div class="container mx-auto px-6" data-astro-cid-kh7btl4r> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center" data-astro-cid-kh7btl4r> <!-- Texto da Missão --> <div class="animate-fadeInLeft" data-astro-cid-kh7btl4r> <span class="text-sm font-semibold tracking-wider uppercase text-blue-400" data-astro-cid-kh7btl4r>Nossa Missão</span> <h2 class="mt-4 text-3xl md:text-4xl font-bold text-white" data-astro-cid-kh7btl4r>
Desenvolvimento <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500" data-astro-cid-kh7btl4r>Acessível</span> </h2> <div class="mt-6 space-y-4 text-lg text-slate-400" data-astro-cid-kh7btl4r> <p data-astro-cid-kh7btl4r>
Muitos empreendedores simplesmente desejam se destacar no
                ambiente digital – seja para serem encontrados ou para
                apresentar seus produtos e serviços de maneira profissional.
</p> <p data-astro-cid-kh7btl4r>
Meu objetivo é oferecer soluções digitais de qualidade,
                eliminando as barreiras financeiras e possibilitando que
                pequenos negócios tenham presença online robusta e eficiente.
</p> </div> <!-- Cards de Valores --> <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8" data-astro-cid-kh7btl4r> <div class="p-5 bg-slate-800/40 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300" data-astro-cid-kh7btl4r> <h3 class="text-xl font-semibold text-white mb-2" data-astro-cid-kh7btl4r>
Transparência
</h3> <p class="text-slate-400 text-sm" data-astro-cid-kh7btl4r>
Orçamentos claros e comunicação direta durante todo o
                  processo.
</p> </div> <div class="p-5 bg-slate-800/40 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300" data-astro-cid-kh7btl4r> <h3 class="text-xl font-semibold text-white mb-2" data-astro-cid-kh7btl4r>Qualidade</h3> <p class="text-slate-400 text-sm" data-astro-cid-kh7btl4r>
Soluções bem construídas e otimizadas para crescimento do seu
                  negócio.
</p> </div> </div> </div> <!-- Imagem da Cidade --> <div class="relative group animate-fadeInRight" data-astro-cid-kh7btl4r> ${renderComponent($$result2, "Image", $$Image, { "src": heroImage, "alt": "Leonardo Henrique, fundador da zeroDozeDev", "width": 500, "height": 500, "class": "w-full h-[400px] rounded-xl shadow-2xl border border-slate-700 object-cover transition-transform duration-500 group-hover:scale-105", "format": "webp", "loading": "eager", "data-astro-cid-kh7btl4r": true })} <div class="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl" aria-hidden="true" data-astro-cid-kh7btl4r></div> </div> </div> </div> </section> <!-- Serviços Overview --> <section class="py-16 bg-slate-900/50" data-astro-cid-kh7btl4r> <div class="container mx-auto px-6" data-astro-cid-kh7btl4r> <div class="text-center mb-12" data-astro-cid-kh7btl4r> <span class="text-sm font-semibold tracking-wider uppercase text-blue-400" data-astro-cid-kh7btl4r>Como Posso Ajudar</span> <h2 class="mt-4 text-3xl md:text-4xl font-bold text-white" data-astro-cid-kh7btl4r>
Soluções Para Seu <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500" data-astro-cid-kh7btl4r>Negócio</span> </h2> </div> <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12" data-astro-cid-kh7btl4r> <!-- Card de Presença Online --> <div class="p-4 bg-slate-800/40 rounded-xl border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 text-center flex flex-col h-full" data-astro-cid-kh7btl4r> <div class="w-20 h-20 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center mb-4 transform hover:scale-110 transition-transform" data-astro-cid-kh7btl4r> <i class="fas fa-globe text-4xl text-blue-400" data-astro-cid-kh7btl4r> <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-blue-400" data-astro-cid-kh7btl4r> <circle cx="12" cy="12" r="10" data-astro-cid-kh7btl4r></circle> <line x1="2" y1="12" x2="22" y2="12" data-astro-cid-kh7btl4r></line> <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" data-astro-cid-kh7btl4r></path> </svg> </i> </div> <h3 class="text-xl font-bold text-white mb-2" data-astro-cid-kh7btl4r>Presença Online</h3> <p class="text-slate-400 mb-2 flex-grow text-sm" data-astro-cid-kh7btl4r>
Sites institucionais, landing pages e portfólios para apresentar
              seu negócio na web.
</p> <!-- Tech Icons --> <div class="flex flex-wrap justify-center gap-3 mt-auto" data-astro-cid-kh7btl4r> ${webTechs.map((tech) => renderTemplate`<div class="tech-badge"${addAttribute(tech.name, "title")} data-astro-cid-kh7btl4r> <img${addAttribute(tech.icon, "src")}${addAttribute(tech.name, "alt")} class="w-6 h-6" data-astro-cid-kh7btl4r> </div>`)} </div> </div> <!-- Card de E-commerce --> <div class="p-4 bg-slate-800/40 rounded-xl border border-slate-700/50 hover:border-purple-500/30 transition-all duration-300 text-center flex flex-col h-full" data-astro-cid-kh7btl4r> <div class="w-20 h-20 mx-auto bg-purple-500/10 rounded-full flex items-center justify-center mb-4 transform hover:scale-110 transition-transform" data-astro-cid-kh7btl4r> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-purple-400" data-astro-cid-kh7btl4r> <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" data-astro-cid-kh7btl4r></path> </svg> </div> <h3 class="text-2xl font-bold text-white mb-2" data-astro-cid-kh7btl4r>E-commerce</h3> <p class="text-slate-400 mb-2 flex-grow text-sm" data-astro-cid-kh7btl4r>
Lojas virtuais para vender seus produtos e serviços online de
              forma segura e eficiente.
</p> <!-- Tech Icons --> <div class="flex flex-wrap justify-center gap-4 mt-auto" data-astro-cid-kh7btl4r> ${ecommerceTechs.map((tech) => renderTemplate`<div class="tech-badge-large"${addAttribute(tech.name, "title")} data-astro-cid-kh7btl4r> <img${addAttribute(tech.icon, "src")}${addAttribute(tech.name, "alt")} class="w-8 h-8" data-astro-cid-kh7btl4r> </div>`)} </div> </div> <!-- Card de Automação --> <div class="p-4 bg-slate-800/40 rounded-xl border border-slate-700/50 hover:border-green-500/30 transition-all duration-300 text-center flex flex-col h-full" data-astro-cid-kh7btl4r> <div class="w-20 h-20 mx-auto bg-green-500/10 rounded-full flex items-center justify-center mb-4 transform hover:scale-110 transition-transform" data-astro-cid-kh7btl4r> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8 text-green-400" data-astro-cid-kh7btl4r> <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" data-astro-cid-kh7btl4r></path> </svg> </div> <h3 class="text-2xl font-bold text-white mb-2" data-astro-cid-kh7btl4r>Automação</h3> <p class="text-slate-400 mb-2 flex-grow text-sm" data-astro-cid-kh7btl4r>
Sistemas de atendimento automatizado e soluções personalizadas
              para seu fluxo de trabalho.
</p> <!-- Tech Icons --> <div class="flex flex-wrap justify-center gap-4 mt-auto" data-astro-cid-kh7btl4r> ${automationTechs.map((tech) => renderTemplate`<div class="tech-badge-large"${addAttribute(tech.name, "title")} data-astro-cid-kh7btl4r> <img${addAttribute(tech.icon, "src")}${addAttribute(tech.name, "alt")} class="w-8 h-8" data-astro-cid-kh7btl4r> </div>`)} </div> </div> </div> </div> </section> <!-- CTA Section --> <section class="py-20" data-astro-cid-kh7btl4r> <div class="container mx-auto px-6 text-center" data-astro-cid-kh7btl4r> <h2 class="text-3xl md:text-4xl font-bold text-white mb-6" data-astro-cid-kh7btl4r>
Pronto para <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500" data-astro-cid-kh7btl4r>começar?</span> </h2> <p class="text-xl text-slate-400 max-w-3xl mx-auto mb-8" data-astro-cid-kh7btl4r>
Seja para criar uma simples landing page ou desenvolver um sistema
          completo, vamos conversar e encontrar a melhor solução para o seu
          negócio.
</p> <a href="/#contact" class="inline-block px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40" data-astro-cid-kh7btl4r>
Entre em Contato
</a> </div> </section> </main> ${renderComponent($$result2, "Footer", $$Footer, { "data-astro-cid-kh7btl4r": true })}  ` })}`;
}, "C:/workspaces/zeroDozeDev/src/pages/about.astro", void 0);

const $$file = "C:/workspaces/zeroDozeDev/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
	__proto__: null,
	default: $$About,
	file: $$file,
	url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=about.astro.mjs.map
