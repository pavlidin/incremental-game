let resourcesCount = 0;

let game = {};
let player = {};

let randomColor = Math.floor(Math.random() * 16777215).toString(16);

const crafting = document.querySelector(".crafting");
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
player.resources = {};

Object.keys(game.resources).forEach((_el, index) => {
  resources.innerHTML += `<div class="col p-1"><div class="resource p-3 m-2" id="resource-${index}">${
    Object.values(game.resources)[index].name
  }</div></div>`;
});

Object.keys(game.resources).forEach(() => {
  resourcesCount++;
});

arr = new Array(resourcesCount).fill(0);
document.querySelectorAll(".resource").forEach((item) => {
  item.addEventListener("click", (e) => {
    let index = +e.target.id.substr(9);
    let resourceName = game.resources[index].name;
    player.resources[index] = { [resourceName]: ++arr[index] };
    crafting.innerHTML = '+1 ' + resourceName;
    if (document.querySelector(`#resource-${index + 1}`)) {
      document.querySelector(`#resource-${index + 1}`).style.display = "";
    }
  });
});

document.querySelectorAll(".resource").forEach((item, itemIndex) => {
  if (itemIndex > 0) {
    item.style.display = "none";
  }
});
