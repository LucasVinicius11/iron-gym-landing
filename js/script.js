var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
    });

const btnMenu = document.querySelector('.btn-menu-mobile i');
const menuMobile = document.querySelector('.menu-mobile');

btnMenu.addEventListener('click', () => {
  menuMobile.classList.toggle('ativo');

  // alterna o ícone
  if (menuMobile.classList.contains('ativo')) {
    btnMenu.classList.remove('fa-bars');
    btnMenu.classList.add('fa-xmark');
  } else {
    btnMenu.classList.remove('fa-xmark');
    btnMenu.classList.add('fa-bars');
  }
});

// Fecha o menu ao clicar em um link
document.querySelectorAll('.menu-mobile a').forEach(link => {
  link.addEventListener('click', () => {
    menuMobile.classList.remove('ativo');
    btnMenu.classList.remove('fa-xmark');
    btnMenu.classList.add('fa-bars');
  });
});
