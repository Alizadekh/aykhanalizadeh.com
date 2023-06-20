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



function switchThemeToBlack() {
  document.getElementById("sunicon").style.backgroundColor = "transparent"
  document.getElementById("sunicon").style.transition = "background-color 0.5s"
  document.getElementById("moonicon").style.backgroundColor = "rgb(167, 167, 167)"




  document.getElementsByTagName("body")[0].style.backgroundColor = "black";
  document.getElementsByTagName("body")[0].style.transition = "background-color 0.5s"
  document.getElementById("left-part").style.backgroundColor = "#393646"
  document.getElementById("name").style.color = "white"
  document.getElementById("profession").style.color = "white"
  
  let navbarLinks = document.getElementById("navbar").querySelectorAll("a")
  for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].style.color = "white"
  }
  document.getElementById("footer").querySelector("p").style.color = "white"
  document.getElementById("home").style.color =  "white"
  document.getElementById("home").querySelector("button").style.color = "white"
  document.getElementById("home").querySelector("button").style.borderColor = "white"
  document.getElementById("home").querySelector("button").addEventListener("mouseover", function() {
    this.style.backgroundColor = "white";
    this.style.color = "black"
  document.getElementById("home").querySelector("button").addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
    this.style.color = "white"
    });
  });


  let abouttags = document.getElementById("about").querySelector("h3")
  abouttags.style.color = "white"

  let abouttagsp = document.getElementById("about").querySelectorAll("p")
  for (let i = 0; i < abouttagsp.length; i++) {
    abouttagsp[i].style.color = "white"
  }
  document.getElementById("about").querySelector("button").style.color = "white"
  document.getElementById("about").querySelector("button").style.borderColor = "white"
  document.getElementById("about").querySelector("button").addEventListener("mouseover", function() {
    this.style.backgroundColor = "white";
    this.style.color = "black"
  document.getElementById("about").querySelector("button").addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
    this.style.color = "white"
    });
  });

  let boxes = document.getElementById("about-boxes").querySelectorAll("div")
  for (i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "#393646"
  }
  let boxtitles = document.getElementById("about-boxes").querySelectorAll("h3")
  for (i = 0; i < boxtitles.length; i++) {
    boxtitles[i].style.color = "white"
  }



  document.getElementById("skills").querySelector("h3").style.color = "White"
  let skillsparagraph = document.getElementById("skills").querySelectorAll("p")
  for (i = 0; i < skillsparagraph.length; i++) {
    skillsparagraph[i].style.color = "white"
  }


  document.getElementById("edu-title").querySelector("p").style.color = "white"
  document.getElementById("edu-title").querySelector("h3").style.color = "white"
  document.getElementById("info-box").querySelector("p").style.color = "white"
  document.getElementById("info-box1").querySelector("p").style.color = "white"


  const experience = document.getElementById("experience").querySelectorAll("div")
  for (i =0 ; i < experience.length; i++) {
    experience[i].style.color = "white"
  }


  const contact = document.getElementById("contact").querySelectorAll("div")
  for (i=0; i < contact.length; i++) {
    contact[i].style.color = "white"
  }
  document.getElementById("contact").querySelector("a").style.color = "white"

  const inputs =  document.getElementById("contact-left").querySelectorAll("all-info")
  for (i = 0; i < inputs.length; i++) {
    const logo = inputs.querySelectorAll("c-logo")
    for (i = 0; i < logo.length; i++) {
      logo[i].style.backgroundColor = "#393646"
    }
  }



  

}







function switchThemeToWhite() {
  document.getElementById("sunicon").style.backgroundColor = "";
  document.getElementById("moonicon").style.backgroundColor = "";

  document.body.style.backgroundColor = "white";
  document.getElementById("left-part").style.backgroundColor = "rgb(242, 243, 247)";
  document.getElementById("name").style.color = "black";
  document.getElementById("profession").style.color = "black";

  let navbarLinks = document.getElementById("navbar").querySelectorAll("a");
  for (let i = 0; i < navbarLinks.length; i++) {
    navbarLinks[i].style.color = "black";
  }

  document.getElementById("footer").querySelector("p").style.color = "black";
  document.getElementById("home").style.color = "black";
  document.getElementById("home").querySelector("button").style.color = "black"
  document.getElementById("home").querySelector("button").style.borderColor = "black"
  document.getElementById("home").querySelector("button").addEventListener("mouseover", function() {
    this.style.backgroundColor = "black";
    this.style.color = "white"
  document.getElementById("home").querySelector("button").addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
    this.style.color = "black"
    });
  });

  let abouttags = document.getElementById("about").querySelector("h3");
  abouttags.style.color = "black";

  let abouttagsp = document.getElementById("about").querySelectorAll("p");
  for (let i = 0; i < abouttagsp.length; i++) {
    abouttagsp[i].style.color = "black";
  }

  document.getElementById("about").querySelector("button").style.color = "black"
  document.getElementById("about").querySelector("button").style.borderColor = "black"
  document.getElementById("about").querySelector("button").addEventListener("mouseover", function() {
    this.style.backgroundColor = "black";
    this.style.color = "white"
  document.getElementById("about").querySelector("button").addEventListener("mouseout", function() {
    this.style.backgroundColor = "";
    this.style.color = "black"
    });
  });

  let boxes = document.getElementById("about-boxes").querySelectorAll(".box");
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.backgroundColor = "";
  }

  let boxtitles = document.getElementById("about-boxes").querySelectorAll("h3");
  for (let i = 0; i < boxtitles.length; i++) {
    boxtitles[i].style.color = "black";
  }

  document.getElementById("skills").querySelector("h3").style.color = "black";
  let skillsparagraph = document.getElementById("skills").querySelectorAll("p");
  for (let i = 0; i < skillsparagraph.length; i++) {
    skillsparagraph[i].style.color = "";
  }

  document.getElementById("edu-title").querySelector("p").style.color = "";
  document.getElementById("edu-title").querySelector("h3").style.color = "";
  document.getElementById("info-box").querySelector("p").style.color = "";
  document.getElementById("info-box1").querySelector("p").style.color = "";

  const experience = document.getElementById("experience").querySelectorAll("div");
  for (let i = 0; i < experience.length; i++) {
    experience[i].style.color = "";
  }

  const contact = document.getElementById("contact").querySelectorAll("div");
  for (let i = 0; i < contact.length; i++) {
    contact[i].style.color = "black";
  }
  document.getElementById("contact").querySelector("a").style.color = "";

  const inputs = document.getElementById("contact-left").querySelectorAll(".all-info");
  for (let i = 0; i < inputs.length; i++) {
    const logos = inputs[i].querySelectorAll(".c-logo");
    for (let j = 0; j < logos.length; j++) {
      logos[j].style.backgroundColor = "";
    }
  }
}


















