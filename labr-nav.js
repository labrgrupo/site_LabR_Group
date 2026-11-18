// Nav dropdown with close delay — prevents accidental closing when cursor briefly leaves
(function(){
  const drops = document.querySelectorAll('.nav-links .has-drop');
  drops.forEach(d => {
    let closeTimer = null;
    const open  = () => { clearTimeout(closeTimer); d.classList.add('open'); };
    const close = () => { closeTimer = setTimeout(() => d.classList.remove('open'), 220); };
    d.addEventListener('mouseenter', open);
    d.addEventListener('mouseleave', close);
    d.addEventListener('focusin',  open);
    d.addEventListener('focusout', close);
  });
})();

// Auto-mark active nav item based on current URL
(function(){
  const path = (location.pathname.split('/').pop() || 'index.html').toLowerCase();
  // Clear any pre-existing active classes to avoid duplicates
  document.querySelectorAll('.labr-nav .nav-links a.active, .nav-mobile a.active')
    .forEach(a => a.classList.remove('active'));

  // Desktop top-level links
  document.querySelectorAll('.labr-nav .nav-links > li > a').forEach(a => {
    const href = (a.getAttribute('href') || '').toLowerCase();
    if (href && href === path) a.classList.add('active');
  });

  // Dropdown items: mark parent top-level link as active if any child matches
  document.querySelectorAll('.labr-nav .nav-links .has-drop').forEach(li => {
    const matchInside = [...li.querySelectorAll('.drop a')].some(a =>
      (a.getAttribute('href') || '').toLowerCase() === path
    );
    if (matchInside) {
      const top = li.querySelector(':scope > a');
      if (top) top.classList.add('active');
      // Also highlight the specific child
      li.querySelectorAll('.drop a').forEach(a => {
        if ((a.getAttribute('href') || '').toLowerCase() === path) a.classList.add('active');
      });
    }
  });

  // Mobile nav
  document.querySelectorAll('.nav-mobile a').forEach(a => {
    if ((a.getAttribute('href') || '').toLowerCase() === path) a.classList.add('active');
  });
})();
