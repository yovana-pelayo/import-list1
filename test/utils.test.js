// IMPORT MODULES under test here:
import { renderAnimal, renderDrinks, renderPlayers, renderFilms } from '../utils.js';

const test = QUnit.test;

test('renderAnimal should return a <div> with dog info', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="animal"><h2>DOG</h2><img src="./assets/dog.jpg"><p>Mammal with 4 legs and a cuteness rating of 10.</p></div>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderAnimal({
        type: 'dog',
        numberOfLegs: 4,
        class: 'Mammal',
        cuteness: 10,
        image: 'dog.jpg',
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});

test('renderDrink should return a <li> that says coffee', (expect) => {
    const expected = `<li class="drink">coffee</li>`;

    const actual = renderDrinks('coffee');
    // console.log(actual);
    expect.deepEqual(actual.outerHTML, expected);
    
});
test('renderPlayer should return a <div> with player info', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="player"><h2>SELENE</h2><img src="./assets/selene.png"><p>30</p></div>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderPlayers({
        id:2,
        type: 'Selene',
        class: 'player',
        image: 'selene.png',
        personal: {
            home: 'Underworld',
            age:'30',
            power: 'Slaying Vampires',
        }
    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});
test('renderfilms should return a <div> with player info', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = `<div class="film"><h2>MATRIX RELOADED</h2><h3>The following reviews are out of 10! Most recent reviews are   10,10,9,9,10,9</h3></div>`;

    //Act
    // Call the function you're testing and set the result to a const
    const actual = renderFilms({
        title: 'Matrix Reloaded',
        genre: 'Sci-fi',
        cost: '$6',
        ratingsOutOfTen: ['10', '10', '9', '9', '10', '9'],

    });

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});