// mouse-follow.js
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.createElement('div');
  cursor.className = 'cursor-follow';
  cursor.style.position = 'absolute';
  cursor.style.width = '20px';
  cursor.style.height = '20px';
  cursor.style.borderRadius = '50%';
  cursor.style.backgroundColor = 'rgba(52, 152, 219, 0.5)';
  cursor.style.pointerEvents = 'none';
  cursor.style.zIndex = '9999';
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX - 10}px`;
    cursor.style.top = `${e.clientY - 10}px`;
  });
});