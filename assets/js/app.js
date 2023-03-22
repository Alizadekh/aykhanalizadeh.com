// Sol taraftaki menüdeki bağlantılara tıklandığında sayfayı kaydırma işlemi
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
