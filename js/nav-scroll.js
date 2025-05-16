// reading-progress.js
window.addEventListener('load', () => {
  const nav = document.getElementById('page-header');
  if (nav) {
    const progressBar = document.createElement('div');
    progressBar.id = 'reading-progress';
    progressBar.style.position = 'absolute';
    progressBar.style.bottom = '0';
    progressBar.style.left = '0';
    progressBar.style.height = '4px';
    progressBar.style.backgroundColor = '#3498db';
    progressBar.style.width = '0';
    progressBar.style.transition = 'width 0.3s ease';
    nav.appendChild(progressBar);

    window.addEventListener('scroll', () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPosition = window.scrollY;
      const progress = (scrollPosition / totalHeight) * 100;
      progressBar.style.width = `${progress}%`;
    });
  }
});