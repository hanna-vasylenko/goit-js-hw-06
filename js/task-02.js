const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulRef = document.querySelector('#ingredients');

const listItems = ingredients.map((item) => {
  const liRef = document.createElement('li');
  liRef.classList.add('item');
  liRef.textContent = item;
  return liRef;
});

ulRef.append(...listItems);

// const liRef = document.createElement('li');
// liRef.classList.add('item');

// const list = ulRef.append(liRef);
// const list = ingredients.reduce((str, item) => str + `<li>${item}</li>`, '');
