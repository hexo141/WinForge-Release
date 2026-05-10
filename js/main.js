NProgress.configure({
  showSpinner: false,
  speed: 300,
  minimum: 0.1,
  easing: 'ease',
  trickleSpeed: 200
});

NProgress.start();

window.addEventListener('load', function() {
  NProgress.done();
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});
