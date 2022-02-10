// import functions and grab DOM elements
import { animals } from './animals.js';
import { renderAnimal } from './utils.js';
import { drinks } from './drinks.js';
import { renderDrinks } from './utils.js';
import { players } from './drinks.js';
import { renderPlayer } from './utils.js';
const animalList = document.getElementById('animal-list');
for (let animal of animals) {
    const div = renderAnimal(animal);
    animalList.append(div);
}

const drinkList = document.getElementById('drink-list');
for (let drink of drinks) {
    const li = renderDrinks(drink);
    drinkList.append(li);
    
}
const playerList = document.getElementById('player-list');
for (let player of players) {
    const div = renderPlayer(player);
    playerList.append(div);
}