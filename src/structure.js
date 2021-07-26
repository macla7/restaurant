export function navTabs(e) {

  const nav = document.createElement('nav');

  const homeBtn = document.createElement('button');
  homeBtn.setAttribute('id', 'home-btn')
  homeBtn.innerHTML = 'Home';

  const menuBtn = document.createElement('button');
  menuBtn.setAttribute('id', 'menu-btn')
  menuBtn.innerHTML = 'Menu';

  const contactBtn = document.createElement('button');
  contactBtn.setAttribute('id', 'contact-btn')
  contactBtn.innerHTML = 'Contact';


  nav.appendChild(homeBtn);
  nav.appendChild(menuBtn);
  nav.appendChild(contactBtn);
  e.appendChild(nav)
  return e
}