
  const menuIcon = document.getElementById('menu-icon');
  const navbar = document.querySelector('.navbar');

  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
    menuIcon.classList.toggle('bx-x'); // toggle icon to X
  });


function myfunction() {
  const body = document.body;
  const icon = document.getElementById("theme-icon");

  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    icon.classList.remove("bxs-moon");
    icon.classList.add("bxs-sun");
  } else {
    icon.classList.remove("bxs-sun");
    icon.classList.add("bxs-moon");
  }
}


 //technical skills
const aboutSection = document.querySelector('#about');
const progressBars = document.querySelectorAll('.progress-bar');
const percentLabels = document.querySelectorAll('.skill-percent');

function animateSkills() {
  progressBars.forEach((bar, index) => {
    const target = parseInt(bar.getAttribute('data-percent'));
    bar.style.width = '0%';
    percentLabels[index].innerText = '0%';

    let current = 0;
    const interval = setInterval(() => {
      if (current >= target) {
        clearInterval(interval);
      } else {
        current++;
        bar.style.width = `${current}%`;
        percentLabels[index].innerText = `${current}%`;
      }
    }, 15);
  });
}

// Observer to trigger animation on enter AND reset on exit
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateSkills();
    } else {
      // Reset when the section is out of view
      progressBars.forEach((bar, index) => {
        bar.style.width = '0%';
        percentLabels[index].innerText = '0%';
      });
    }
  });
}, {
  threshold: 0.4,
});

observer.observe(aboutSection);

//professional skills
const aboutSections = document.querySelector('#about');
const circularSkills = document.querySelectorAll('.circle-skill');

// Animate circular progress
function animateCircularSkills() {
  circularSkills.forEach(skill => {
    const circle = skill.querySelector('.progress-ring');
    const text = skill.querySelector('.circle-value');
    const target = parseInt(skill.getAttribute('data-percent'), 10);
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;

    let current = 0;

    const interval = setInterval(() => {
      if (current > target) {
        clearInterval(interval);
      } else {
        const offset = circumference - (current / 100) * circumference;
        circle.style.strokeDashoffset = offset;
        text.textContent = `${current}%`;
        current++;
      }
    }, 15);
  });
}

// Reset circular progress
function resetCircularSkills() {
  circularSkills.forEach(skill => {
    const circle = skill.querySelector('.progress-ring');
    const text = skill.querySelector('.circle-value');
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = `${circumference}`;
    circle.style.strokeDashoffset = `${circumference}`;
    text.textContent = '0%';
  });
}

// Observer
const observers = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCircularSkills();
    } else {
      resetCircularSkills();
    }
  });
}, {
  threshold: 0.4
});

// Start observing
observers.observe(aboutSections);

//Scroll behaviour
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 100; // Adjust based on your header height
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

  // Optional: change footer background on scroll (example enhancement)
  window.addEventListener('scroll', () => {
    const footer = document.querySelector('.ftco-footer');
    if (window.scrollY > 100) {
      footer.style.background = '#111';
    } else {
      footer.style.background = '#222';
    }
  });



