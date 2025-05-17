// cool-effects.js
document.addEventListener('DOMContentLoaded', () => {
  // 动态粒子效果
  if (typeof particlesJS === 'function') {
    particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#3498db' },
        shape: { type: 'circle' },
        opacity: { value: 0.7, random: true },
        size: { value: 3, random: true },
        line_linked: { enable: true, distance: 150, color: '#3498db', opacity: 0.4 },
        move: { enable: true, speed: 2, direction: 'none', random: true }
      },
      interactivity: {
        events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' } },
        modes: { repulse: { distance: 100, duration: 0.4 } }
      },
      retina_detect: true
    });
  }

  // 鼠标跟随光晕效果
  const cursor = document.createElement('div');
  cursor.className = 'cursor-glow';
  cursor.style.position = 'absolute';
  cursor.style.width = '30px';
  cursor.style.height = '30px';
  cursor.style.borderRadius = '50%';
  cursor.style.background = 'rgba(52, 152, 219, 0.3)';
  cursor.style.filter = 'blur(10px)';
  cursor.style.pointerEvents = 'none';
  cursor.style.zIndex = '9999';
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX - 15}px`;
    cursor.style.top = `${e.clientY - 15}px`;
  });

  // 动态标题闪烁
  const titles = document.querySelectorAll('h1, h2, h3');
  titles.forEach(title => {
    title.style.transition = 'color 0.5s ease';
    let isBright = false;
    setInterval(() => {
      isBright = !isBright;
      title.style.color = isBright ? '#e74c3c' : '#ecf0f1';
    }, 3000);
  });
});