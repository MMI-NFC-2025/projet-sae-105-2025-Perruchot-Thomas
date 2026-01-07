const boutonMenu = document.querySelector('.bouton-menu');
const menu = document.querySelector('#nav-principale');

if (boutonMenu && menu) {
  boutonMenu.addEventListener('click', () => {
    const estOuvert = boutonMenu.getAttribute('aria-expanded') === 'true';

    if (estOuvert) {
      boutonMenu.setAttribute('aria-expanded', 'false');
      menu.setAttribute('hidden', '');
      document.body.style.overflow = '';
      boutonMenu.classList.remove('actif');
    } else {
      boutonMenu.setAttribute('aria-expanded', 'true');
      menu.removeAttribute('hidden');
      document.body.style.overflow = 'hidden';
      boutonMenu.classList.add('actif');
    }
  });
}

const btnRetourHaut = document.getElementById('btn-retour-haut');

if (btnRetourHaut) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      btnRetourHaut.classList.add('visible');
    } else {
      btnRetourHaut.classList.remove('visible');
    }
  });

  btnRetourHaut.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}
