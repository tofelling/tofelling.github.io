// reading-time.js
document.addEventListener('DOMContentLoaded', () => {
  const posts = document.querySelectorAll('.post-content');
  posts.forEach(post => {
    const text = post.innerText;
    const wordsPerMinute = 200; // 每分钟阅读200字
    const wordCount = text.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / wordsPerMinute);
    const timeDisplay = document.createElement('div');
    timeDisplay.className = 'reading-time';
    timeDisplay.textContent = `Estimated Reading Time: ${readingTime} min${readingTime > 1 ? 's' : ''}`;
    timeDisplay.style.fontSize = '14px';
    timeDisplay.style.color = '#666';
    timeDisplay.style.marginTop = '10px';
    post.parentNode.insertBefore(timeDisplay, post.nextSibling);
  });
});