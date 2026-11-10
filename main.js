const menuButton = document.getElementById('menu-toggle');
const navigation = document.getElementById('primary-nav');
if (menuButton && navigation) {
  menuButton.addEventListener('click', () => {
    const open = navigation.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  });
  for (const link of navigation.querySelectorAll('a')) {
    link.addEventListener('click', () => {
      navigation.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
      menuButton.setAttribute('aria-label', 'Abrir menú');
    });
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      navigation.classList.remove('open');
      menuButton.setAttribute('aria-expanded', 'false');
    }
  });
}
const sections = [...document.querySelectorAll('section[id], header[id]')];
const anchors = [...document.querySelectorAll('.nav-link')];
if ('IntersectionObserver' in window && sections.length) {
  const observer = new IntersectionObserver(entries => {
    const visible = entries.filter(e => e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];
    if (!visible) return;
    anchors.forEach(a => a.classList.toggle('active',a.getAttribute('href')==='#'+visible.target.id));
  }, {rootMargin:'-100px 0px -55% 0px',threshold:[0,0.1,0.4]});
  sections.forEach(section=>observer.observe(section));
}
