document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const navLinks = document.querySelector("header nav ul");
  const menuLink = document.getElementById("menu-link");
  const sidebarMenu = document.getElementById("sidebar-menu");
  const sections = document.querySelectorAll("section");
  let isTransparent = true;

  const toggleNavLinks = () => {
    if (window.innerWidth <= 768) { // Adjust the width as needed
      navLinks.style.display = "none";
      menuLink.style.display = "block"; // Show the "Menu" link
    } else {
      navLinks.style.display = "flex";
      menuLink.style.display = "none"; // Hide the "Menu" link
    }
  };

  if (window.scrollY > 0) {
    header.classList.remove("header-transparent");
    header.classList.add("header-scroll");
    isTransparent = false;
  }

  toggleNavLinks(); // Initial call based on screen width

  window.addEventListener("resize", () => {
    toggleNavLinks(); // Call whenever the screen size changes
  });

  document.addEventListener("scroll", () => {
    if (window.scrollY > 0 && isTransparent) {
      header.classList.remove("header-transparent");
      header.classList.add("header-scroll");
      isTransparent = false;
    } else if (window.scrollY === 0 && !isTransparent) {
      header.classList.remove("header-scroll");
      header.classList.add("header-transparent");
      isTransparent = true;
    }
  });

  menuLink.addEventListener("click", () => {
    sidebarMenu.style.left = "0"; // Open the sidebar menu
  });

  sidebarMenu.addEventListener("click", () => {
    sidebarMenu.style.left = "-250px"; // Close the sidebar menu
  });

  window.addEventListener('scroll', function () {
    const scrollPosition = window.pageYOffset;
    const parallaxImage = document.querySelector('.parallax-image');
    parallaxImage.style.transform = `translateY(${scrollPosition * 0.15}px)`;
  });

  // Initialize Tilt.js on elements with the "tilt" class
  $('.tilt').tilt({
    scale: 1.01,
    
  });
});
