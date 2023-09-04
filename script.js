document.addEventListener("DOMContentLoaded", () => {
  const movingImage = document.getElementById("moving-image");
  

  document.addEventListener("mousemove", (e) => {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const moveX = (mouseX - centerX) * 0.02; // Adjust the factor for sensitivity
    const moveY = (mouseY - centerY) * 0.02; // Adjust the factor for sensitivity

    movingImage.style.transform = `translate(${moveX}px, ${moveY}px)`;
    
    const tiltX = (mouseX - centerX) / centerX;
    const tiltY = (mouseY - centerY) / centerY;
    
    
  });
  
  $(".image-ob").tilt({
    perspective: 1000,
    scale: 1,
    speed: 500,
  });
// Example JavaScript code to set the countdown values (using date-fns library)
const targetDate = new Date("2023-09-02 00:00:00");

function updateCountdown() {
  const now = new Date();
  const timeDifference = targetDate - now;

  if (timeDifference <= 0) {
    // Event has ended, set countdown values to zero
    document.getElementById("days").textContent = "0";
    document.getElementById("hours").textContent = "0";
    document.getElementById("minutes").textContent = "0";
    document.getElementById("seconds").textContent = "0";
  } else {
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }
}

updateCountdown();
setInterval(updateCountdown, 1000);

const faqHeaders = document.querySelectorAll('.faq-header');

faqHeaders.forEach((header) => {
const answer = header.parentElement.querySelector('.faq-answer');
const icon = header.querySelector('.faq-icon');

header.addEventListener('click', () => {
  faqHeaders.forEach((h) => {
    if (h !== header) {
      h.parentElement.querySelector('.faq-answer').classList.remove('active');
      h.querySelector('.faq-icon').classList.remove('active');
    }
  });

  answer.classList.toggle('active');
  icon.classList.toggle('active');
  });
});
const header = document.getElementById('header');
const heroSection = document.getElementById('header');

window.addEventListener('scroll', () => {
// Get the height of the hero section
const heroHeight = heroSection.clientHeight;

// Determine the scroll position
const scrollPosition = window.scrollY;

// Toggle the header background based on the scroll position
if (scrollPosition > heroHeight) {
  header.classList.remove('transparent-header');
  header.classList.add('glassy-header');
} else {
  header.classList.remove('glassy-header');
  header.classList.add('transparent-header');
}
});

});

$(document).ready(function () {
  // Cache the navigation links and sections
  var navLinks = $(".nav-links li a");
  var sections = $(".main-container > section");

  $(window).scroll(function () {
    var currentScroll = $(this).scrollTop();

    // Check which section is currently visible
    sections.each(function () {
      var sectionTop = $(this).offset().top - 100; // Adjust offset as needed
      var sectionBottom = sectionTop + $(this).outerHeight();

      if (currentScroll >= sectionTop && currentScroll < sectionBottom) {
        var sectionId = $(this).attr("id");

        // Remove active class from all links and add to the corresponding link
        navLinks.removeClass("active");
        $('a[href="#' + sectionId + '"]').addClass("active");
      }
    });
  });
  const menuButton = document.querySelector(".menu-button");
  const mobileNavLinks = document.querySelector(".nav-links-mobile");

  menuButton.addEventListener("click", () => {
      mobileNavLinks.classList.toggle("open");
  });

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
      if (!menuButton.contains(event.target)) {
          mobileNavLinks.classList.remove("open");
      }
  });
});  
   
/*lohith*/
const faqHeaders = document.querySelectorAll('.faq-header');
const faqAnswers = document.querySelectorAll('.faq-answer');

faqHeaders.forEach((header) => {
const answer = header.parentElement.querySelector('.faq-answer');
const icon = header.querySelector('.faq-icon');

header.addEventListener('click', () => {
  faqHeaders.forEach((h) => {
    if (h !== header) {
      h.parentElement.querySelector('.faq-answer').classList.remove('active');
      h.querySelector('.faq-icon').classList.remove('active');
    }
  });

  answer.classList.toggle('active');
  icon.classList.toggle('active');
});
});

faqAnswers.forEach((answer) => {
answer.addEventListener('click', (event) => {
  event.stopPropagation();
});
});
