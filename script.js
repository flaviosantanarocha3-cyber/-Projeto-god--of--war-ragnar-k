
/* ============================================================
   1. CARROSSEL DE PERSONAGENS (Swiper)
   
   ============================================================ */
const swiper = new Swiper('.slide-characters', {

    loop: true,          // chegar no ultimo personagem, volta ao primeiro
    speed: 600,          // duracao da animacao de troca (em milissegundos)

    // troca de slide automatica a cada 4 segundos
    autoplay: {
        delay: 4000,
        //  o carrossel, o autoplay volta depois
        disableOnInteraction: false,
    },

    pagination: {
        el: '.swiper-pagination',   // bolinhas aparecem
        clickable: true,            // permite clicar nas bolinhas para pular
    },

    
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 16,
        },
        768: {
            slidesPerView: 2.1,
            spaceBetween: 24,
        },

        992: {
            slidesPerView: 2.5,
            spaceBetween: 24,
        },
        1200: {
            slidesPerView: 3,
            spaceBetween: 32,
        },
    }
});


ScrollReveal().reveal('.left', {
  origin: 'bottom',      
  distance: '10%',
  duration: 2000,
  scale: 0.95,
  opacity: 0,
  reset: true
});

ScrollReveal().reveal('.right a', {
  origin: 'bottom',      
  distance: '50%',
  duration: 2000,
  scale: 0.95,
  opacity: 0,
  reset: true
});

ScrollReveal().reveal('.kratos-atreus', {
  origin: 'right',      
  distance: '20%',
  duration: 2000,
  scale: 0.95,
  opacity: 0,
  reset: true
});

ScrollReveal().reveal('.s-story img', {
  origin: 'left',      
  distance: '20%',
  duration: 2000,
  scale: 0.95,
  opacity: 0,
  reset: true
});

ScrollReveal().reveal('.s-story img', {
  origin: 'left',      
  distance: '20%',
  duration: 2000,
  scale: 0.95,
  opacity: 0,
  reset: true
});


ScrollReveal().reveal('.machado', {
  origin: 'right',      
  distance: '20%',
  duration: 2000,
  scale: 0.95,
  opacity: 0,
  reset: true
});

ScrollReveal().reveal('.text', {
  origin: 'bottom',      
  distance: '20%',
  duration: 2000,
  scale: 0.95,
  opacity: 0,
  reset: true
});

ScrollReveal().reveal('.kratos-lenda', {
  origin: 'left',      
  distance: '20%',
  duration: 2000,
  scale: 0.95,
  opacity: 0,
  reset: true
});

ScrollReveal().reveal('.s-lenda .left', {
  origin: 'right',      
  distance: '20%',
  duration: 2000,
  scale: 0.95,
  opacity: 0,
  reset: true
});

document.addEventListener('DOMContentLoaded', () => {
    const framesLenda = [
        'assets/img/bg-animacao/imagem1-filtered-comprimida.png',
        'assets/img/bg-animacao/imagem2-filtered-comprimida.png',
        'assets/img/bg-animacao/imagem3-filtered-comprimida.png',
        'assets/img/bg-animacao/imagem4-filtered-comprimida.png',
        'assets/img/bg-animacao/imagem5-filtered-comprimida.png',
        'assets/img/bg-animacao/imagem6-filtered-comprimida.png',
        'assets/img/bg-animacao/imagem7-filtered-comprimida.png',
        'assets/img/bg-animacao/imagem8-filtered-comprimida.png',
        'assets/img/bg-animacao/imagem9-filtered-comprimida.png',
    ];

    framesLenda.forEach((src) => {
        const img = new Image();
        img.src = src;
    });
});