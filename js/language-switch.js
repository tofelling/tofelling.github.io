// language-switch.js
document.addEventListener('DOMContentLoaded', () => {
  const langSwitch = document.createElement('button');
  langSwitch.textContent = '切换语言 (ZH/EN)';
  langSwitch.style.position = 'fixed';
  langSwitch.style.top = '10px';
  langSwitch.style.right = '150px';
  langSwitch.style.padding = '5px 10px';
  document.body.appendChild(langSwitch);

  const translations = {
    zh: {
      welcome: '欢迎访问我的博客！',
      title: '博客标题',
      content: '这是博客内容。'
    },
    en: {
      welcome: 'Welcome to my blog!',
      title: 'Blog Title',
      content: 'This is blog content.'
    }
  };

  let currentLang = 'zh';
  langSwitch.addEventListener('click', () => {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    langSwitch.textContent = `切换语言 (${currentLang.toUpperCase()})`;
    document.querySelectorAll('[data-translate]').forEach(el => {
      const key = el.getAttribute('data-translate');
      el.textContent = translations[currentLang][key];
    });
    showNotification(`语言已切换至 ${currentLang.toUpperCase()}`);
  });

  // 示例用法（需在 HTML 中添加 data-translate）
  // <h1 data-translate="title"></h1>
  // <p data-translate="content"></p>
});