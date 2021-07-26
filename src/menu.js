const makeMenu = (e) => {

  const listCont = document.createElement('section')
  const list = document.createElement('ul')
  
  listCont.appendChild(list);

  for (let i =0; i < 10; i++) {
    let listing = document.createElement('li');
    listing.innerHTML = `Mushroom variety ${i+1}`;
    list.appendChild(listing);
  }

  e.appendChild(listCont)
  
  return e
}

const makeExamples = (e, imageArray) => {
  const listCont = document.createElement('section')
  const list = document.createElement('ul')
  
  listCont.appendChild(list);

  for (let i = 0; i < imageArray.length; i++) {
    let listing = document.createElement('li');
    const fig = document.createElement('figure');
    const figcaption = document.createElement('figcaption');
    figcaption.innerHTML = `Mushroom variety '${i}' in action! Mmmm!`

    const exampleImg = new Image();
    exampleImg.src = imageArray[i];

    fig.appendChild(exampleImg);
    fig.appendChild(figcaption);
    listing.appendChild(fig);
    list.appendChild(listing);
  }

  e.appendChild(listCont)
  e.classList.add('menu');
  return e
}

export { makeMenu, makeExamples }

