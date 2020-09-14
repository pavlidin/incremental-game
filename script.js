let resourcesCount = 0;
let interval, interval2, index, resourceName;

let game = {};
let player = {};

let randomColor = Math.floor(Math.random() * 16777215).toString(16);

const crafting = document.querySelector(".crafting");
const resources = document.querySelector(".resources");
const resource = document.querySelectorAll(".resource");
const ownedNeons = document.querySelector("#ownedNeons");

game.resources = {
  0: {
    name: "Quantum",
    baseCost: 1,
  },
  1: {
    name: "Neutrino",
    baseCost: 5,
  },
  2: {
    name: "Preon",
    baseCost: 10,
  },
  3: {
    name: "Electron Core",
    baseCost: 15,
  },
  4: {
    name: "Proton",
    baseCost: 20,
  },
  5: {
    name: "Uranium Nucleus",
    baseCost: 25,
  },
  6: {
    name: "Gamma Ray",
    baseCost: 30,
  },
  7: {
    name: "Angstrom",
    baseCost: 35,
  },
  8: {
    name: "Carbon Nanotube1",
    baseCost: 40,
  },
  9: {
    name: "Carbon Nanotube2",
    baseCost: 45,
  },
  10: {
    name: "Carbon Nanotube3",
    baseCost: 50,
  },
  11: {
    name: "Carbon Nanotube4",
    baseCost: 55,
  },
  12: {
    name: "Carbon Nanotube5",
    baseCost: 60,
  },
  13: {
    name: "Carbon Nanotube6",
    baseCost: 65,
  },
  14: {
    name: "Carbon Nanotube7",
    baseCost: 70,
  },
  15: {
    name: "Carbon Nanotube8",
    baseCost: 75,
  },
  16: {
    name: "Carbonara",
    baseCost: 80,
  },
};

player.resources = {};

player.currencies = {
  0: {
    name: "Neon",
    owned: 1,
  },
};

ownedNeons.innerHTML = player.currencies[0].owned + " Neon";

Object.keys(game.resources).forEach((_el, index) => {
  resources.innerHTML += `<div class="col p-1"><div class="disabled resource p-1 m-2" id="resource-${index}"><h4>${
    Object.values(game.resources)[index].name
  }</h4><br>Cost: ${game.resources[index].baseCost} Neon</div></div>`;
});

Object.keys(game.resources).forEach(() => {
  resourcesCount++;
});

arr = new Array(resourcesCount).fill(0);
document.querySelectorAll(".resource").forEach((item, index) => {
  item.addEventListener("click", (e) => {
    resourceName = game.resources[index].name;
    //I CAN BUY THE UPGRADE
    if (player.currencies[0].owned >= game.resources[index].baseCost) {
      update(index, resourceName);
    }
  });
});

document.querySelectorAll(".resource").forEach((item, itemIndex) => {
  if (itemIndex > 0) {
    item.style.display = "none";
  }
});

function update(index, resourceName) {
  clearInterval(interval);
  player.resources[index] = { [resourceName]: ++arr[index] };

  if (index < Object.keys(game.resources).length - 1) {
    document.querySelector(`#resource-${index + 1}`).style.display = "";
  }

  player.currencies[0].owned -= +game.resources[index].baseCost.toFixed(1);
  //UI
  ownedNeons.innerHTML = player.currencies[0].owned.toFixed(1) + " Neon";

  interval = window.setInterval(() => {
    //Backend
    player.currencies[0].owned = +(
      player.currencies[0].owned +
      0.4 * Object.values(player.resources[index])
    ).toFixed(1);
    //UI
    ownedNeons.innerHTML = player.currencies[0].owned.toFixed(1) + " Neon";
  }, 500);
}

interval2 = window.setInterval(() => {
  document.querySelectorAll(".resource").forEach((el, index) => {
    if (player.currencies[0].owned >= game.resources[index].baseCost) {
      el.classList.remove("disabled");
    } else {
      el.classList.add("disabled");
    }
  });

  canvas(Math.floor(player.currencies[0].owned));
}, 100);

function canvas(neonOwned) {
  var ct = document.getElementById("canvas");
  var ctx = document.getElementById("canvas").getContext("2d");
  var imgdata, imgdata2, imgdata3, imgdataBlack;
  imgdataBlack = ctx.getImageData(0, 0, ct.width, ct.height);

  if (neonOwned > 0) {
    imgdata = ctx.getImageData(0, 0, Math.floor(neonOwned), ct.height/3);
    imgdata2 = ctx.getImageData(0, 0, Math.floor(neonOwned), ct.height/3);
    imgdata3 = ctx.getImageData(0, 0, Math.floor(neonOwned), ct.height/3);
  }
  var imgdatalen = imgdata?.data?.length;
  var imgdataBlacklen = imgdataBlack?.data?.length;
  for (var i = 0; i < imgdataBlacklen / 4; i++) {
    //iterate over every pixel in the canvas
    imgdataBlack.data[4 * i] = 0; // RED (0-255)
    imgdataBlack.data[4 * i + 1] = 0; // GREEN (0-255)
    imgdataBlack.data[4 * i + 2] = 0; // BLUE (0-255)
    imgdataBlack.data[4 * i + 3] = 255; // APLHA (0-255)
  }
  ctx.putImageData(imgdataBlack, 0, 0);
  for (var i = 0; i < imgdatalen / 4; i++) {
    //iterate over every pixel in the canvas
    imgdata.data[4 * i] = 100; // RED (0-255)
    imgdata.data[4 * i + 1] = 0; // GREEN (0-255)
    imgdata.data[4 * i + 2] = 255; // BLUE (0-255)
    imgdata.data[4 * i + 3] = 255; // APLHA (0-255)

    imgdata2.data[4 * i] = 0; // RED (0-255)
    imgdata2.data[4 * i + 1] = 255; // GREEN (0-255)
    imgdata2.data[4 * i + 2] = 0; // BLUE (0-255)
    imgdata2.data[4 * i + 3] = 255; // APLHA (0-255)

    imgdata3.data[4 * i] = 255; // RED (0-255)
    imgdata3.data[4 * i + 1] = 0; // GREEN (0-255)
    imgdata3.data[4 * i + 2] = 0; // BLUE (0-255)
    imgdata3.data[4 * i + 3] = 255; // APLHA (0-255)
  }
  if (imgdata) ctx.putImageData(imgdata, 0, 0);
  if (imgdata2) ctx.putImageData(imgdata2, 0, ct.height/3);
  if (imgdata3) ctx.putImageData(imgdata3, 0, 2*(ct.height/3));
}
