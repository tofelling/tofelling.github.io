hexo.extend.filter('before_post_render', function(data) {
  if (data.cover && data.cover.endsWith('.mp4')) {
    data.cover_video = true;
  }
  return data;
});

hexo.extend.helper.register('render_cover', function(cover) {
  if (cover && cover.endsWith('.mp4')) {
    return `<video controls style="width: 100%; max-height: 400px; object-fit: cover; border-radius: 10px;"><source src="${cover}" type="video/mp4">您的浏览器不支持视频播放。</video>`;
  } else {
    return `<div class="post-cover" style="background-image: url(${cover})"></div>`;
  }
});