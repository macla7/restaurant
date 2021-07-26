export default function makeMenu(e, Icon) {

  console.log(e)
  const title = document.createElement('h1');
  title.innerHTML = 'Mitch\'s Mushrooms'
  e.appendChild(title);

  const icon = new Image();
  icon.src = Icon

  e.appendChild(icon);
  e.classList.add('home');

  return e
}
