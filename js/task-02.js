const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const documentElement = document.getElementById('ingredients');

for(let i = 0; i < ingredients.length; i += 1) {
	const listElem = document.createElement('li');
	const textElem = document.createTextNode(ingredients[i]);
    listElem.appendChild(textElem);
    documentElement.appendChild(listElem);
}
