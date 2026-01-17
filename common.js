// Theme Management
function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
}

function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

// Back to Top Button
function initBackToTop() {
  const backToTop = document.getElementById('backToTop');
  if (!backToTop) return;

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTop.classList.add('visible');
    } else {
      backToTop.classList.remove('visible');
    }
  });
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Analytics
function getElementType(element) {
  if (!element) return 'unknown';
  if (element.tagName === 'IMG') return 'image';
  if (element.tagName === 'A') return 'link';
  if (element.tagName === 'TEXTAREA' || element.tagName === 'INPUT') return 'text';
  if (element.tagName === 'SELECT') return 'drop-down';
  if (element.tagName === 'BUTTON') return 'button';
  if (element.tagName.match(/^H[1-6]$/)) return 'heading';
  return element.tagName.toLowerCase();
}

function initAnalytics() {
  const timestamp = new Date().toISOString();
  console.log(`${timestamp} , view , page`);

  document.addEventListener('click', (e) => {
    const timestamp = new Date().toISOString();
    const type = 'click';
    const objectType = getElementType(e.target);
    console.log(`${timestamp} , ${type} , ${objectType}`);
  });
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initBackToTop();
  initAnalytics();
});
