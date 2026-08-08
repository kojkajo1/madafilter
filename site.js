document.addEventListener('DOMContentLoaded', function () {
  var navInner = document.querySelector('.nav-inner');
  var navLinks = document.querySelector('.nav-links');
  if (!navInner || !navLinks) return;

  var btn = document.createElement('button');
  btn.className = 'nav-toggle';
  btn.type = 'button';
  btn.setAttribute('aria-label', 'Menu');
  btn.innerHTML =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7">' +
    '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>' +
    '</svg>';

  navInner.appendChild(btn);

  btn.addEventListener('click', function () {
    var open = navLinks.classList.toggle('open');
    btn.classList.toggle('active', open);
  });

  // close the menu after tapping a link
  navLinks.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      navLinks.classList.remove('open');
      btn.classList.remove('active');
    });
  });
});
