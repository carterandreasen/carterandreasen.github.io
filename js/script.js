/* ==========================================================================
   PORTFOLIO SITE SCRIPT
   ==========================================================================
   Small, dependency-free JS shared by every page. Two jobs only:
   1. Toggle the mobile navigation menu open/closed.
   2. Keep the footer's copyright year current automatically.

   There's no framework here on purpose — for a site this size, plain
   JS is easier to read, debug, and host anywhere (including GitHub
   Pages) with zero build step.
   ========================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* --- 1. Mobile nav toggle -------------------------------------------
     On screens under 800px, the sidebar's nav links are hidden until
     the person taps the "Menu" button. See the .nav-toggle and
     .sidebar.is-open rules in css/style.css for the matching styles. */
  var toggleButton = document.getElementById('navToggle');
  var sidebar = document.getElementById('sidebar');

  if (toggleButton && sidebar) {
    toggleButton.addEventListener('click', function () {
      var isOpen = sidebar.classList.toggle('is-open');
      toggleButton.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      toggleButton.textContent = isOpen ? 'Close' : 'Menu';
    });

    // Close the menu automatically after a nav link is tapped, so
    // visitors land on the new page without the menu still open.
    var navLinks = sidebar.querySelectorAll('.site-nav a');
    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        sidebar.classList.remove('is-open');
        toggleButton.setAttribute('aria-expanded', 'false');
        toggleButton.textContent = 'Menu';
      });
    });
  }

  /* --- 2. Auto-update footer year --------------------------------------
     Finds every element with id="year" (one per page, in the footer)
     and fills in the current year, so you never have to update a
     hardcoded "© 2026" by hand. */
  var yearEls = document.querySelectorAll('#year');
  yearEls.forEach(function (el) {
    el.textContent = new Date().getFullYear();
  });

});
