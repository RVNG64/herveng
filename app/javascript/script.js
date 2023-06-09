// effet de slide up du header

window.addEventListener('turbo:load', function() {
  const fadeEffect = document.querySelectorAll('.fade-in-slide-up');
  fadeEffect.forEach(function(element) {
    element.classList.add('fade-in');
  });
});

// effet souris personnalisée et scale en hover

document.addEventListener("turbo:load", function () {
  const cursor = document.createElement("div");
  cursor.classList.add("custom-cursor");
  document.body.appendChild(cursor);

  document.addEventListener("mousemove", (e) => {
    cursor.style.left = e.pageX + "px";
    cursor.style.top = e.pageY + "px";
  });

  AOS.init();

  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      cursor.classList.add("scale");
    });
    link.addEventListener("mouseleave", () => {
      cursor.classList.remove("scale");
    });
  });
});

// changement de background body en scroll

document.addEventListener('turbo:load', function () {
  const cards = document.querySelector('.card-container');
  const body = document.querySelector('body');

  function updateBackgroundColor() {
    const windowHeight = window.innerHeight;
    const cardsRect = cards.getBoundingClientRect();
    const cardsTop = cardsRect.top;
    const cardsBottom = cardsRect.bottom;

    if (cardsTop <= windowHeight && cardsTop >= 0) {
      const progress = 1 - cardsTop / windowHeight;
      const bgColor = Math.floor(progress * 255);
      body.style.backgroundColor = `rgb(${bgColor},${bgColor},${bgColor})`;
    } else if (cardsTop < 0) {
      body.style.backgroundColor = 'rgb(255,255,255)';
    } else {
      body.style.backgroundColor = 'rgb(0,0,0)';
    }
  }

  window.addEventListener('scroll', updateBackgroundColor);
  updateBackgroundColor();
});

document.addEventListener("turbo:load", () => {
  const cardsContainer = document.getElementById("cards-container");

  if (cardsContainer) {
    const onScroll = () => {
      const cardsBottom = cardsContainer.getBoundingClientRect().bottom;
      const windowHeight = window.innerHeight;

      if (cardsBottom <= windowHeight) {
        cardsContainer.classList.add("spread");
      } else {
        cardsContainer.classList.remove("spread");
      }
    };

    document.addEventListener("scroll", onScroll);

    // Supprimez l'écouteur d'événements lors du déchargement de la page pour éviter les fuites de mémoire
    document.addEventListener("turbo:before-cache", () => {
      document.removeEventListener("scroll", onScroll);
    });
  }
});


