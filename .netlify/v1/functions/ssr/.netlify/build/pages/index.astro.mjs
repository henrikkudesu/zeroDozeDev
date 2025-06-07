import { a as createComponent, m as maybeRenderHead, r as renderComponent, b as renderTemplate, c as createAstro, u as unescapeHTML, d as addAttribute } from '../chunks/astro/server_C4REhOhB.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_DGdp6ioq.mjs';
import { h as heroImage, S as SERVICES, T as TECHNOLOGIES, $ as $$Header, a as $$Footer } from '../chunks/constants_DKkiqYpF.mjs';
import '@astrojs/internal-helpers/path';
import '@astrojs/internal-helpers/remote';
import { $ as $$Image } from '../chunks/_astro_assets_B28Bv3RN.mjs';
/* empty css                                 */
import 'clsx';
import { library, icon } from '@fortawesome/fontawesome-svg-core';
import { faLaptopCode, faMobileAlt, faShoppingCart, faCheckCircle, faBars, faTimes, faClock, faUsers, faStar, faCode, faBolt, faShieldAlt, faHandshake, faDatabase } from '@fortawesome/free-solid-svg-icons';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<!-- Seção principal do Hero com gradiente de fundo -->${maybeRenderHead()}<section id="home" class="hero-gradient pt-32 pb-20 md:pt-40 md:pb-32 px-4 sm:px-6 lg:px-8 text-white" aria-labelledby="hero-heading" data-astro-cid-bbe6dxrz> <div class="max-w-7xl mx-auto" data-astro-cid-bbe6dxrz> <!-- Grid de duas colunas para layout responsivo --> <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center" data-astro-cid-bbe6dxrz> <!-- Conteúdo textual com animação fade-in --> <div class="fade-in-up" data-astro-cid-bbe6dxrz> <!-- Título principal com gradiente de texto --> <h1 id="hero-heading" class="text-4xl md:text-6xl font-bold mb-6 leading-tight" data-astro-cid-bbe6dxrz> <span class="text-slate-300" data-astro-cid-bbe6dxrz>Construímos</span>${" "} <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500" data-astro-cid-bbe6dxrz>Experiências</span><br data-astro-cid-bbe6dxrz> <span class="animate-fade-in" data-astro-cid-bbe6dxrz>Digitais que Importam</span> </h1> <!-- Texto descritivo --> <p class="text-lg md:text-xl text-slate-400 mb-8 max-w-lg" data-astro-cid-bbe6dxrz>
Transformando ideias em soluções web excepcionais com tecnologia de
          ponta e design criativo personalizado para o seu negócio.
