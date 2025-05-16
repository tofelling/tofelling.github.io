// image-zoom.js
document.addEventListener('DOMContentLoaded', () => {
  const images = document.querySelectorAll('.post-content img');
  images.forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
      const overlay = document.createElement('div');
      overlay.id = 'image-overlay';
      overlay.style.position = 'fixed';
      overlay.style.top = '0';
      overlay.style.left = '0';
      overlay.style.width = '100%';
      overlay.style.height = '100%';
      overlay.style.background = 'rgba(0, 0, 0, 0.9)';
      overlay.style.display = 'flex';
      overlay.style.alignItems = 'center';
      overlay.style.justifyContent = 'center';
      overlay.style.zIndex = '10000';

      const zoomedImg = new Image();
      zoomedImg.src = img.src;
      zoomedImg.style.maxWidth = '90%';
      zoomedImg.style.maxHeight = '90%';
      zoomedImg.style.cursor = 'zoom-out';
      overlay.appendChild(zoomedImg);

      document.body.appendChild(overlay);

      zoomedImg.addEventListener('click', () => overlay.remove());
      overlay.addEventListener('click', (e) => {
        if (e.target === overlay) overlay.remove();
      });
    });
  });
});