// Popup sur Testimonials
//Liste des Testimonials
document.addEventListener('turbo:load', () => {
  const testimonialsData = [
    {
      name: 'Florian Auger',
      role: 'CEO',
      company: 'Outercraft',
      text: "Hervé fait preuve d'un réel discernement et d'une objectivité sur son marché pour construire des stratégies solides. Il fait preuve d'une énergie entrepreneuriale et d'une grande efficacité de travail",
      image: 'https://www.designfdna.org/sites/default/files/styles/carre/public/contenu/membres/florian-auger/photo/photo-de-florian-auger.jpg?itok=4bpdA7tl',
    },
    {
      name: 'Serge Betsen',
      role: 'Ancien capitaine du XV de France',
      company: 'Serge Betsen Consulting',
      text: "Durant toute notre période de collaboration, Hervé a fait preuve d’un réel professionnalisme et d’une rigueur à toute épreuve. Sa capacité de travail.",
      image: 'https://lepetitjournal.com/sites/default/files/styles/main_article/public/2022-05/Serge%20-%20photo%20quiz%281%29.jpeg?itok=aZdPXnsK',
    },
    {
      name: 'François Lempereur',
      role: 'Consultant Média-Affaires Publiques',
      company: 'Ex TF1',
      text: "J'ai eu l 'occasion de collaborer avec Hervé lors d'un forum de TF1. Le 1er contact a été tout de suite convivial et pro. J'ai apprécie la réactivité, le professionnalisme et la rigueur mais aussi la bonne humeur et l’énergie d'Hervé et de son équipe. Je garde un excellent souvenir de cette collaboration.",
      image: 'https://media.licdn.com/dms/image/C5603AQH-ZWUMbVGx7w/profile-displayphoto-shrink_800_800/0/1609152945990?e=2147483647&v=beta&t=4rVZo4pt4h4QluygnoD8t5xl239PTc0AgZnJPXF0p9k',
    },
    {
      name: 'Odile Prévot-Mussat',
      role: 'Managing Parter',
      company: 'OM Law & Advisory',
      text: 'Todo',
      image: 'https://media.licdn.com/dms/image/C4E03AQF7xoJblrGtVQ/profile-displayphoto-shrink_400_400/0/1573432030916?e=1683158400&v=beta&t=FsUN0EH4BqramUsxsfVsxGpTnXsXkL78e9NlNt-rM7Y',
    },
    {
      name: 'Marc Perraudin',
      role: 'Rôle 5',
      company: 'Entreprise 5',
      text: 'Témoignage 5',
      image: 'https://res.cloudinary.com/dvzsvgucq/image/upload/v1679685619/2b_en_articleslide_sm2-350x264_ry3jdx.jpg',
    },
    {
      name: 'Maelie Poussier',
      role: 'Lead Teacher & Full Stack Developer',
      company: 'Le Wagon & Drakkar',
      text: 'Todo',
      image: 'https://media.licdn.com/dms/image/C4D03AQHldQfj126wrg/profile-displayphoto-shrink_800_800/0/1600005455734?e=2147483647&v=beta&t=FX1q1aiDao8U2ZOxeZJucabf0XWAp8miEIYzIMNJ3VI',
    },
    {
      name: 'Jean-Baptiste Ancelot',
      role: 'CEO',
      company: 'Wine Explorers',
      text: 'Hervé est un entrepreneur passionné et très inspirant. Il a une grande capacité d’écoute et a très vite compris mes besoins. Il est très réactif et force de proposition. Je recommande vivement Hervé pour tous vos projets !',
      image: 'https://i.ytimg.com/vi/BFPcTHfbt2E/maxresdefault.jpg',
    },
    {
      name: 'Alexis Stephan',
      role: 'CEO',
      company: 'Hello My Business',
      text: 'Todo',
      image: 'https://hellomybusiness.fr/wp-content/uploads/2021/05/1611074903506.jpeg',
    },
    {
      name: 'Sébastien Gachen',
      role: 'CEO',
      company: 'EGIA Capital',
      text: "Développeur Fullstack Web et Entrepreneur expérimenté, je recommande vivement ses services pour tous vos projets. Hervé est quelqu'un de fiable, de confiance et offre toujours des conseils pertinents ainsi que des résultats convaincants en un temps record. En outre, sa nature humaine et bienveillante en font un excellent partenaire de travail.",
      image: 'https://media.licdn.com/dms/image/C4D03AQERxKNJq0dcbg/profile-displayphoto-shrink_800_800/0/1630613830009?e=2147483647&v=beta&t=e2eUCaxif_QUzx-vlsh5QI3hUGULmhmYjy3fdobEX-s',
    },
  ];

  // Sélectionner tous les éléments avec la classe 'testimonial-card'
  const testimonialCards = document.querySelectorAll('.testimonial-card');

  // Fonction pour ouvrir la popup
  function openPopup(index) {
    const testimonial = testimonialsData[index - 1];

    const popupContent = `
    <div class="testimonial-popup">
      <div class="testimonial-popup-image-wrapper">
        <img src="${testimonial.image}" alt="${testimonial.name}" class="testimonial-popup-image">
      </div>
      <div class="testimonial-popup-content">
        <h4 class="testimonial-popup-name">${testimonial.name}</h4>
        <p class="testimonial-popup-role">${testimonial.role} / ${testimonial.company}</p>
        <p class="testimonial-popup-text">${testimonial.text}</p>
        <button class="testimonial-popup-close">X</button>
      </div>
    </div>
  `;

    const popup = document.createElement('div');
    popup.classList.add('testimonial-popup-container');
    popup.innerHTML = popupContent;
    document.body.appendChild(popup);

    setTimeout(() => {
      popup.classList.add('show');
      popup.querySelector('.testimonial-popup').classList.add('show');
    }, 100);

    // Fermer la popup
    popup.querySelector('.testimonial-popup-close').addEventListener('click', () => {
      popup.classList.remove('show');
      popup.querySelector('.testimonial-popup').classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(popup);
      }, 300);
    });

    // Fermer la popup en cliquant à l'extérieur
  popup.addEventListener('click', (e) => {
    if (e.target === popup) {
      popup.classList.remove('show');
      popup.querySelector('.testimonial-popup').classList.remove('show');
      setTimeout(() => {
        document.body.removeChild(popup);
      }, 300);
    }
  });
}

  // Utiliser l'attribut 'id' pour initialiser les écouteurs d'événement
  testimonialsData.forEach((testimonial, index) => {
    const card = document.getElementById(`testimonial-${index + 1}`);
    if (card) {
      card.addEventListener('click', () => {
        openPopup(index + 1);
      });
    }
  });

  // Ajouter la fonction pour obtenir la hauteur de la fenêtre du navigateur
  function getWindowHeight() {
    return window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  }

  // Modifier la fonction qui gère l'apparition des témoignages en fonction du défilement en utilisant cette nouvelle fonction pour ajuster le déclenchement de l'effet
  window.addEventListener('scroll', function () {
    var windowHeight = getWindowHeight();
    var triggerHeight = windowHeight * 0.8; // Ajuster ce multiplicateur (0.8) pour modifier la sensibilité du déclencheur

    var testimonials = document.querySelectorAll('.testimonial-card');
    testimonials.forEach(function (testimonial) {
      var testimonialTop = testimonial.getBoundingClientRect().top;

      if (testimonialTop < triggerHeight) {
        testimonial.classList.add('visible');
      } else {
        testimonial.classList.remove('visible');
      }
    });
  });
});

