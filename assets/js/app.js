document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});










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


function animateNumber(el) {
  var start = 0,
      end = parseInt(el.innerText),
      duration = 1000, // animasyon süresi (ms)
      range = end - start,
      current = start,
      increment = end > start ? 1 : -1,
      stepTime = Math.abs(Math.floor(duration / range)),
      obj = el;

  function animate() {
    var val = Math.round(current);
    if (current == end) {
      cancelAnimationFrame(animate);
    } else {
      current += increment;
      obj.innerText = val;
      requestAnimationFrame(animate);
    }
  }
  animate();
}

document.addEventListener("DOMContentLoaded", function(event) {
  var coffee = document.querySelector('.coffee span'),
      project = document.querySelector('.project span'),
      certificates = document.querySelector('.certificates span'),
      thank = document.querySelector('.thank span');
  
  window.addEventListener('scroll', function() {
    var scrollPosition = window.innerHeight + window.scrollY;
    
    if (coffee.getBoundingClientRect().top < scrollPosition && coffee.innerText == '111') {
      animateNumber(coffee);
    }
    if (project.getBoundingClientRect().top < scrollPosition && project.innerText == '15') {
      animateNumber(project);
    }
    if (certificates.getBoundingClientRect().top < scrollPosition && certificates.innerText == '6') {
      animateNumber(certificates);
    }
    if (thank.getBoundingClientRect().top < scrollPosition && thank.innerText == '3') {
      animateNumber(thank);
    }
  });
});








