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









