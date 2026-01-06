const boutonMenu = document.querySelector('.bouton-menu');
const menu = document.querySelector('#nav-principale');

if (boutonMenu && menu) {
  boutonMenu.addEventListener('click', () => {
    const estOuvert = boutonMenu.getAttribute('aria-expanded') === 'true';

    if (estOuvert) {
      // --- FERMETURE DU MENU ---
      boutonMenu.setAttribute('aria-expanded', 'false');
      menu.setAttribute('hidden', '');
      
      // On RÉACTIVE le scroll de la page
      document.body.style.overflow = ''; 
      
      boutonMenu.classList.remove('actif'); 
    } else {
      // --- OUVERTURE DU MENU ---
      boutonMenu.setAttribute('aria-expanded', 'true');
      menu.removeAttribute('hidden');
      
      // On BLOQUE le scroll de la page pour ne pas bouger derrière
      document.body.style.overflow = 'hidden'; 
      
      boutonMenu.classList.add('actif');
    }
  });
}