// Effet Typed.js en header
document.addEventListener('turbo:load', () => {
  setTimeout(() => {
    const typedTextElement = document.getElementById('typed-text');
    const customCursorElement = document.getElementById('custom-cursor');
    typedTextElement.style.visibility = 'visible';

    const typed = new Typed('#typed-text', {
      strings: ['*En vrai, je suis un site imaginé et codé par Hervé.'],
      typeSpeed: 80,
      backSpeed: 0,
      loop: false,
      showCursor: false,
      preStringTyped: function () {
        customCursorElement.style.visibility = 'visible';
      },
      onComplete: function () {
        customCursorElement.style.visibility = 'hidden';
      },
    });
  }, 7000); // Délai de 7 secondes (7000 millisecondes)
});

// Page contact
function updateLabelStyles(input) {
  const label = input.previousElementSibling;
  if (input.value) {
    input.classList.add("filled");
  } else {
    input.classList.remove("filled");
  }
}

document.querySelectorAll(".form-group input, .form-group textarea").forEach((element) => {
  // Gérer les événements "input"
  element.addEventListener("input", (event) => {
    updateLabelStyles(event.target);
  });

  // Gérer les valeurs déjà remplies lors du chargement de la page
  document.addEventListener("turbo:load", () => {
    updateLabelStyles(element);
  });
});


// Page about

document.addEventListener('turbo:load', () => {
  const controller = new ScrollMagic.Controller();

  document.querySelectorAll('.about-parallax-section').forEach(section => {
      new ScrollMagic.Scene({
          triggerElement: section,
          triggerHook: 1,
          duration: '100%'
      })
      .setTween(section, {y: '50%', ease: Linear.easeNone})
      .addTo(controller);
  });
});

// Page projects

document.addEventListener("turbo:load", () => {
  const projects = document.querySelectorAll(".project");

  window.addEventListener("scroll", () => {
    projects.forEach((project) => {
      const rect = project.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      if (rect.top < windowHeight - 100 && rect.bottom > 100) {
        project.classList.add("visible");
      } else {
        project.classList.remove("visible");
      }
    });
  });
});

// Opening animation

function initializeOpeningAnimation() {
  const greetings = ["Bonjour", "Hello", "Kaixo", "Hola", "Hallo", "Ciao", "こんにちは", "안녕하세요"];
  const openingAnimation = document.getElementById("opening-animation");
  const openingText = document.getElementById("opening-text");
  let currentGreetingIndex = 0;

  function changeGreeting() {
    openingText.textContent = greetings[currentGreetingIndex];
    currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
  }

  function hideOpeningAnimation() {
    setTimeout(() => {
      openingAnimation.style.animationPlayState = "running";
    }, 1000);
    setTimeout(() => {
      openingAnimation.classList.add("hidden");
    }, 1500);
  }

  // Réinitialiser l'animation
  openingAnimation.classList.remove("hidden");
  openingAnimation.style.animationPlayState = "paused";

  setInterval(changeGreeting, 200);
  setTimeout(hideOpeningAnimation, 3000);
}

document.addEventListener("turbo:load", initializeOpeningAnimation);
document.addEventListener("turbo:load", () => {
  if (document.location.pathname === "/") {
    initializeOpeningAnimation();
  }
});


// Burger navbar responsive
function setupBurgerMenu() {
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.getElementById("navMenu");

  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("open");
  });
}

document.addEventListener("turbo:load", setupBurgerMenu);
document.addEventListener("DOMContentLoaded", setupBurgerMenu);


// Carousel homepage

document.addEventListener("turbo:load", function() {
  const carousel = document.querySelector(".carousel");
  const items = carousel.querySelectorAll(".carousel-item");
  let currentIndex = 0;
  let nextIndex = 1;

  setInterval(function() {
    items[currentIndex].classList.remove("active");
    items[nextIndex].classList.add("active");

    items[currentIndex].querySelector('img').style.opacity = '0';
    items[nextIndex].querySelector('img').style.opacity = '1';

    currentIndex = nextIndex;
    nextIndex = (nextIndex + 1) % items.length;
  }, 3000);
});
