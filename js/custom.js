// nav-animation.js
window.addEventListener('load', () => {
  const nav = document.getElementById('page-header');
  if (nav) {
    nav.classList.add('slide-down');
  }
});

// nav-scroll.js
window.addEventListener('scroll', () => {
  const nav = document.getElementById('page-header');
  if (nav) {
    const scrollPosition = window.scrollY;
    if (scrollPosition > 100 && !nav.classList.contains('slide-down')) {
      nav.classList.add('slide-down');
    }
  }
});

// nav-click.js
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('page-header');
  const triggerButton = document.createElement('button');
  triggerButton.textContent = 'Show Navigation';
  triggerButton.style.position = 'fixed';
  triggerButton.style.top = '10px';
  triggerButton.style.right = '10px';
  document.body.appendChild(triggerButton);

  triggerButton.addEventListener('click', () => {
    if (nav) {
      nav.classList.toggle('slide-down');
    }
  });
});

// nav-hover.js
document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('page-header');
  if (nav) {
    nav.addEventListener('mouseenter', () => {
      nav.classList.add('slide-down');
    });
    nav.addEventListener('mouseleave', () => {
      nav.classList.remove('slide-down');
    });
  }
});