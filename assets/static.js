document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('[data-spotify-player]').forEach(function (link) {
    link.addEventListener('click', function (event) {
      event.preventDefault();
      var dialog = document.createElement('dialog');
      dialog.className = 'music-player';
      var close = document.createElement('button');
      close.textContent = 'Schließen';
      close.addEventListener('click', function () { dialog.close(); });
      var frame = document.createElement('iframe');
      frame.src = link.getAttribute('data-spotify-player');
      frame.title = 'Elisa B. auf Spotify';
      frame.allow = 'autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture';
      dialog.append(close, frame);
      document.body.appendChild(dialog);
      dialog.addEventListener('close', function () { dialog.remove(); });
      dialog.addEventListener('click', function (e) { if (e.target === dialog) dialog.close(); });
      dialog.showModal();
    });
  });
  var menu = document.querySelector('.toggle_navigation');
  if (menu) {
    menu.setAttribute('role', 'button');
    menu.setAttribute('tabindex', '0');
    menu.setAttribute('aria-label', 'Menü öffnen oder schließen');
    menu.setAttribute('aria-expanded', 'false');
    menu.addEventListener('click', function () {
      setTimeout(function () { menu.setAttribute('aria-expanded', document.body.classList.contains('open_mobile_navigation') ? 'true' : 'false'); }, 0);
    });
    menu.addEventListener('keydown', function (e) { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); menu.click(); } });
  }
  document.querySelectorAll('form').forEach(function (f) { f.addEventListener('submit', function (e) { e.preventDefault(); }); });
});
