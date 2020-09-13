let game = {};
let player = {};

let randomColor = Math.floor(Math.random()*16777215).toString(16);

const resources = document.querySelector('.resources');
const resource = document.querySelectorAll('.resource');

game.resources = {
    0 : {
        name : 'Quantum',
        baseCost : 5
    },
    1 : {
        name : 'Neutrino',
        baseCost : 10
    },
    2 : {
        name : 'Preon',
        baseCost : 15
    },
    3 : {
        name : 'Electron Core',
        baseCost : 20
    },
    4 : {
        name : 'Proton',
        baseCost : 25
    },
    5 : {
        name : 'Uranium Nucleus',
        baseCost : 30
    },
    6 : {
        name : 'Gamma Ray',
        baseCost : 35
    },
    7 : {
        name : 'Angstrom',
        baseCost : 40
    },
    8 : {
        name : 'Carbon Nanotube',
        baseCost : 45
    },
    9 : {
        name : 'Carbon Nanotube',
        baseCost : 45
    },
    10 : {
        name : 'Carbon Nanotube',
        baseCost : 45
    },
    11 : {
        name : 'Carbon Nanotube',
        baseCost : 45
    },
};

Object.keys(game.resources).forEach((el, index) => {
    // resources.innerHTML += `<div class="col resource">${Object.values(game.resources)[index].name}</div>`;
    // el.addEventListener('click', update);
});




document.querySelectorAll('.resource').forEach(e => {
    e.style.backgroundColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    // e.addEventListener('click', update);
})