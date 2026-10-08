// Highlight the current step in the sticky map while scrolling
const links = document.querySelectorAll('.map a');
const byId = Object.fromEntries([...links].map(a => [a.getAttribute('href').slice(1), a]));
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    links.forEach(a => a.classList.remove('active'));
    byId[e.target.id]?.classList.add('active');
  });
}, { rootMargin: '-40% 0px -55% 0px' });
document.querySelectorAll('main section').forEach(s => observer.observe(s));