</p> <!-- Botões de chamada para ação (CTA) --> <div class="flex flex-wrap gap-4" data-astro-cid-bbe6dxrz> <a href="#contact" class="primary-button" role="button" aria-label="Iniciar seu projeto" data-astro-cid-bbe6dxrz>
Iniciar seu Projeto
</a> <a href="/about" class="secondary-button" role="button" aria-label="Ver nossos trabalhos" data-astro-cid-bbe6dxrz>
Sobre Nós
</a> </div> </div> <!-- Conteúdo visual com imagem e efeitos decorativos --> <div class="relative group fade-in-right" data-astro-cid-bbe6dxrz> <!-- Imagem otimizada com diferentes tamanhos para responsividade --> ${renderComponent($$result, "Image", $$Image, { "src": heroImage, "widths": [400, 800, 1200, heroImage.width], "sizes": "(max-width: 640px) 400px, (max-width: 1024px) 800px, (max-width: 1600px) 1200px, 100vw", "alt": "Equipe trabalhando em desenvolvimento web", "class": "hero-image w-full h-auto rounded-2xl shadow-2xl border border-slate-700 transition-transform duration-500 group-hover:scale-[1.01]", "loading": "eager", "format": "avif", "data-astro-cid-bbe6dxrz": true })} <!-- Elementos decorativos (círculos com gradiente e blur) --> <div class="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl" aria-hidden="true" data-astro-cid-bbe6dxrz></div> <div class="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl" aria-hidden="true" data-astro-cid-bbe6dxrz></div> </div> </div> </div> </section> `;
}, "C:/workspaces/zeroDozeDev/src/components/Hero.astro", void 0);

library.add(
  faLaptopCode,
  faMobileAlt,
  faShoppingCart,
  faCheckCircle,
  faBars,
  faTimes,
  faClock,
  faUsers,
  faStar,
  faCode,
  faBolt,
  faShieldAlt,
  faHandshake,
  faDatabase
);

const $$Astro$2 = createAstro("http://www.zerodozedev.com.br");
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Card;
  const { service } = Astro2.props;
  function generateIconHtml(iconName) {
    const faIcon = icon({ prefix: "fas", iconName });
    return faIcon?.html || "";
  }
  const mainIconName = service.icon.replace("fas fa-", "");
  const mainIconSvg = generateIconHtml(mainIconName);
  const checkIconSvg = generateIconHtml("check-circle");
  return renderTemplate`<!-- Card principal do serviço com gradiente e efeitos de hover -->${maybeRenderHead()}<article class="card-gradient group p-8 rounded-2xl transition-all duration-300 bg-slate-800/30 border border-slate-700/30 shadow-lg hover:shadow-2xl hover:-translate-y-1" tabindex="0" data-astro-cid-dd5txfcy> <!-- Wrapper do ícone principal com animação de pulso --> <div class="service-icon-wrapper w-16 h-16 rounded-lg flex items-center justify-center mb-6 bg-gradient-to-br from-blue-500/20 to-purple-500/20 transition-transform duration-300 group-hover:scale-110" aria-hidden="true" data-astro-cid-dd5txfcy> <div class="w-10 h-10 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 flex items-center justify-center" data-astro-cid-dd5txfcy>${unescapeHTML(mainIconSvg)}</div> </div> <!-- Seção de conteúdo com título, descrição e features --> <div class="space-y-4" data-astro-cid-dd5txfcy> <!-- Título com efeito de gradiente no hover --> <h3 class="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all duration-300" data-astro-cid-dd5txfcy> ${service.title} </h3> <p class="text-slate-400 leading-relaxed" data-astro-cid-dd5txfcy> ${service.description} </p> <!-- Lista de características com ícones de check --> ${service.features && service.features.length > 0 && renderTemplate`<ul class="space-y-3 text-slate-400 pt-2" role="list" data-astro-cid-dd5txfcy> ${service.features.map((feature) => renderTemplate`<li${addAttribute([
    "flex items-center group/item",
    "hover:text-slate-300 transition-colors duration-300",
    { "text-slate-300 font-medium": feature.highlighted }
  ], "class:list")} data-astro-cid-dd5txfcy> <span class="w-4 h-4 mr-3 text-green-400 group-hover/item:text-green-300 transition-colors duration-300" aria-hidden="true" data-astro-cid-dd5txfcy>${unescapeHTML(checkIconSvg)}</span> ${feature.text} </li>`)} </ul>`} </div> </article> `;
}, "C:/workspaces/zeroDozeDev/src/components/ui/Card.astro", void 0);

const $$Astro$1 = createAstro("http://www.zerodozedev.com.br");
const $$TechCard = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$TechCard;
  const { name, icon, category } = Astro2.props;
  return renderTemplate`<!-- Card principal com gradiente e efeitos de hover -->${maybeRenderHead()}<div class="card-gradient group relative p-5 rounded-xl transition-all duration-300
  bg-slate-800/40 border border-slate-700/30 overflow-hidden
  hover:shadow-[0_0_25px_rgba(59,130,246,0.15)] hover:-translate-y-1
  text-center flex flex-col items-center justify-center h-full" data-astro-cid-p2wrlxg7> <!-- Overlay com gradiente que aparece no hover --> <div class="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" data-astro-cid-p2wrlxg7></div> <!-- Container do ícone com efeitos de hover --> <div class="tech-icon-wrapper relative z-10 w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-slate-900/50 p-3 group-hover:bg-slate-900/80 transition-all duration-300" data-astro-cid-p2wrlxg7> <img${addAttribute(icon, "src")}${addAttribute(`${name} logo`, "alt")} class="max-w-full max-h-full object-contain filter group-hover:brightness-110" data-astro-cid-p2wrlxg7> </div> <!-- Nome da tecnologia com efeito de cor no hover --> <h3 class="relative z-10 text-white font-medium group-hover:text-blue-300 transition-colors duration-300" data-astro-cid-p2wrlxg7> ${name} </h3> <!-- Seção de categoria opcional com linha decorativa --> ${category && renderTemplate`<div class="relative z-10 mt-2 flex flex-col items-center" data-astro-cid-p2wrlxg7> <div class="w-8 h-0.5 bg-gradient-to-r from-blue-500/40 to-purple-500/40 rounded mb-1.5" data-astro-cid-p2wrlxg7></div> <p class="text-xs text-slate-400 group-hover:text-slate-300 transition-colors duration-300" data-astro-cid-p2wrlxg7> ${category} </p> </div>`} </div> `;
}, "C:/workspaces/zeroDozeDev/src/components/ui/TechCard.astro", void 0);

