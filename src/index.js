import { navTabs } from './structure.js';
import makeHome from './homepage';
import { makeMenu, makeExamples } from './menu';
import makeContact from './contact.js';
import './style.css'
import Icon from './download.jpeg';
import Img1 from './Mushrooms/images-1.jpg'
import Img2 from './Mushrooms/images-2.jpg'
import Img3 from './Mushrooms/images.jpg'

const body = document.getElementsByTagName('body')[0]
navTabs(body);

const element = document.createElement('div')
const home = document.getElementById('home-btn')
const menu = document.getElementById('menu-btn')
const contact = document.getElementById('contact-btn')

element.setAttribute('id', 'content')
body.appendChild(element)
makeHome(element, Icon);

const clearer = () => {
  element.innerHTML = '';
  element.classList = '';
}

home.addEventListener('click', (e) => {
  clearer();
  makeHome(element,Icon);
})

menu.addEventListener('click', (e) => {
  clearer();
  makeMenu(element);
  makeExamples(element, [Img1, Img2, Img3]);
})

contact.addEventListener('click', (e) => {
  clearer();
  makeContact(element);
})






