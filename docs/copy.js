// Add a "Copy" button to every prompt block
const labels = {
  en: ['Copy', 'Copied!'],
  fr: ['Copier', 'Copié !'],
  es: ['Copiar', '¡Copiado!'],
  de: ['Kopieren', 'Kopiert!'],
  pt: ['Copiar', 'Copiado!'],
  zh: ['复制', '已复制！'],
};
const [copy, copied] = labels[document.documentElement.lang.slice(0, 2)] || labels.en;

document.querySelectorAll('pre.prompt').forEach(pre => {
  const btn = document.createElement('button');
  btn.className = 'copy-btn';
  btn.type = 'button';
  btn.textContent = copy;
  btn.addEventListener('click', async () => {
    const text = pre.querySelector('code').textContent;
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // Fallback for browsers that block the clipboard API on file://
      const range = document.createRange();
      range.selectNodeContents(pre.querySelector('code'));
      getSelection().removeAllRanges();
      getSelection().addRange(range);
      document.execCommand('copy');
      getSelection().removeAllRanges();
    }
    btn.textContent = copied;
    setTimeout(() => { btn.textContent = copy; }, 1500);
  });
  pre.append(btn);
});
