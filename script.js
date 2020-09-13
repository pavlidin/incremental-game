let game = {};
let player = {};

let randomColor = Math.floor(Math.random() * 16777215).toString(16);

const resources = document.querySelector(".resources");
const resource = document.querySelectorAll(".resource");

game.resources = {
  0: {
    name: "Quantum",
    baseCost: 5,
  },
  1: {
    name: "Neutrino",
    baseCost: 10,
  },
  2: {
    name: "Preon",
    baseCost: 15,
  },
  3: {
    name: "Electron Core",
    baseCost: 20,
  },
  4: {
    name: "Proton",
    baseCost: 25,
  },
  5: {
    name: "Uranium Nucleus",
    baseCost: 30,
  },
  6: {
    name: "Gamma Ray",
    baseCost: 35,
  },
  7: {
    name: "Angstrom",
    baseCost: 40,
  },
  8: {
    name: "Carbon Nanotube1",
    baseCost: 45,
  },
  9: {
    name: "Carbon Nanotube2",
    baseCost: 45,
  },
  10: {
    name: "Carbon Nanotube3",
    baseCost: 45,
  },
  11: {
    name: "Carbon Nanotube4",
    baseCost: 45,
  },
  12: {
    name: "Carbon Nanotube5",
    baseCost: 45,
  },
  13: {
    name: "Carbon Nanotube6",
    baseCost: 45,
  },
  14: {
    name: "Carbon Nanotube7",
    baseCost: 45,
  },
  15: {
    name: "Carbon Nanotube8",
    baseCost: 45,
  },
  16: {
    name: "Carbonara",
    baseCost: 80,
  },
};

Object.keys(game.resources).forEach((el, index) => {
  resources.innerHTML += `<div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 resource p-3 m-2 mx-1">${
    Object.values(game.resources)[index].name
  }</div>`;
  
});
