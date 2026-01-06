/* --- GESTION DU MENU --- */
const boutonMenu = document.querySelector('.bouton-menu');
const menu = document.querySelector('#nav-principale');

if (boutonMenu && menu) {
  boutonMenu.addEventListener('click', () => {
    const estOuvert = boutonMenu.getAttribute('aria-expanded') === 'true';

    if (estOuvert) {
      // Fermeture
      boutonMenu.setAttribute('aria-expanded', 'false');
      menu.setAttribute('hidden', '');
      document.body.style.overflow = ''; // On réactive le scroll
      boutonMenu.classList.remove('actif');
    } else {
      // Ouverture
      boutonMenu.setAttribute('aria-expanded', 'true');
      menu.removeAttribute('hidden');
      document.body.style.overflow = 'hidden'; // On bloque le scroll
      boutonMenu.classList.add('actif');
    }
  });
}

/* --- GESTION DU BOUTON "RETOUR HAUT" --- */
const btnRetourHaut = document.getElementById('btn-retour-haut');

if (btnRetourHaut) {
  // 1. Apparition au scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) { // Apparaît après 300px de descente
      btnRetourHaut.classList.add('visible');
    } else {
      btnRetourHaut.classList.remove('visible');
    }
  });

  // 2. Clic pour remonter
  btnRetourHaut.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Remontée fluide
    });
  });
}