const $$Astro = createAstro("http://www.zerodozedev.com.br");
const $$Services = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Services;
  const { className = "" } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section id="services"${addAttribute(["py-20 bg-[#0f172a]", className], "class:list")} aria-labelledby="services-title"> <div class="container mx-auto px-4 sm:px-6 lg:px-8"> <!-- Section Header: Serviços --> <header class="text-center mb-16 fade-in-up"> <span class="inline-block text-sm font-semibold tracking-wider uppercase text-blue-400 mb-2" aria-hidden="true">
Nossos Serviços
</span> <h2 id="services-title" class="mt-4 text-3xl md:text-4xl font-bold text-white">
O Que <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Oferecemos</span> </h2> <p class="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
Soluções completas de desenvolvimento web adaptadas às necessidades do
        seu negócio.
</p> </header> <!-- Services Grid --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 auto-rows-fr mb-32" role="list"> ${SERVICES.map((service, index) => renderTemplate`<div class="fade-in-up"${addAttribute(`animation-delay: ${index * 0.2}s`, "style")} role="listitem"> ${renderComponent($$result, "Card", $$Card, { "service": service })} </div>`)} </div> <!-- Section Header: Tecnologias --> <header class="text-center mb-16 fade-in-up"> <span class="inline-block text-sm font-semibold tracking-wider uppercase text-blue-400 mb-2" aria-hidden="true">
Tech Stack
</span> <h2 id="tech-title" class="mt-4 text-3xl md:text-4xl font-bold text-white">
Tecnologias que <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Utilizamos</span> </h2> <p class="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
Trabalhamos com as ferramentas mais modernas e eficientes do mercado.
</p> </header> <!-- Technologies Grid --> <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-6" role="list"> ${TECHNOLOGIES.map((tech, index) => renderTemplate`<div class="fade-in-up"${addAttribute(`animation-delay: ${index * 0.1}s`, "style")} role="listitem"> ${renderComponent($$result, "TechCard", $$TechCard, { "name": tech.name, "icon": tech.icon, "category": tech.category })} </div>`)} </div> </div> </section>`;
}, "C:/workspaces/zeroDozeDev/src/components/Services.astro", void 0);

const aboutImage = new Proxy({"src":"/_astro/about.CnPts7GR.png","width":1024,"height":1036,"format":"png"}, {
						get(target, name, receiver) {
							if (name === 'clone') {
								return structuredClone(target);
							}
							if (name === 'fsPath') {
								return "C:/workspaces/zeroDozeDev/src/assets/about.png";
							}
							
							return target[name];
						}
					});

