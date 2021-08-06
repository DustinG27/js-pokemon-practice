// grabbing the section container from the html
const container = document.querySelector('#container');

// placing the base url into a variable so we can edit the link
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

// for loop for x number to be placed in pokemon link
for(let i = 1; i < 151; i++) {
//creating pokemon div to wrap elements, a label span for text, and img element for img
const pokemon = document.createElement('div');
const label = document.createElement('span');
label.innerText = `${i}`;
const newImg = document.createElement('img');
// creating the img element and completing the baseURL
newImg.src = `${baseURL}${i}.png`;
// appending div, span, and image to html
pokemon.appendChild(newImg);
pokemon.appendChild(label);
container.appendChild(pokemon);
};
