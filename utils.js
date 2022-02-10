export function renderAnimal(animal) {
    const div = document.createElement('div');
    div.classList.add('animal');
    // h2 element
    const h2 = document.createElement('h2');
    h2.textContent = animal.type.toUpperCase();
    // image
    const img = document.createElement('img');
    img.src = `./assets/${animal.image}`;

    // p
    const p = document.createElement('p');
    p.textContent = `${animal.class} with ${animal.numberOfLegs} legs and a cuteness rating of ${animal.cuteness}.`;
    div.append(h2, img, p);
    return div;
}
export function renderDrinks(drink) {
    const li = document.createElement('li');
    li.classList.add('drink');
    li.textContent = drink;
    return li;
}
export function renderPlayers(player) {
    const div = document.createElement('div');
    div.classList.add('player');
    //created a div called players and a
    const h2 = document.createElement('h2');
    h2.textContent = player.type.toUpperCase();

    const img = document.createElement('img');
    img.src = `./assets/${player.image}`;

    const p = document.createElement('p');
    p.textContent = `${player.personal.age}`;

    div.append(h2, img, p);
    return div;
}
export function renderFilms(film) {
    const div = document.createElement('div');
    div.classList.add('film');

    const h2 = document.createElement('h2');
    h2.textContent = film.title.toUpperCase();

    const h3 = document.createElement('h3');
    h3.textContent = `The following reviews are out of 10! Most recent reviews are   ${film.ratingsOutOfTen}`;
    // const p = document.createElement('p');
    // p.textContent = `The following reviews are out of 10 ${film.ratingOutOfTen}`;

    div.append(h2, h3);
    return div;
}