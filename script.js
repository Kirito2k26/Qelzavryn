const menuButton=document.querySelector('.menu-toggle');
const navLinks=document.querySelector('.nav-links');
menuButton?.addEventListener('click',()=>{
  const expanded=menuButton.getAttribute('aria-expanded')==='true';
  menuButton.setAttribute('aria-expanded',String(!expanded));
  menuButton.setAttribute('aria-label',expanded?'Open navigation':'Close navigation');
  navLinks.classList.toggle('open',!expanded);
});
navLinks?.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{
  navLinks.classList.remove('open');
  menuButton.setAttribute('aria-expanded','false');
  menuButton.setAttribute('aria-label','Open navigation');
}));
document.querySelector('#year').textContent=String(new Date().getFullYear());
