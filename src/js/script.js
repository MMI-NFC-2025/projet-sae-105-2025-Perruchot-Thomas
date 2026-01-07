
const toggle = document.querySelector('.en-tete__bouton-menu');
const nav = document.querySelector('#nav-principale');

if (toggle && nav) {
    toggle.addEventListener('click', () => {
        const isOpened = toggle.getAttribute('aria-expanded') === 'true';

        if (isOpened) {
            toggle.setAttribute('aria-expanded', 'false');
            nav.setAttribute('hidden', '');
            document.body.style.overflow = '';
            toggle.classList.remove('actif');
        } else {
            toggle.setAttribute('aria-expanded', 'true');
            nav.removeAttribute('hidden');
            document.body.style.overflow = 'hidden'; 
            toggle.classList.add('actif');
        }
    });
}


const carrouselGrille = document.querySelector('.carrousel__grille');
const btnGauche = document.querySelector('.carrousel__bouton--gauche');
const btnDroite = document.querySelector('.carrousel__bouton--droite');

if (carrouselGrille && btnGauche && btnDroite) {
    
    btnDroite.addEventListener('click', () => {
        const cardWidth = carrouselGrille.querySelector('.carte').offsetWidth;
        const gap = parseInt(getComputedStyle(carrouselGrille).gap) || 30;
        
        carrouselGrille.scrollBy({
            left: cardWidth + gap,
            behavior: 'smooth'
        });
    });

    btnGauche.addEventListener('click', () => {
        const cardWidth = carrouselGrille.querySelector('.carte').offsetWidth;
        const gap = parseInt(getComputedStyle(carrouselGrille).gap) || 30;

        carrouselGrille.scrollBy({
            left: -(cardWidth + gap),
            behavior: 'smooth'
        });
    });
}

const btnHaut = document.getElementById('btn-retour-haut');

if (btnHaut) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btnHaut.classList.add('visible');
        } else {
            btnHaut.classList.remove('visible');
        }
    });

    btnHaut.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}