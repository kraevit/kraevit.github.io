  (function() {

    const hamburgerBtn = document.getElementById("js-hamburger-btn");

    const navbarMenu = document.getElementById("js-menu");

    const toggleMenu = () => navbarMenu.classList.toggle("navbar--active");

    hamburgerBtn.onclick = toggleMenu;

  })();