const $$About = createComponent(($$result, $$props, $$slots) => {
  const stats = [
    {
      icon: "code",
      text: "Desenvolvimento com tecnologias modernas"
    },
    { icon: "bolt", text: "Sites r\xE1pidos e responsivos" },
    {
      icon: "shield-alt",
      text: "Seguran\xE7a e confiabilidade garantidas"
    },
    { icon: "handshake", text: "Atendimento personalizado" }
  ];
  function generateIconHtml(iconName) {
    const faIcon = icon({ prefix: "fas", iconName });
    return faIcon ? faIcon.html[0] : "";
  }
  return renderTemplate`${maybeRenderHead()}<section id="about" class="py-20 bg-[#0f172a]" aria-labelledby="about-heading" data-astro-cid-v2cbyr3p> <div class="container mx-auto px-6" data-astro-cid-v2cbyr3p> <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start" data-astro-cid-v2cbyr3p> <!-- Text Content - Ordem: 1 (sempre primeiro) --> <div class="lg:order-2 order-1" data-astro-cid-v2cbyr3p> <!-- Título --> <div class="fade-in-right" data-astro-cid-v2cbyr3p> <span class="text-sm font-semibold tracking-wider uppercase text-blue-400" aria-hidden="true" data-astro-cid-v2cbyr3p>
Sobre a zeroDoze Dev
</span> <h2 id="about-heading" class="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white" data-astro-cid-v2cbyr3p>
Nossa <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500" data-astro-cid-v2cbyr3p>História</span> </h2> </div> <!-- Image Section - Ordem: 2 (apenas em mobile) --> <div class="relative group fade-in-left lg:hidden block my-8" data-astro-cid-v2cbyr3p> ${renderComponent($$result, "Image", $$Image, { "src": aboutImage, "alt": "Nossa equipe trabalhando em conjunto em projetos digitais", "width": 1170, "height": 780, "class": "w-full h-auto rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.01] border border-slate-700", "format": "png", "loading": "lazy", "data-astro-cid-v2cbyr3p": true })} <!-- Decorative Elements --> <div class="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl" aria-hidden="true" data-astro-cid-v2cbyr3p></div> <div class="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl" aria-hidden="true" data-astro-cid-v2cbyr3p></div> </div> <!-- Texto - Ordem: 3 --> <div class="space-y-4 mt-6 fade-in-right" data-astro-cid-v2cbyr3p> <p class="text-lg text-slate-400" data-astro-cid-v2cbyr3p>
A zeroDoze Dev foi fundada por um desenvolvedor full-stack que,
            inicialmente, programava por puro hobbie. Com o tempo, essa paixão
            se transformou em uma missão: criar experiências digitais que não
            apenas atendem às necessidades dos clientes, mas que também ofereça
            um orçamento que seja acessível e justo a microempreendedores e
            pequenas empresas.
</p> <p class="text-lg text-slate-400" data-astro-cid-v2cbyr3p>
Meu objetivo é ajudar você a transformar sua ideia em realidade,
            seja ela um site institucional, uma loja virtual ou um sistema sob
            medida. Com uma abordagem centrada no cliente e um compromisso
            inabalável com a qualidade, estou aqui para garantir que sua jornada
            digital seja tão emocionante quanto o destino.
</p> <p class="text-lg text-slate-400" data-astro-cid-v2cbyr3p>
Se você está procurando um parceiro confiável para levar seu projeto
            digital ao próximo nível, a zeroDoze Dev é a escolha certa.
</p> </div> <!-- Stats Grid --> <div class="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6" role="list" aria-label="Nossas conquistas" data-astro-cid-v2cbyr3p> ${stats.map((stat) => renderTemplate`<div class="flex items-start gap-3 group/stat p-2 rounded-lg hover:bg-slate-800/30 transition-colors duration-300" role="listitem" data-astro-cid-v2cbyr3p> <div class="text-lg sm:text-xl text-green-400 transition-transform duration-300 group-hover/stat:scale-110 flex-shrink-0 mt-1" aria-hidden="true" data-astro-cid-v2cbyr3p>${unescapeHTML(generateIconHtml(stat.icon))}</div> <p class="text-sm sm:text-base text-slate-300 group-hover/stat:text-white transition-colors duration-300" data-astro-cid-v2cbyr3p> ${stat.text} </p> </div>`)} </div> </div> <!-- Image Section - Ordem: 2 (apenas em desktop) --> <div class="relative group fade-in-left hidden lg:block lg:order-1" data-astro-cid-v2cbyr3p> ${renderComponent($$result, "Image", $$Image, { "src": aboutImage, "widths": [240, 540, 720, aboutImage.width], "sizes": "(max-width: 360px) 240px, (max-width: 720px) 540px, (max-width: 1600px) 720px, 100vw", "alt": "Nossa equipe trabalhando em conjunto em projetos digitais", "class": "w-full h-auto rounded-xl shadow-2xl transition-transform duration-500 group-hover:scale-[1.01] border border-slate-700", "format": "png", "loading": "lazy", "data-astro-cid-v2cbyr3p": true })} <!-- Decorative Elements --> <div class="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-xl" aria-hidden="true" data-astro-cid-v2cbyr3p></div> <div class="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-xl" aria-hidden="true" data-astro-cid-v2cbyr3p></div> </div> </div> </div> </section> `;
}, "C:/workspaces/zeroDozeDev/src/components/About.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section id="contact" class="py-20 bg-[#0f172a] relative"> <div class="container mx-auto px-6"> <!-- Cabeçalho da Seção de Contato --> <div class="text-center mb-16"> <span class="text-sm font-semibold tracking-wider uppercase text-blue-400">
Entre em Contato
</span> <h2 class="mt-4 text-3xl md:text-4xl lg:text-5xl font-bold text-white">
Vamos <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
Trabalhar Juntos
</span> </h2> <p class="mt-4 max-w-2xl mx-auto text-lg text-slate-400">
Pronto para iniciar seu projeto? Preencha o formulário ou entre em
        contato diretamente conosco.
</p> </div> <!-- Formulário de Contato --> <div class="max-w-4xl mx-auto"> <form action="https://submit-form.com/teo3OTTF0" method="POST" class="grid grid-cols-1 md:grid-cols-2 gap-8"> <!-- Redirecionamento --> <input type="hidden" name="_redirect" value="zerodozedev.netlify.app/success?submitted=true"> <!-- Campo Nome --> <div> <label for="name" class="block mb-3 text-slate-300 font-medium">
Seu Nome
</label> <input type="text" id="name" name="name" required placeholder="João Silva" class="w-full px-5 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-slate-400 transition-all duration-200 outline-none"> </div> <!-- Campo Email --> <div> <label for="email" class="block mb-3 text-slate-300 font-medium">
Email
</label> <input type="email" id="email" name="email" required placeholder="joao@exemplo.com" class="w-full px-5 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-slate-400 transition-all duration-200 outline-none"> </div> <!-- Campo Assunto --> <div class="md:col-span-2"> <label for="subject" class="block mb-3 text-slate-300 font-medium">
Assunto
</label> <input type="text" id="subject" name="subject" required placeholder="Consulta de Projeto" class="w-full px-5 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-slate-400 transition-all duration-200 outline-none"> </div> <!-- Campo Mensagem --> <div class="md:col-span-2"> <label for="message" class="block mb-3 text-slate-300 font-medium">
Sua Mensagem
</label> <textarea id="message" name="message" rows="5" required placeholder="Conte-nos sobre o seu projeto..." class="w-full px-5 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-white placeholder-slate-400 transition-all duration-200 outline-none resize-none"></textarea> </div> <!-- Botão de Envio --> <div class="md:col-span-2 text-center"> <button type="submit" class="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40">
Enviar Mensagem
</button> </div> </form> </div> </div> </section>`;
}, "C:/workspaces/zeroDozeDev/src/components/Contact.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MainLayout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Header", $$Header, { "currentPage": "home" })} ${renderComponent($$result2, "Hero", $$Hero, {})} ${renderComponent($$result2, "Services", $$Services, {})}  ${renderComponent($$result2, "About", $$About, {})} ${renderComponent($$result2, "Contact", $$Contact, {})} ${renderComponent($$result2, "Footer", $$Footer, {})} ` })}`;
}, "C:/workspaces/zeroDozeDev/src/pages/index.astro", void 0);

const $$file = "C:/workspaces/zeroDozeDev/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
//# sourceMappingURL=index.astro.mjs.map
