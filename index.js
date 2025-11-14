const btnHamburger = document.getElementById('btnHamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const btnClose = document.getElementById('btnCloseMenu');

    btnHamburger?.addEventListener('click', () => {
      mobileMenu.classList.add('open');
    });
    btnClose?.addEventListener('click', () => {
      mobileMenu.classList.remove('open');
    });
    document.querySelectorAll('.mobile-link').forEach(el => {
      el.addEventListener('click', () => mobileMenu.classList.remove('open'));
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });
    const reveals = document.querySelectorAll('.reveal');
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('appear');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    reveals.forEach(r => io.observe(r));
    document.getElementById('year').textContent = new Date().getFullYear();