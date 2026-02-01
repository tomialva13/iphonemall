// Mobile menu
const menuBtn = document.getElementById('menuBtn');
const mobileNav = document.getElementById('mobileNav');

menuBtn?.addEventListener('click', () => {
  const isOpen = menuBtn.getAttribute('aria-expanded') === 'true';
  menuBtn.setAttribute('aria-expanded', String(!isOpen));
  mobileNav.hidden = isOpen;
});

mobileNav?.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => {
    menuBtn.setAttribute('aria-expanded', 'false');
    mobileNav.hidden = true;
  });
});

// Lightbox
const dlg = document.getElementById('lightbox');
const dlgImg = document.getElementById('lightboxImg');
const dlgClose = document.getElementById('lightboxClose');

document.querySelectorAll('[data-lightbox] img').forEach(img => {
  img.addEventListener('click', () => {
    dlgImg.src = img.src;
    dlg.showModal();
  });
});

dlgClose?.addEventListener('click', () => dlg.close());
dlg?.addEventListener('click', (e) => {
  const rect = dlg.getBoundingClientRect();
  const inside = rect.top <= e.clientY && e.clientY <= rect.bottom && rect.left <= e.clientX && e.clientX <= rect.right;
  if (!inside) dlg.close();
});
