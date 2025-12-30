// Menu toggle for small screens
const menuToggle = document.getElementById('menuToggle');
const primaryNav = document.getElementById('primaryMenu');
menuToggle?.addEventListener('click', ()=>{
  const expanded = menuToggle.getAttribute('aria-expanded') === 'true';
  menuToggle.setAttribute('aria-expanded', String(!expanded));
  primaryNav?.setAttribute('aria-hidden', String(expanded));
});

// Smooth scrolling for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
  a.addEventListener('click', (e)=>{
    const href = a.getAttribute('href');
    if(href === '#' || href === '#0') return;
    const target = document.querySelector(href);
    if(target){
      e.preventDefault();
      target.scrollIntoView({behavior:'smooth',block:'start'});
      // close menu on small screens
      if(window.innerWidth < 840){
        menuToggle?.setAttribute('aria-expanded','false');
        primaryNav?.setAttribute('aria-hidden','true');
      }
    }
  })
});

// Modal for project details
const modal = document.getElementById('modal');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');
const projectDetails = {
  1: {title:'Bookstore App', body:'A bookstore built for Book lovers. It allows users to download books of all geners straight to their devices. Check it out https://that-techgirl.github.io/Book-store-App-Fav-s-Library/'},
  2: {title:'Legend Logistics', body:' A website built for a logistics company. check out our link; https://that-techgirl.github.io/Logistics-website/ '},
  3: {title:'Modern Landing Page', body:'A modern Landing page built for a food company. Check it out https://that-techgirl.github.io/Modern-Landing-page/'}
};

document.querySelectorAll('[data-open]').forEach(btn=>{
  btn.addEventListener('click', ()=>{
    const id = btn.getAttribute('data-open');
    const info = projectDetails[id] || {title:'Project', body:'Details coming soon.'};
    modalContent.innerHTML = `<h3>${info.title}</h3><p>${info.body}</p>`;
    modal.setAttribute('aria-hidden','false');
  })
});

modalClose?.addEventListener('click', ()=>{
  modal.setAttribute('aria-hidden','true');
});
modal?.addEventListener('click', (e)=>{
  if(e.target === modal) modal.setAttribute('aria-hidden','true');
});

// Simple contact form handler (no network) - validates and shows success
const contactForm = document.getElementById('contactForm');
const formStatus = document.getElementById('formStatus');
contactForm?.addEventListener('submit', (e)=>{
  e.preventDefault();
  const form = e.target;
  const data = new FormData(form);
  const name = data.get('name')?.toString().trim();
  const email = data.get('email')?.toString().trim();
  const message = data.get('message')?.toString().trim();
  if(!name || !email || !message){
    formStatus.textContent = 'Please fill the required fields.';
    return;
  }
  // fake send
  setTimeout(()=>{
    formStatus.textContent = 'Thanks for filling out the form. To get faster response, send us a direct Email';
    form.reset();
  },500);
});
