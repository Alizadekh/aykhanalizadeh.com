document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const coffeeEl = document.querySelector('.coffee');
const plusEl = document.querySelector('.plus');
const coffeeCountEl = coffeeEl.querySelector('span');

let coffeeCount = 0;
function incrementCoffeeCount() {
  coffeeCount++;
  coffeeCountEl.textContent = `${coffeeCount}`;
}
plusEl.addEventListener('click', incrementCoffeeCount);





const projectEl = document.querySelector('.project');
const plus1El = document.querySelector('.plus1');
const projectCountEl = projectEl.querySelector('span');

let projectCount = 0;
function incrementprojectCount() {
  projectCount++;
  projectCountEl.textContent = `${projectCount}`;
}
plus1El.addEventListener('click', incrementprojectCount);





const certificatesEl = document.querySelector('.certificates');
const plus2El = document.querySelector('.plus2');
const certificatesCountEl = certificatesEl.querySelector('span');

let certificatesCount = 0;
function incrementcertificatesCount() {
    certificatesCount++;
    certificatesCountEl.textContent = `${certificatesCount}`;
}
plus2El.addEventListener('click', incrementcertificatesCount);





const thankEl = document.querySelector('.thank');
const plus3El = document.querySelector('.plus3');
const thankCountEl = thankEl.querySelector('span');

let thankCount = 0;
function incrementthankCount() {
    thankCount++;
    thankCountEl.textContent = `${thankCount}`;
}
plus3El.addEventListener('click', incrementthankCount);



const degreeTitle = document.querySelector('.degree-title');
const infoBox = document.querySelector('.info-box');
const toggleBtn = document.querySelector('#toggle-info');

toggleBtn.addEventListener('click', () => {
  infoBox.classList.toggle('show');
});

degreeTitle.addEventListener('click', (event) => {
  if (!event.target.closest('#toggle-info')) {
    infoBox.classList.remove('show');
  }
});

const degree1Title = document.querySelector('.degree-title1');
const infoBox1 = document.querySelector('.info-box1');
const toggleBtn1 = document.querySelector('#toggle-info1');

toggleBtn1.addEventListener('click', () => {
  infoBox1.classList.toggle('show');
});

degree1Title.addEventListener('click', (event) => {
  if (!event.target.closest('#toggle-info1')) {
    infoBox.classList.remove('show');
  }
});


function toggleNavbar() {
  var navbarContent = document.getElementById("mobile-navbar-content");
  if (navbarContent.style.display === "block") {
    navbarContent.style.display = "none";
  } else {
    navbarContent.style.display = "block";
  }
}


const sections = document.querySelectorAll('.right section');

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
};

const runAnimation = () => {
  sections.forEach((section) => {
    if (isInViewport(section)) {
      section.classList.add('animate-in');
    }
  });
};

window.addEventListener('scroll', () => {
  runAnimation();
});



