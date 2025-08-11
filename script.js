  // Alternar menú en pantallas pequeñas
  function toggleMenu() {
    const navbar = document.getElementById('navbar');
    navbar.classList.toggle('active');
  }

  // Inicializar Swiper
  const swiper = new Swiper(".mySwiper", {
    loop: true,
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

// Mostrar/ocultar submenús del catálogo
  function toggleSubmenu(id) {
    const allCards = document.querySelectorAll(".catalogo-card");
    allCards.forEach(card => {
      const submenu = card.querySelector(".submenu-catalogo");
      if (submenu && submenu.id === id) {
        card.classList.toggle("active");
      } else {
        card.classList.remove("active");
      }
    });
  }