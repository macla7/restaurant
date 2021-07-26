export default function makeContact(e) {

  const contact = document.createElement('h1');
  contact.innerHTML = 'Contact Details'
  contact.classList.add('secondary-titles')

  e.appendChild(contact);

  const contactOne = document.createElement('article')
  const contactTwo = document.createElement('article')

  const phone = document.createElement('h2')
  phone.innerHTML = 'Phone Number: '

  const phoneNum = document.createElement('p')
  phoneNum.innerHTML = '0412 345 678'

  const email = document.createElement('h2')
  email.innerHTML = 'Email Address: '

  const emailAdd = document.createElement('p')
  emailAdd.innerHTML = 'mitch3zzmushi3s@bing.bong.au'

  contactOne.appendChild(phone);
  contactOne.appendChild(phoneNum);
  e.appendChild(contactOne);

  contactTwo.appendChild(email);
  contactTwo.appendChild(emailAdd);
  e.appendChild(contactTwo);

  return e
}