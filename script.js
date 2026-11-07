// Filters work entirely in the browser, so GitHub Pages needs no backend.
const filters = document.querySelectorAll('[data-filter]');
const projects = document.querySelectorAll('.project[data-tags]');
filters.forEach(button => button.addEventListener('click', () => {
  const choice = button.dataset.filter;
  filters.forEach(other => {
    const active = other === button;
    other.classList.toggle('active', active);
    other.setAttribute('aria-pressed', String(active));
  });
  projects.forEach(project => {
    project.hidden = choice !== 'all' && !project.dataset.tags.split(' ').includes(choice);
  });
}));
document.querySelector('#year').textContent = new Date().getFullYear();
