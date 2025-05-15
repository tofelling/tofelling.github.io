// 可加在 themes/butterfly/source/js/custom.js
document.body.addEventListener('click', function (e) {
  const words = ["💥", "🚀", "✨", "🔥", "❤", "Cool!", "Hi~"];
  const word = words[Math.floor(Math.random() * words.length)];
  const span = document.createElement('span');
  span.textContent = word;
  span.style.cssText = `
    z-index: 9999;
    position: fixed;
    font-weight: bold;
    color: #ff4081;
    left: ${e.clientX}px;
    top: ${e.clientY - 20}px;
    font-size: 16px;
    pointer-events: none;
    user-select: none;
    animation: moveUp 800ms ease-out forwards;
  `;
  document.body.appendChild(span);
  span.addEventListener('animationend', () => span.remove());
});

// 加入 CSS 动画（custom.css）
/*
@keyframes moveUp {
  0% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(-60px); }
}
*/

document.addEventListener("DOMContentLoaded", () => {
  document.body.style.opacity = 0;
  setTimeout(() => {
    document.body.style.transition = 'opacity 1s';
    document.body.style.opacity = 1;
  }, 100);
});
