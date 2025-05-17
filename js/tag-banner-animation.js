// tag-banner-animation.js
document.addEventListener('DOMContentLoaded', () => {
  const banner = document.querySelector('#banner');
  if (banner) {
    // 添加视差效果
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      banner.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    });

    // 动态加载标题
    const tagTitle = document.createElement('h1');
    tagTitle.className = 'tag-title';
    tagTitle.textContent = document.querySelector('h1')?.textContent || '标签';
    banner.appendChild(tagTitle);
  }
});