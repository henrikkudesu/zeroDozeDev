// Seleciona todos os links (elementos <a>) que começam com "#" no href
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  // Adiciona um evento de clique para cada link encontrado
  anchor.addEventListener(
    'click',
    function (this: HTMLAnchorElement, e: Event) {
      // Previne o comportamento padrão do link
      e.preventDefault();

      // Obtém o valor do atributo href do link
      const target = this.getAttribute('href');

      // Se o target existir, realiza a rolagem suave até o elemento
      if (target) {
        document.querySelector(target)?.scrollIntoView({
          behavior: 'smooth', // Define a rolagem como suave
        });
      }
    }
  );
});
