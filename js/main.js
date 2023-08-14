/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*======= MENU SHOW ========*/
/* Validate fi constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*======= MENU HIDDEN=========*/
/* Validate fi constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll(".nav-link");

const linkAction = () => {
  const navMenu = document.getElementById("nav-menu");
  // When we click on each nav-link , we remove the show-menu
  navMenu.classList.remove("show-menu");
};
navLink.forEach((n) => n.addEventListener("click", linkAction));

/*=============== SWIPER PROJECTS ===============*/
let swiper = new Swiper(".projects_container", {
  loop: true,
  spaceBetween: 24,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1200: {
      slidesPerView: 2,
      spaceBetween: -56,
    },
  },
});

/*=============== EMAIL JS ===============*/
// const contactForm = document.getElementById("contact_form"),
//   contactName = document.getElementById("contact-name"),
//   contactEmail = document.getElementById("contact-email"),
//   contactProject = document.getElementById("contact-project"),
//   contactMessage = document.getElementById("contact-message");

// const sendEmail =(e) =>{
//   e.preventDefault()

//   //Check if the fielf has a value
//   if(contactName.value ==='' || contactEmail.value ==='' || contactProject.value ===''){
//     //Add and remove color
//     contactMessage.classList.remove('color-blue')
//     contactMessage.classList.add('color-red')

//     //Show message
//     contactMessage.textContent ='Write all the input fields'
//   }else{
//     // serviceID - templateID - #form - publickey
//     emailjs.sendForm(
//       "service_hs50yr1",
//       "template_o3vo0vl",
//       "contact_form",
//       "VQziZBMhb0U7vAFhR"
//     )
//     .then(()=>{
//       // Show message and add color
//       contactMessage.classList.add('color-blue')
//       contactMessage.textContent = 'Message sent ✅'

//       // Remove message after five seconds
//       setTimeout(()=>{
//         contactMessage.textContent = ''
//       }, 5000)
//     }, (error) =>{
//       alert('OOPS! SOMETHING HAS FAILED...', error)
//     })
//   }
// }
// contactForm.addEventListener('submit', sendEmail)


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 58,
      sectionId = current.getAttribute("id"),
      sectionsClass = document.querySelector(
        ".nav_menu a[href*=" + sectionId + "]"
      );
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add("active-link");
    } else {
      sectionsClass.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);

/*=============== SHOW SCROLL UP ===============*/
const scrollUp = () => {
  const scrollUp = document.getElementById("scroll-up");
  //When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll
  this.scrollY >= 350
    ? scrollUp.classList.add("scroll-show")
    : scrollUp.classList.remove("scroll-show");
};
window.addEventListener("scroll", scrollUp);
/*=============== DARK LIGHT THEME ===============*/
const themeButton = document.getElementById("theme-button");
const darktheme = "dark-theme";
const iconTheme = "ri-sun-line";

//Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

//We obtain current theme that the interface has validaty the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darktheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

//We validate if the user previously choose a topic
if (selectedTheme) {
  //IF the validation is fullfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darktheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

//Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  //Add or remove the dark /icon thome
  document.body.classList.toggle(darktheme);
  themeButton.classList.toggle(iconTheme);
  //We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
/*=============== CHANGE BACKGROUND HEADER ===============*/
const scrollHeader = () => {
  const header = document.getElementById("header");
  //When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
  this.scrollY >= 50
    ? header.classList.add("bg-header")
    : header.classList.remove("bg-header");
};
window.addEventListener("scroll", scrollHeader);
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true /* Animations repeat */
})
sr.reveal(".home-data, .projects_container , .footer_container");
sr.reveal(".home-info div", {delay: 600, origin: 'bottom', interval: 100});
sr.reveal(".skills-content:nth-child(1), .contact_content:nth-child(1)", { origin: "left" });
sr.reveal(".skills-content:nth-child(2), .contact_content:nth-child(2)", {
  origin: "right",
});
sr.reveal(".qualification_content, .services_card", { interval: 100 });