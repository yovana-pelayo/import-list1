// IMPORT MODULES under test here:
import { renderAnimal, renderDrinks, renderPlayers } from '../utils.js';

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
