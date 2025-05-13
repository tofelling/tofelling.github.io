// 鼠标跟随效果
const cursorFollow = document.createElement('div');
cursorFollow.className = 'cursor-follow';
document.body.appendChild(cursorFollow);

document.addEventListener('mousemove', (e) => {
  cursorFollow.style.left = e.pageX - 10 + 'px';
  cursorFollow.style.top = e.pageY - 10 + 'px';
});

// 滚动进度条
const scrollProgress = document.createElement('div');
scrollProgress.id = 'scroll-progress';
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', () => {
  const winScroll = document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrolled = (winScroll / height) * 100;
  scrollProgress.style.width = scrolled + '%';
});